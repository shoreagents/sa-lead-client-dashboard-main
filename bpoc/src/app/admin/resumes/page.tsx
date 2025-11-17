'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  FileText, 
  Search, 
  MoreHorizontal, 
  Download, 
  Eye, 
  Trash2,
  Calendar,
  User,
  Mail,
  File,
  CheckCircle,
  Clock,
  AlertCircle,
  X,
  RefreshCw,
  ChevronDown,
  TrendingUp,
  BarChart3,
  Loader2
} from 'lucide-react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/toast'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'

import AdminLayout from '@/components/layout/AdminLayout'

interface Resume {
  id: string
  user_id: string
  resume_title: string
  template_used: string
  view_count: number
  created_at: string
  updated_at: string
  user_name: string
  user_email: string
  user_avatar?: string
}

export default function ResumesPage() {
  const [resumes, setResumes] = useState<Resume[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [previewResume, setPreviewResume] = useState<any>(null)
  const [previewLoading, setPreviewLoading] = useState(false)
  const [previewOpen, setPreviewOpen] = useState(false)
  const [deleteResumeId, setDeleteResumeId] = useState<string | null>(null)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [deletingResumes, setDeletingResumes] = useState<Set<string>>(new Set())
  const [forceDeleteMode, setForceDeleteMode] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  const [sortOrder, setSortOrder] = useState<string>('latest')
  const [exportingResumeId, setExportingResumeId] = useState<string | null>(null)

  // Fetch resumes from database
  const fetchResumes = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/admin/resumes?t=${Date.now()}`, { cache: 'no-store' })
      const data = await response.json()
      
      if (response.ok) {
        console.log('📋 Fetched resumes:', data.resumes);
        console.log('📋 First resume slug:', data.resumes[0]?.resume_slug);
        setResumes(data.resumes)
      } else {
        toast.error('Failed to fetch resumes')
      }
    } catch (error) {
      toast.error('Error fetching resumes')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchResumes()
  }, [])



  // Filter resumes based on search term and sort by date
  const filteredResumes = resumes.filter((resume) => {
    const matchesSearch = 
      resume.resume_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resume.user_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resume.template_used.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resume.user_email.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesSearch
  }).sort((a, b) => {
    const dateA = new Date(a.created_at).getTime()
    const dateB = new Date(b.created_at).getTime()
    return sortOrder === 'latest' ? dateB - dateA : dateA - dateB
  })



  // Pagination logic
  const totalPages = Math.ceil(filteredResumes.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentResumes = filteredResumes.slice(startIndex, endIndex)

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, sortOrder])

  const getStatusBadge = (status: string) => {
    const variants = {
      active: 'bg-green-500/20 text-green-400 border-green-500/30',
      draft: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      archived: 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
    return variants[status as keyof typeof variants] || variants.draft
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const handleViewResume = async (resumeId: string) => {
    try {
      setPreviewLoading(true)
      setPreviewOpen(true)
      
      const response = await fetch(`/api/admin/resumes/${resumeId}/preview?t=${Date.now()}`, { cache: 'no-store' })
      const data = await response.json()
      
      if (response.ok) {
        console.log('🔍 Preview resume data:', data.resume);
        console.log('🔍 Preview resume slug:', data.resume?.resume_slug);
        setPreviewResume(data.resume)
      } else {
        toast.error('Failed to fetch resume preview')
      }
    } catch (error) {
      toast.error('Error fetching resume preview')
    } finally {
      setPreviewLoading(false)
    }
  }

  // Export to PDF function (for when preview is already open)
  const exportToPDF = async () => {
    if (!previewResume) {
      toast.error('No resume to export')
      return
    }

    setExportingResumeId(previewResume.id)

    try {
      // Wait for fonts to load
      await document.fonts.ready

      let element: HTMLElement | null = null

      // Try to get the resume content element
      // First, try to get from iframe if it exists
      if (previewResume?.resume_slug) {
        // Wait a bit for iframe to load
        await new Promise(resolve => setTimeout(resolve, 500))
        
        const iframe = document.querySelector('iframe[title="Resume Preview"]') as HTMLIFrameElement
        if (iframe?.contentDocument) {
          element = iframe.contentDocument.getElementById('resume-content')
          if (!element) {
            // Try to get the body of the iframe
            const iframeBody = iframe.contentDocument.body
            if (iframeBody) {
              element = iframeBody
            }
          }
        }
      }

      // If not found in iframe, try to get from the HTML content div
      if (!element) {
        const htmlContentDiv = document.querySelector('.resume-preview-content') as HTMLElement
        if (htmlContentDiv) {
          element = htmlContentDiv
        }
      }

      if (!element) {
        toast.error('Resume content not found. Please ensure the preview is loaded.')
        return
      }

      await generatePDFFromElement(element, previewResume.user_name || 'Resume')

    } catch (error) {
      console.error('Error exporting PDF:', error)
      toast.error('Error generating PDF. Please try again.')
    } finally {
      setExportingResumeId(null)
    }
  }

  // Direct export function (fetches resume and exports without opening preview)
  const exportResumeToPDF = async (resumeId: string, userName: string) => {
    setExportingResumeId(resumeId)

    try {
      // Fetch resume data
      const response = await fetch(`/api/admin/resumes/${resumeId}/preview?t=${Date.now()}`, { cache: 'no-store' })
      const data = await response.json()
      
      if (!response.ok) {
        toast.error('Failed to fetch resume data')
        return
      }

      const resumeData = data.resume

      // Wait for fonts to load
      await document.fonts.ready

      let element: HTMLElement | null = null

      // Get HTML content - prefer resume_html, or fetch from resume_slug if needed
      let htmlContent = resumeData?.resume_html

      // If HTML content contains "preview not available" or is missing, fetch from slug
      if ((!htmlContent || htmlContent.includes('preview not available') || htmlContent.includes('Resume preview not available')) && resumeData?.resume_slug) {
        try {
          // Fetch the resume page HTML
          const htmlResponse = await fetch(`/${resumeData.resume_slug}`, { cache: 'no-store' })
          const htmlText = await htmlResponse.text()
          
          // Extract the resume-content div from the HTML using regex
          // Look for the div with id="resume-content"
          const resumeContentMatch = htmlText.match(/<div[^>]*id=["']resume-content["'][^>]*>([\s\S]*?)<\/div>/i)
          
          if (resumeContentMatch && resumeContentMatch[1]) {
            // Found the resume-content div
            htmlContent = `<div id="resume-content">${resumeContentMatch[1]}</div>`
          } else {
            // Try to find any div with class containing "resume"
            const resumeDivMatch = htmlText.match(/<div[^>]*class=["'][^"']*resume[^"']*["'][^>]*>([\s\S]*?)<\/div>/i)
            if (resumeDivMatch && resumeDivMatch[1]) {
              htmlContent = `<div id="resume-content">${resumeDivMatch[1]}</div>`
            } else {
              // Last resort: try to get the main content area
              const mainMatch = htmlText.match(/<main[^>]*>([\s\S]*?)<\/main>/i)
              if (mainMatch && mainMatch[1]) {
                htmlContent = `<div id="resume-content">${mainMatch[1]}</div>`
              }
            }
          }
        } catch (fetchError) {
          console.warn('Failed to fetch resume HTML, using available data:', fetchError)
          // If fetch fails, check if we have resume_data to generate HTML
          if (resumeData?.resume_data) {
            // We'll handle this below
          }
        }
      }

      // If still no valid HTML content, try to generate from resume_data
      if (!htmlContent || htmlContent.includes('preview not available') || htmlContent.includes('Resume preview not available')) {
        if (resumeData?.resume_data) {
          // Generate HTML from resume_data structure
          const resumeDataObj = typeof resumeData.resume_data === 'string' 
            ? JSON.parse(resumeData.resume_data) 
            : resumeData.resume_data
          
          htmlContent = generateResumeHTMLFromData(resumeDataObj, userName)
        } else {
          throw new Error('No resume content available to export')
        }
      }

      // Create a properly attached container in the main document
      const hiddenContainer = document.createElement('div')
      hiddenContainer.id = 'pdf-export-container'
      hiddenContainer.style.position = 'fixed'
      hiddenContainer.style.left = '0'
      hiddenContainer.style.top = '0'
      hiddenContainer.style.width = '800px' // Match the content width
      hiddenContainer.style.minHeight = '297mm'
      hiddenContainer.style.backgroundColor = '#ffffff'
      hiddenContainer.style.zIndex = '9999'
      hiddenContainer.style.opacity = '0'
      hiddenContainer.style.pointerEvents = 'none'
      hiddenContainer.style.overflow = 'visible' // Allow content to flow naturally
      
      // Ensure it's attached to the main document body
      document.body.appendChild(hiddenContainer)

      try {
        // Create the resume content div
        const htmlDiv = document.createElement('div')
        htmlDiv.id = 'resume-content'
        htmlDiv.className = 'resume-preview-content'
        htmlDiv.style.padding = '40px'
        htmlDiv.style.backgroundColor = 'white'
        htmlDiv.style.color = '#333'
        htmlDiv.style.fontSize = '14px'
        htmlDiv.style.lineHeight = '1.6'
        htmlDiv.style.fontFamily = 'Arial, sans-serif'
        htmlDiv.style.width = '800px' // Fixed width for consistent rendering
        htmlDiv.style.maxWidth = '800px'
        htmlDiv.style.margin = '0 auto'
        htmlDiv.style.boxSizing = 'border-box'
        htmlDiv.style.overflow = 'hidden' // Prevent content overflow
        htmlDiv.innerHTML = htmlContent
        hiddenContainer.appendChild(htmlDiv)
        element = htmlDiv
        
        // Force a reflow to ensure content is rendered
        await new Promise(resolve => setTimeout(resolve, 500))

        // Wait for content to render and images to load
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Wait for any images to load
        const images = htmlDiv.getElementsByTagName('img')
        if (images.length > 0) {
          await Promise.all(
            Array.from(images).map(img => {
              if (img.complete) return Promise.resolve()
              return new Promise((resolve, reject) => {
                img.onload = resolve
                img.onerror = resolve // Continue even if image fails
                setTimeout(resolve, 3000) // Timeout after 3 seconds
              })
            })
          )
        }

        // Generate PDF from the element
        await generatePDFFromElement(element, userName)

      } finally {
        // Clean up hidden container
        if (hiddenContainer.parentNode) {
          document.body.removeChild(hiddenContainer)
        }
      }

    } catch (error) {
      console.error('Error exporting PDF:', error)
      toast.error('Error generating PDF. Please try again.')
    } finally {
      setExportingResumeId(null)
    }
  }

  // Helper function to generate HTML from resume data (matches the resume view page structure)
  const generateResumeHTMLFromData = (resumeData: any, userName: string): string => {
    // Extract the actual content structure
    const content = resumeData?.content || resumeData
    const template = resumeData?.template || {}
    const headerInfo = resumeData?.headerInfo || {}
    const profilePhoto = resumeData?.profilePhoto
    
    const primaryColor = template?.primaryColor || '#6366f1'
    const secondaryColor = template?.secondaryColor || '#6b7280'
    const fontFamily = template?.fontFamily || 'Inter, sans-serif'
    
    // Get name from headerInfo or content
    const name = headerInfo?.name || content?.name || userName || 'Professional'
    const title = headerInfo?.title || content?.bestJobTitle || content?.title || 'Professional'
    const location = headerInfo?.location || content?.location || ''
    const email = headerInfo?.email || content?.email || ''
    const phone = headerInfo?.phone || content?.phone || ''
    
    let html = `<div id="resume-content" style="font-family: ${fontFamily}, sans-serif; width: 100%; max-width: 800px; margin: 0 auto; padding: 40px; background: white; color: #1f2937; box-sizing: border-box; overflow: hidden;">`
    
    // Header Section
    html += `<div style="margin-bottom: 32px; position: relative;">`
    if (profilePhoto) {
      html += `<div style="text-align: left;">`
    } else {
      html += `<div style="text-align: center;">`
    }
    html += `<h1 style="font-size: 24px; font-weight: bold; margin-bottom: 8px; color: ${primaryColor};">${escapeHtml(name)}</h1>`
    html += `<p style="font-size: 18px; font-weight: 600; margin-bottom: 8px; color: ${secondaryColor};">${escapeHtml(title)}</p>`
    if (location) {
      html += `<p style="color: #4b5563; margin-bottom: 8px;">${escapeHtml(location)}</p>`
    }
    if (email || phone) {
      html += `<div style="margin-top: 8px;">`
      if (email) html += `<span style="color: #4b5563; margin-right: 16px;">${escapeHtml(email)}</span>`
      if (phone) html += `<span style="color: #4b5563;">${escapeHtml(phone)}</span>`
      html += `</div>`
    }
    html += `</div>`
    
    if (profilePhoto) {
      html += `<div style="position: absolute; top: 0; right: 0;">`
      html += `<img src="${profilePhoto}" alt="Profile" style="width: 128px; height: 128px; border-radius: 8px; object-fit: cover; border: 4px solid ${primaryColor}; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />`
      html += `</div>`
    }
    html += `</div>`
    
    // Divider
    html += `<div style="width: 100%; height: 2px; margin: 24px 0; background-color: ${primaryColor}; opacity: 0.3;"></div>`
    
    // Professional Summary
    if (content?.summary) {
      html += `<div style="margin-bottom: 24px;">`
      html += `<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">`
      html += `<div style="width: 4px; height: 24px; border-radius: 2px; background-color: ${primaryColor};"></div>`
      html += `<h2 style="font-size: 18px; font-weight: 600; color: ${primaryColor};">Professional Summary</h2>`
      html += `</div>`
      html += `<p style="color: #374151; line-height: 1.75; padding-left: 12px; border-left: 2px solid ${secondaryColor};">${escapeHtml(content.summary)}</p>`
      html += `</div>`
    }
    
    // Work Experience
    if (content?.experience && Array.isArray(content.experience) && content.experience.length > 0) {
      html += `<div style="margin-bottom: 24px;">`
      html += `<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">`
      html += `<div style="width: 4px; height: 24px; border-radius: 2px; background-color: ${primaryColor};"></div>`
      html += `<h2 style="font-size: 18px; font-weight: 600; color: ${primaryColor};">Work Experience</h2>`
      html += `</div>`
      html += `<div style="space-y: 16px;">`
      content.experience.forEach((exp: any) => {
        html += `<div style="border-left: 4px solid ${secondaryColor}; padding-left: 16px; margin-bottom: 16px;">`
        html += `<div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">`
        html += `<h3 style="font-weight: 600; color: #1f2937; margin: 0;">${escapeHtml(exp.title || exp.position || '')}</h3>`
        if (exp.duration) {
          html += `<span style="font-size: 14px; color: #6b7280; background: #f3f4f6; padding: 4px 8px; border-radius: 9999px;">${escapeHtml(exp.duration)}</span>`
        }
        html += `</div>`
        if (exp.company) {
          html += `<p style="color: #4b5563; margin-bottom: 8px; font-weight: 500;">${escapeHtml(exp.company)}</p>`
        }
        if (exp.description) {
          html += `<p style="color: #374151; font-size: 14px; margin-bottom: 8px;">${escapeHtml(exp.description)}</p>`
        }
        if (exp.achievements && Array.isArray(exp.achievements) && exp.achievements.length > 0) {
          html += `<ul style="list-style: disc; padding-left: 20px; margin: 8px 0; font-size: 14px; color: #374151;">`
          exp.achievements.forEach((ach: string) => {
            html += `<li style="margin-bottom: 4px;">${escapeHtml(ach)}</li>`
          })
          html += `</ul>`
        }
        html += `</div>`
      })
      html += `</div>`
      html += `</div>`
    }
    
    // Education
    if (content?.education && Array.isArray(content.education) && content.education.length > 0) {
      html += `<div style="margin-bottom: 24px;">`
      html += `<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">`
      html += `<div style="width: 4px; height: 24px; border-radius: 2px; background-color: ${primaryColor};"></div>`
      html += `<h2 style="font-size: 18px; font-weight: 600; color: ${primaryColor};">Education</h2>`
      html += `</div>`
      html += `<div style="space-y: 16px;">`
      content.education.forEach((edu: any) => {
        html += `<div style="border-left: 4px solid ${secondaryColor}; padding-left: 16px; margin-bottom: 16px;">`
        html += `<div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">`
        html += `<h3 style="font-weight: 600; color: #1f2937; margin: 0;">${escapeHtml(edu.degree || '')}</h3>`
        if (edu.year) {
          html += `<span style="font-size: 14px; color: #6b7280; background: #f3f4f6; padding: 4px 8px; border-radius: 9999px;">${escapeHtml(edu.year)}</span>`
        }
        html += `</div>`
        if (edu.institution) {
          html += `<p style="color: #4b5563; margin-bottom: 8px; font-weight: 500;">${escapeHtml(edu.institution)}</p>`
        }
        if (edu.major) {
          html += `<p style="color: #374151; font-size: 14px; margin-bottom: 8px;">Major: ${escapeHtml(edu.major)}</p>`
        }
        if (edu.highlights && Array.isArray(edu.highlights) && edu.highlights.length > 0) {
          html += `<ul style="list-style: disc; padding-left: 20px; margin: 8px 0; font-size: 14px; color: #374151;">`
          edu.highlights.forEach((highlight: string) => {
            html += `<li style="margin-bottom: 4px;">${escapeHtml(highlight)}</li>`
          })
          html += `</ul>`
        }
        html += `</div>`
      })
      html += `</div>`
      html += `</div>`
    }
    
    // Skills
    if (content?.skills) {
      html += `<div style="margin-bottom: 24px;">`
      html += `<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">`
      html += `<div style="width: 4px; height: 24px; border-radius: 2px; background-color: ${primaryColor};"></div>`
      html += `<h2 style="font-size: 18px; font-weight: 600; color: ${primaryColor};">Skills</h2>`
      html += `</div>`
      html += `<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">`
      
      if (content.skills.technical && Array.isArray(content.skills.technical) && content.skills.technical.length > 0) {
        html += `<div>`
        html += `<h3 style="font-weight: 500; color: #1f2937; margin-bottom: 12px;">Technical Skills</h3>`
        html += `<div style="display: flex; flex-wrap: wrap; gap: 8px;">`
        content.skills.technical.forEach((skill: string) => {
          html += `<span style="background-color: ${secondaryColor}; color: white; font-size: 12px; padding: 4px 8px; border-radius: 4px;">${escapeHtml(skill)}</span>`
        })
        html += `</div>`
        html += `</div>`
      }
      
      if (content.skills.soft && Array.isArray(content.skills.soft) && content.skills.soft.length > 0) {
        html += `<div>`
        html += `<h3 style="font-weight: 500; color: #1f2937; margin-bottom: 12px;">Soft Skills</h3>`
        html += `<div style="display: flex; flex-wrap: wrap; gap: 8px;">`
        content.skills.soft.forEach((skill: string) => {
          html += `<span style="border: 1px solid #d1d5db; color: #374151; font-size: 12px; padding: 4px 8px; border-radius: 4px;">${escapeHtml(skill)}</span>`
        })
        html += `</div>`
        html += `</div>`
      }
      
      if (content.skills.languages && Array.isArray(content.skills.languages) && content.skills.languages.length > 0) {
        html += `<div>`
        html += `<h3 style="font-weight: 500; color: #1f2937; margin-bottom: 12px;">Languages</h3>`
        html += `<div style="display: flex; flex-wrap: wrap; gap: 8px;">`
        content.skills.languages.forEach((skill: string) => {
          html += `<span style="border: 1px solid #60a5fa; color: #1e40af; font-size: 12px; padding: 4px 8px; border-radius: 4px;">${escapeHtml(skill)}</span>`
        })
        html += `</div>`
        html += `</div>`
      }
      
      html += `</div>`
      html += `</div>`
    }
    
    // Certifications
    if (content?.certifications && Array.isArray(content.certifications) && content.certifications.length > 0) {
      html += `<div style="margin-bottom: 24px;">`
      html += `<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">`
      html += `<div style="width: 4px; height: 24px; border-radius: 2px; background-color: ${primaryColor};"></div>`
      html += `<h2 style="font-size: 18px; font-weight: 600; color: ${primaryColor};">Certifications</h2>`
      html += `</div>`
      html += `<div style="space-y: 12px;">`
      content.certifications.forEach((cert: string) => {
        html += `<div style="border-left: 4px solid ${secondaryColor}; padding-left: 16px;">`
        html += `<p style="color: #374151; font-size: 14px;">${escapeHtml(cert)}</p>`
        html += `</div>`
      })
      html += `</div>`
      html += `</div>`
    }
    
    // Projects
    if (content?.projects && Array.isArray(content.projects) && content.projects.length > 0) {
      html += `<div style="margin-bottom: 24px;">`
      html += `<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">`
      html += `<div style="width: 4px; height: 24px; border-radius: 2px; background-color: ${primaryColor};"></div>`
      html += `<h2 style="font-size: 18px; font-weight: 600; color: ${primaryColor};">Projects</h2>`
      html += `</div>`
      html += `<div style="space-y: 16px;">`
      content.projects.forEach((proj: any) => {
        html += `<div style="border-left: 4px solid ${secondaryColor}; padding-left: 16px; margin-bottom: 16px;">`
        if (proj.title) {
          html += `<h3 style="font-weight: 600; color: #1f2937; margin-bottom: 8px;">${escapeHtml(proj.title)}</h3>`
        }
        if (proj.description) {
          html += `<p style="color: #374151; font-size: 14px; margin-bottom: 8px; line-height: 1.6;">${escapeHtml(proj.description)}</p>`
        }
        if (proj.technologies && Array.isArray(proj.technologies) && proj.technologies.length > 0) {
          html += `<p style="color: #6b7280; font-size: 12px; margin-top: 8px;"><strong>Technologies:</strong> ${escapeHtml(proj.technologies.join(', '))}</p>`
        }
        if (proj.impact && Array.isArray(proj.impact) && proj.impact.length > 0) {
          html += `<ul style="list-style: disc; padding-left: 20px; margin: 8px 0; font-size: 14px; color: #374151;">`
          proj.impact.forEach((impact: string) => {
            html += `<li style="margin-bottom: 4px;">${escapeHtml(impact)}</li>`
          })
          html += `</ul>`
        }
        html += `</div>`
      })
      html += `</div>`
      html += `</div>`
    }
    
    html += `</div>`
    return html
  }
  
  // Helper function to escape HTML
  const escapeHtml = (text: string): string => {
    if (!text) return ''
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
  }

  // Helper function to generate PDF from an element
  const generatePDFFromElement = async (element: HTMLElement, userName: string) => {
    console.log('Capturing resume content...')

    // Capture the resume content as a high-quality image
    const canvas = await html2canvas(element, {
      scale: 2, // Higher quality
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      width: element.scrollWidth,
      height: element.scrollHeight,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight
    })

    console.log('Canvas created, generating PDF...')

    // Initialize PDF with A4 dimensions
    const pdf = new jsPDF('p', 'mm', 'a4')

    // A4 dimensions in mm
    const pdfWidth = 210
    const pdfHeight = 297

    // Add margins for better appearance (10mm on all sides)
    const margin = 10
    const contentWidth = pdfWidth - (margin * 2)
    // Reduce content height by 15mm to add larger buffer and prevent text from being cut off
    const pageBuffer = 15 // Larger buffer to prevent cutting text at page boundaries
    const contentHeight = pdfHeight - (margin * 2) - pageBuffer

    // Use the full content width to maintain readability
    const scaledWidth = contentWidth
    const scaledHeight = (canvas.height * scaledWidth) / canvas.width

    // Calculate total content height in PDF units
    const totalContentHeight = scaledHeight

    // Calculate how many pages we need (add small buffer to prevent rounding errors)
    const totalPages = Math.ceil((totalContentHeight + 0.1) / contentHeight)

    console.log(`Resume height: ${totalContentHeight.toFixed(2)}mm, Pages needed: ${totalPages}`)
    console.log(`Canvas dimensions: ${canvas.width}x${canvas.height}px`)
    console.log(`Content height per page: ${contentHeight}mm (with ${pageBuffer}mm buffer)`)

    // Work in pixels to ensure perfect continuity between pages
    const totalPixels = canvas.height
    const pixelsPerPageFloat = (contentHeight * totalPixels) / totalContentHeight
    // Use floor with additional safety margin to ensure we don't cut text
    // Subtract 20 pixels as additional safety margin
    const pixelsPerPage = Math.max(100, Math.floor(pixelsPerPageFloat) - 20)

    let processedPixels = 0

    // Split content across pages
    for (let page = 0; page < totalPages; page++) {
      if (page > 0) {
        pdf.addPage()
      }

      // Calculate remaining pixels
      const remainingPixels = totalPixels - processedPixels

      // Determine pixels for this page
      let pixelsForThisPage: number
      if (page === totalPages - 1) {
        // Last page: capture all remaining content
        pixelsForThisPage = remainingPixels
      } else {
        // Regular pages: use calculated pixels per page
        // Be conservative - use slightly less to ensure we don't cut text
        pixelsForThisPage = Math.min(pixelsPerPage, remainingPixels)
      }

      if (pixelsForThisPage <= 0 || processedPixels >= totalPixels) {
        break
      }

      // Calculate source rectangle
      const sourceY = processedPixels
      const sourceHeight = pixelsForThisPage

      // Create canvas for this page
      const pageCanvas = document.createElement('canvas')
      pageCanvas.width = canvas.width
      pageCanvas.height = sourceHeight
      const pageCtx = pageCanvas.getContext('2d')

      if (pageCtx) {
        // Draw the portion for this page
        pageCtx.drawImage(
          canvas,
          0, sourceY, canvas.width, sourceHeight,
          0, 0, canvas.width, sourceHeight
        )

        const pageImgData = pageCanvas.toDataURL('image/png', 1.0)

        // Calculate height in PDF units for this page
        const pageHeightInMM = (sourceHeight * scaledWidth) / canvas.width

        // Position content at the top of the content area (with margin)
        const xPosition = margin
        const yPosition = margin

        // Add image to PDF with proper positioning and margins
        pdf.addImage(
          pageImgData,
          'PNG',
          xPosition,
          yPosition,
          scaledWidth,
          pageHeightInMM
        )

        // Update processed pixels
        processedPixels += sourceHeight
      }
    }

    // Format filename as FirstName-LastName-BPOC-Resume.pdf
    const fullName = userName || 'Resume'
    const nameParts = fullName.trim().split(/\s+/)
    const firstName = nameParts[0] || 'Resume'
    const lastName = nameParts.slice(1).join('-') || 'User'
    const fileName = `${firstName}-${lastName}-BPOC-Resume.pdf`
    pdf.save(fileName)

    console.log('PDF saved successfully')
    toast.success('Resume exported to PDF successfully!')
  }



  const handleDeleteResume = async (resumeId: string, force: boolean = false) => {
    try {
      setDeletingResumes(prev => new Set(prev).add(resumeId))
      
      const url = force 
        ? `/api/admin/resumes/${resumeId}?force=true`
        : `/api/admin/resumes/${resumeId}`
      
      const response = await fetch(url, {
        method: 'DELETE',
      })
      
      if (response.ok) {
        // Remove the deleted resume from the list
        setResumes(prevResumes => prevResumes.filter(resume => resume.id !== resumeId))
        setShowDeleteDialog(false)
        setDeleteResumeId(null)
        setForceDeleteMode(false)
        
        // Show success toast
        toast.success('Resume deleted successfully')
      } else {
        const errorData = await response.json()
        
        // Check if it's a constraint violation and offer force delete
        if (response.status === 400 && (errorData.error.includes('applications') || errorData.error.includes('referenced'))) {
          setForceDeleteMode(true)
          setDeleteResumeId(resumeId) // Make sure we keep the resume ID
          setShowDeleteDialog(true) // Open the dialog to show force delete option
          toast.error('Resume has applications. Use force delete to remove all references.')
        } else {
          toast.error(errorData.error || 'Failed to delete resume')
        }
      }
    } catch (error) {
      toast.error('Error deleting resume')
    } finally {
      setDeletingResumes(prev => {
        const newSet = new Set(prev)
        newSet.delete(resumeId)
        return newSet
      })
    }
  }



  return (
    <AdminLayout title="Resume Management" description="Manage user resumes and documents">
      <div className="space-y-6">
        {/* Header Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Total Resumes</p>
                  <p className="text-2xl font-bold text-white">{resumes.length}</p>
                  <p className="text-xs text-green-400">All time</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Resumes This Month</p>
                  <p className="text-2xl font-bold text-white">
                    {resumes.filter(r => {
                      const createdDate = new Date(r.created_at)
                      const now = new Date()
                      return createdDate.getMonth() === now.getMonth() && 
                             createdDate.getFullYear() === now.getFullYear()
                    }).length}
                  </p>
                  <p className="text-xs text-green-400">New this month</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Avg Views/Resume</p>
                  <p className="text-2xl font-bold text-white">
                    {resumes.length > 0 
                      ? Math.round(resumes.reduce((sum, r) => sum + r.view_count, 0) / resumes.length)
                      : 0}
                  </p>
                  <p className="text-xs text-yellow-400">Average engagement</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Users</p>
                  <p className="text-2xl font-bold text-white">
                    {new Set(resumes.map(r => r.user_id)).size}
                  </p>
                  <p className="text-xs text-purple-400">With resumes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search resumes, users, or file types..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-white/20 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-white/20 invalid:border-white/20"
                />
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={fetchResumes}
                  className="border-transparent text-white hover:bg-white/10"
                  disabled={loading}
                >
                  <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                  Refresh
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="border-transparent text-white hover:bg-white/10">
                      {sortOrder === 'latest' ? 'Latest Resumes' : 'Oldest Resumes'}
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-gray-800 border-white/10">
                    <DropdownMenuItem 
                      onClick={() => setSortOrder('latest')}
                      className="text-white hover:bg-white/10"
                    >
                      Latest Resumes
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-white/10" />
                    <DropdownMenuItem 
                      onClick={() => setSortOrder('oldest')}
                      className="text-white hover:bg-white/10"
                    >
                      Oldest Resumes
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resumes Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
          </div>
        ) : filteredResumes.length === 0 ? (
          <div className="text-center py-8">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-400">No resumes found</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Resume Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {currentResumes.map((resume) => (
                <motion.div
                  key={resume.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="glass-card hover:bg-white/5 transition-all duration-200 cursor-pointer">
                    <CardContent className="p-4">
                                             {/* Header with User Info */}
                       <div className="flex items-center space-x-3 mb-3">
                         <Avatar className="w-10 h-10">
                           <AvatarImage 
                             src={resume.user_avatar} 
                             alt={resume.user_name}
                           />
                           <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-purple-600 text-white text-sm">
                             {getInitials(resume.user_name)}
                           </AvatarFallback>
                         </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="text-white font-medium text-sm truncate">{resume.user_name}</p>
                          <p className="text-gray-400 text-xs truncate">{resume.user_email}</p>
                        </div>
                      </div>

                                             {/* Resume Title */}
                       <div className="mb-3">
                         <h3 className="text-white font-semibold text-sm mb-1 truncate">
                           {resume.resume_title && !resume.resume_title.toLowerCase().includes('candidate') 
                             ? resume.resume_title 
                             : `${resume.user_name || 'User'}'s Resume`}
                         </h3>
                         <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                           {resume.template_used}
                         </Badge>
                       </div>

                       {/* Resume Info */}
                       <div className="space-y-2 mb-4">
                         <div className="flex items-center justify-between text-xs">
                           <div className="flex items-center space-x-1">
                             <Eye className="w-3 h-3 text-gray-400" />
                             <span className="text-gray-400">Views</span>
                           </div>
                           <span className="text-gray-300">{resume.view_count}</span>
                         </div>
                         
                         <div className="flex items-center justify-between text-xs">
                           <div className="flex items-center space-x-1">
                             <Calendar className="w-3 h-3 text-gray-400" />
                             <span className="text-gray-400">Created</span>
                           </div>
                           <span className="text-gray-300">{formatDate(resume.created_at)}</span>
                         </div>
                       </div>

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between pt-2 border-t border-white/10">
                        <div className="flex items-center space-x-1">
                                                     <Button
                             variant="ghost"
                             size="sm"
                             className="h-7 w-7 p-0 text-gray-400 hover:text-white hover:bg-white/10"
                             title="View Resume"
                             onClick={() => handleViewResume(resume.id)}
                           >
                             <Eye className="w-3 h-3" />
                           </Button>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-7 w-7 p-0 text-gray-400 hover:text-white hover:bg-white/10"
                            title="Download PDF"
                            onClick={() => exportResumeToPDF(resume.id, resume.user_name)}
                            disabled={exportingResumeId === resume.id}
                          >
                            {exportingResumeId === resume.id ? (
                              <Loader2 className="w-3 h-3 animate-spin" />
                            ) : (
                              <Download className="w-3 h-3" />
                            )}
                          </Button>
                              </TooltipTrigger>
                              <TooltipContent className="bg-gray-800 border-white/10 text-white">
                                {exportingResumeId === resume.id ? 'Exporting PDF...' : 'Download PDF'}
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          type="button"
                          className="h-7 w-7 p-0 text-red-400 hover:text-red-300 hover:bg-red-500/10"
                          title="Delete"
                          disabled={deletingResumes.has(resume.id)}
                          onClick={() => {
                            setDeleteResumeId(resume.id)
                            setForceDeleteMode(false)
                            setShowDeleteDialog(true)
                          }}
                        >
                          {deletingResumes.has(resume.id) ? (
                            <div className="w-3 h-3 animate-spin rounded-full border-2 border-red-400 border-t-transparent"></div>
                          ) : (
                          <Trash2 className="w-3 h-3" />
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {!loading && filteredResumes.length > 0 && (
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">
                  Showing {startIndex + 1} to {Math.min(endIndex, filteredResumes.length)} of {filteredResumes.length} resumes
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="border-white/10 text-white hover:bg-white/10 disabled:opacity-50"
                  >
                    Previous
                  </Button>

                  <div className="flex items-center space-x-1">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum
                      if (totalPages <= 5) {
                        pageNum = i + 1
                      } else if (currentPage <= 3) {
                        pageNum = i + 1
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i
                      } else {
                        pageNum = currentPage - 2 + i
                      }

                      return (
                        <Button
                          key={pageNum}
                          variant={currentPage === pageNum ? "default" : "outline"}
                          size="sm"
                          onClick={() => setCurrentPage(pageNum)}
                          className={
                            currentPage === pageNum
                              ? "bg-cyan-500 text-white hover:bg-cyan-600"
                              : "border-white/10 text-white hover:bg-white/10"
                          }
                        >
                          {pageNum}
                        </Button>
                      )
                    })}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="border-white/10 text-white hover:bg-white/10 disabled:opacity-50"
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
          </div>
                 )}

                           {/* Resume Preview Modal */}
        {previewOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-lg shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col">
              <div className="px-6 py-4 border-b border-white/10 flex-shrink-0 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-bold text-white">Resume Preview</h2>
                  {previewResume?.resume_slug && (
                    <span className="text-sm text-gray-400">Slug: {previewResume.resume_slug}</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={exportToPDF}
                    disabled={exportingResumeId !== null || !previewResume}
                    className="border-white/10 text-white hover:bg-white/10 px-4 py-2"
                  >
                    {exportingResumeId !== null ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Exporting...
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </>
                    )}
                  </Button>
                  {previewResume?.resume_slug && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(`/${previewResume.resume_slug}`, '_blank')}
                      className="border-white/10 text-white hover:bg-white/10 px-4 py-2"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Full Resume
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setPreviewOpen(false)}
                    className="h-8 w-8 p-0 text-gray-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              {previewLoading ? (
                <div className="flex items-center justify-center flex-1">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
                </div>
              ) : previewResume ? (
                <div className="space-y-6 px-6 py-6 flex-1 overflow-y-auto">
                  {/* Resume Header */}
                  <div className="flex items-center justify-between p-6 bg-white/5 rounded-lg border border-white/10">
                    <div>
                      <h2 className="text-2xl font-bold text-white">
                        {previewResume.resume_title && !previewResume.resume_title.toLowerCase().includes('candidate')
                          ? previewResume.resume_title
                          : `${previewResume.user_name || 'User'}'s Resume`}
                      </h2>
                      <p className="text-gray-400 text-lg">Created by {previewResume.user_name}</p>
                    </div>
                    <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-lg px-4 py-2">
                      {previewResume.template_used}
                    </Badge>
                  </div>

                  {/* Resume Content */}
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1">
                    {previewResume?.resume_slug ? (
                      <iframe
                        src={`/${previewResume.resume_slug}`}
                        className="w-full"
                        style={{ height: '70vh', border: '0' }}
                        title="Resume Preview"
                      />
                    ) : (
                      <div 
                        className="resume-preview-content"
                        style={{
                          height: '100%',
                          overflowY: 'auto',
                          padding: '40px',
                          backgroundColor: 'white',
                          color: '#333',
                          fontSize: '14px',
                          lineHeight: '1.6',
                          fontFamily: 'Arial, sans-serif'
                        }}
                        dangerouslySetInnerHTML={{ 
                          __html: previewResume?.resume_html || 'No preview available' 
                        }}
                      />
                    )}
                  </div>
                  
                </div>
              ) : (
                <div className="flex items-center justify-center flex-1">
                  <p className="text-gray-400">No resume data available</p>
                </div>
              )}
            </div>
          </div>
        )}
       </div>

       {/* Delete Confirmation Dialog */}
       <AlertDialog open={showDeleteDialog} onOpenChange={(open) => {
         if (!open) {
           setForceDeleteMode(false)
           setDeleteResumeId(null)
         }
         setShowDeleteDialog(open)
       }}>
         <AlertDialogContent className="bg-gray-900 border-gray-700 text-white z-[9999]">
           <AlertDialogHeader>
             <AlertDialogTitle className="text-white">Delete Resume</AlertDialogTitle>
             <AlertDialogDescription className="text-gray-300">
               {forceDeleteMode ? (
                 <>
                   This resume has applications that reference it. 
                   <br /><br />
                   <strong>Force delete will remove:</strong>
                   <br />• The resume
                   <br />• All related applications
                   <br /><br />
                   <span className="text-yellow-400">This action cannot be undone!</span>
                 </>
               ) : (
                 'Are you sure you want to delete this resume? This action cannot be undone.'
               )}
             </AlertDialogDescription>
           </AlertDialogHeader>
           <AlertDialogFooter>
             <AlertDialogCancel 
               className="border-gray-700 text-gray-300 hover:bg-gray-800"
               onClick={() => {
                 setForceDeleteMode(false)
                 setShowDeleteDialog(false)
                 setDeleteResumeId(null)
               }}
             >
               Cancel
             </AlertDialogCancel>
             {forceDeleteMode ? (
               <AlertDialogAction
                 onClick={() => {
                   deleteResumeId && handleDeleteResume(deleteResumeId, true)
                 }}
                 disabled={deleteResumeId ? deletingResumes.has(deleteResumeId) : false}
                 className="bg-red-700 hover:bg-red-800 text-white disabled:opacity-50"
               >
                 {deleteResumeId && deletingResumes.has(deleteResumeId) ? 'Force Deleting...' : 'Force Delete'}
               </AlertDialogAction>
             ) : (
             <AlertDialogAction
               onClick={() => {
                 deleteResumeId && handleDeleteResume(deleteResumeId)
               }}
                 disabled={deleteResumeId ? deletingResumes.has(deleteResumeId) : false}
                 className="bg-red-600 hover:bg-red-700 text-white disabled:opacity-50"
             >
                 {deleteResumeId && deletingResumes.has(deleteResumeId) ? 'Deleting...' : 'Delete'}
             </AlertDialogAction>
             )}
           </AlertDialogFooter>
         </AlertDialogContent>
       </AlertDialog>




     </AdminLayout>
   )
 } 