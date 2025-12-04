'use client'

import { useEffect, useState, useRef } from 'react'
import { createPortal } from 'react-dom'
import CandidateLayout from '@/components/layout/CandidateLayout'
import { useAuth } from '@/contexts/AuthContext'
import LoadingScreen from '@/components/ui/loading-screen'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Download, Edit, Pencil, Award, Trophy, FileText, Loader2, Share2, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from '@/components/ui/toast'

interface SavedResume {
  id: string
  slug: string
  title: string
  data: any
  template: string
  originalResumeId: string | null
  isPublic: boolean
  viewCount: number
  createdAt: string
  updatedAt: string
  userId: string
  user: {
    fullName: string
    avatarUrl: string
    email: string
    phone: string
    location: string
    position: string
  }
}

export default function ResumePage() {
  const { user } = useAuth()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [resumeSlug, setResumeSlug] = useState<string | null>(null)
  const [resume, setResume] = useState<SavedResume | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [exporting, setExporting] = useState(false)
  const [isShareOpen, setIsShareOpen] = useState<boolean>(false)
  const [showShareModal, setShowShareModal] = useState<boolean>(false)
  const [shareModalData, setShareModalData] = useState<{ platform: string; text: string; url: string }>({ platform: '', text: '', url: '' })
  const shareRef = useRef<HTMLDivElement>(null)
  const [dropdownPosition, setDropdownPosition] = useState<{ top: number; right: number } | null>(null)

  // Fetch resume slug
  useEffect(() => {
    const fetchResumeSlug = async () => {
      if (!user?.id) {
        setLoading(false)
        return
      }

      try {
        const response = await fetch(`/api/get-user-resume-slug?userId=${user.id}`)
        if (response.ok) {
          const data = await response.json()
          if (data.resumeSlug) {
            setResumeSlug(data.resumeSlug)
          }
        }
      } catch (error) {
        console.error('Error fetching resume slug:', error)
        setError('Failed to fetch resume slug')
      } finally {
        setLoading(false)
      }
    }

    fetchResumeSlug()
  }, [user?.id])

  // Fetch resume data when slug is available
  useEffect(() => {
    const fetchResume = async () => {
      if (!resumeSlug) return

      try {
        setLoading(true)
        const response = await fetch(`/api/get-saved-resume/${resumeSlug}`, {
          cache: 'no-store'
        })
        
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || 'Failed to load resume')
        }
        
        const data = await response.json()
        if (data.success && data.resume) {
          setResume(data.resume)
        } else {
          throw new Error('Resume not found')
        }
      } catch (error) {
        console.error('Error fetching resume:', error)
        setError(error instanceof Error ? error.message : 'Failed to load resume')
      } finally {
        setLoading(false)
      }
    }

    fetchResume()
  }, [resumeSlug])

  // Calculate dropdown position and close when clicking outside
  useEffect(() => {
    const updatePosition = () => {
      if (isShareOpen && shareRef.current) {
        const rect = shareRef.current.getBoundingClientRect()
        setDropdownPosition({
          top: rect.bottom + 8,
          right: window.innerWidth - rect.right
        })
      } else {
        setDropdownPosition(null)
      }
    }

    if (isShareOpen) {
      setTimeout(updatePosition, 0)
      window.addEventListener('scroll', updatePosition, true)
      window.addEventListener('resize', updatePosition)
    } else {
      setDropdownPosition(null)
    }

    return () => {
      window.removeEventListener('scroll', updatePosition, true)
      window.removeEventListener('resize', updatePosition)
    }
  }, [isShareOpen])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (shareRef.current && !shareRef.current.contains(event.target as Node)) {
        const target = event.target as Element
        if (!target.closest('[data-share-dropdown]')) {
          setIsShareOpen(false)
        }
      }
    }

    if (isShareOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isShareOpen])

  // Copy URL function
  const copyUrl = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url)
      toast.success('Resume URL copied to clipboard!')
    } catch (error) {
      console.error('Error copying URL:', error)
      toast.error('Failed to copy URL. Please try again.')
    }
  }

  // Share resume function
  const shareResume = async (platform?: string) => {
    if (!resume) return

    const currentUrl = new URL(window.location.href)
    const baseUrl = currentUrl.origin
    // Use the public resume URL instead of the candidate dashboard URL
    const resumeUrl = `${baseUrl}/resume/${resumeSlug}`
    const userName = resume.user.fullName || 'Professional'
    const resumeTitle = resume.title || 'Resume'

    switch (platform) {
      case 'facebook':
        const facebookShareText = `📄 Check out my professional resume: ${resumeUrl}\n\n💼 Looking to build your career in the BPO industry?\n\nBPOC.IO offers:\n✨ AI-powered resume builder\n🎯 Skills assessments & career games\n🤝 Direct connections to top employers\n📈 Build your future with thousands of professionals!\n\nJoin us today! 💪`
        
        try {
          await navigator.clipboard.writeText(facebookShareText)
          setShareModalData({ platform: 'Facebook', text: facebookShareText, url: resumeUrl })
          setShowShareModal(true)
          setTimeout(() => {
            const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(resumeUrl)}`
            window.open(facebookUrl, '_blank', 'width=600,height=400')
          }, 1500)
        } catch (err) {
          const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(resumeUrl)}`
          window.open(facebookUrl, '_blank', 'width=600,height=400')
        }
        setIsShareOpen(false)
        break

      case 'linkedin':
        const linkedinShareText = `📄 Check out my professional resume: ${resumeUrl}\n\n💼 Ready to advance your career in the BPO industry?\n\nBPOC.IO offers:\n✅ AI-powered resume builder\n✅ Professional skills assessments\n✅ Direct connections to top employers\n✅ Career development tools\n\n🚀 Join thousands of professionals building their future!\n\n#BPO #CareerGrowth #Resume #ProfessionalDevelopment`
        
        try {
          await navigator.clipboard.writeText(linkedinShareText)
          setShareModalData({ platform: 'LinkedIn', text: linkedinShareText, url: resumeUrl })
          setShowShareModal(true)
          setTimeout(() => {
            const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(resumeUrl)}`
            window.open(linkedinUrl, '_blank', 'width=600,height=400')
          }, 1500)
        } catch (err) {
          const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(resumeUrl)}`
          window.open(linkedinUrl, '_blank', 'width=600,height=400')
        }
        setIsShareOpen(false)
        break

      case 'copy':
        await copyUrl(resumeUrl)
        setIsShareOpen(false)
        break

      default:
        // Default native sharing
        const text = `Check out ${userName}'s resume: ${resumeTitle}`
        if (navigator.share) {
          try {
            await navigator.share({
              title: resumeTitle,
              text: text,
              url: resumeUrl
        })
      } catch (error) {
            console.error('Error sharing:', error)
          }
        } else {
          // Fallback to copying to clipboard
          await copyUrl(resumeUrl)
        }
        setIsShareOpen(false)
    }
  }

  // Edit resume function
  const editResume = async () => {
    if (!resume?.data) return

    try {
      localStorage.setItem('editingExistingResume', 'true')
      
      const completeResumeData = {
        content: resume.data.content,
        template: resume.data.template,
        sections: resume.data.sections,
        headerInfo: resume.data.headerInfo,
        profilePhoto: resume.data.profilePhoto
      }
      
      localStorage.setItem('resumeData', JSON.stringify(completeResumeData))
      window.location.href = '/resume-builder/build'
    } catch (e) {
      console.error('Error in editResume:', e)
    }
  }

  // Export to PDF function
  const exportToPDF = async () => {
    const element = document.getElementById('resume-content')

    if (!element) {
      alert('Resume content not found. Please try again.')
      return
    }

    setExporting(true)

    try {
      await document.fonts.ready
      
      const clonedElement = element.cloneNode(true) as HTMLElement
      const styles = window.getComputedStyle(element)
      clonedElement.style.width = styles.width
      clonedElement.style.maxWidth = styles.maxWidth
      clonedElement.style.backgroundColor = styles.backgroundColor || '#ffffff'
      clonedElement.style.color = styles.color || '#1f2937'
      clonedElement.style.fontFamily = styles.fontFamily || 'Inter, sans-serif'
      
      const htmlContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <style>
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              html, body {
                font-family: ${styles.fontFamily || 'Inter, sans-serif'};
                color: #1f2937;
                background: #ffffff !important;
                padding: 0;
                margin: 0;
                width: 100%;
                height: auto;
                min-height: 100vh;
              }
            </style>
          </head>
          <body style="background: #ffffff !important; color: #1f2937;">
            ${clonedElement.outerHTML}
          </body>
        </html>
      `

      const fullName = resume?.user.fullName || 'Resume'
      const nameParts = fullName.trim().split(/\s+/)
      const firstName = nameParts[0] || 'Resume'
      const lastName = nameParts.slice(1).join('-') || 'User'
      const fileName = `${firstName}-${lastName}-BPOC-Resume.pdf`

      const response = await fetch('/api/resume/export-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          html: htmlContent,
          fileName: fileName,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate PDF')
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)

    } catch (error) {
      console.error('Error exporting PDF:', error)
      alert('Error generating PDF. Please try again.')
    } finally {
      setExporting(false)
    }
  }

  if (loading) {
    return (
      <CandidateLayout 
        title="Resume" 
        description="Loading your resume..."
      >
        <LoadingScreen 
          title="Loading Resume"
          subtitle="Fetching your resume information..."
          progressValue={100}
          showProgress={true}
          showStatusIndicators={true}
        />
      </CandidateLayout>
    )
  }

  if (error || !resumeSlug) {
    return (
      <CandidateLayout 
        title="Resume" 
        description="Manage and update your resume"
      >
        <div className="text-center py-12">
          <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-400 mb-4">
            {error || 'No resume found. Please create a resume first.'}
          </p>
        </div>
      </CandidateLayout>
    )
  }

  if (!resume) {
    return (
      <CandidateLayout 
        title="Resume" 
        description="Manage and update your resume"
      >
        <div className="text-center py-12">
          <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-400 mb-4">Resume not found.</p>
        </div>
      </CandidateLayout>
    )
  }

  return (
    <CandidateLayout 
      title="Resume" 
      description="View and manage your resume"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Resume Header with Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 mb-6"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold gradient-text mb-2">
                {resume.user.fullName}'s Resume
              </h1>
              <div className="flex items-center gap-4 text-gray-400 text-sm">
                <span>Template: {resume.template || 'Default'}</span>
                <span>Updated {new Date(resume.updatedAt).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button
                onClick={editResume}
                variant="outline"
                className="border-blue-400/30 text-blue-400 hover:bg-blue-400/10"
              >
                <Pencil className="h-4 w-4 mr-2" />
                Edit Resume
              </Button>
              
              {/* Share Button with Dropdown */}
              <div className="relative z-50" ref={shareRef}>
                <Button
                  onClick={() => setIsShareOpen(!isShareOpen)}
                  variant="outline"
                  className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
              
              {/* Share Dropdown Menu - Rendered via Portal to avoid overflow clipping */}
              {isShareOpen && dropdownPosition && typeof document !== 'undefined' && createPortal(
                <div
                  data-share-dropdown
                  className="fixed bg-gray-800/95 backdrop-blur-md border border-white/20 rounded-lg shadow-xl z-[9999] min-w-[240px]"
                  style={{
                    top: `${dropdownPosition.top}px`,
                    right: `${dropdownPosition.right}px`
                  }}
                >
                  <div className="py-2">
                    {/* Facebook Share */}
                    <button
                      onClick={() => shareResume('facebook')}
                      className="w-full text-left px-4 py-2.5 hover:bg-white/10 transition-colors text-white flex items-center gap-3"
                    >
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-sm font-bold">f</div>
                      <span className="font-medium">Share on Facebook</span>
                    </button>
                      
                    {/* LinkedIn Share */}
                    <button
                      onClick={() => shareResume('linkedin')}
                      className="w-full text-left px-4 py-2.5 hover:bg-white/10 transition-colors text-white flex items-center gap-3"
                    >
                      <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center text-sm font-bold">in</div>
                      <span className="font-medium">Share on LinkedIn</span>
                    </button>

                    <div className="border-t border-white/10 my-1"></div>
                      
                    {/* Copy Link */}
                    <button
                      onClick={() => shareResume('copy')}
                      className="w-full text-left px-4 py-2.5 hover:bg-white/10 transition-colors text-white flex items-center gap-3"
                    >
                      <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">📋</div>
                      <span className="font-medium">Copy Link</span>
                    </button>
                  </div>
                </div>,
                document.body
              )}
              
              <Button
                onClick={exportToPDF}
                disabled={exporting}
                className="bg-cyan-500 hover:bg-cyan-600 text-white"
              >
                {exporting ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <Download className="h-4 w-4 mr-2" />
                )}
                {exporting ? 'Exporting...' : 'Export PDF'}
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Resume Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8"
        >
          {resume.data ? (
            <div 
              id="resume-content"
              className="bg-white rounded-lg shadow-2xl p-4 sm:p-6 lg:p-8 max-w-6xl w-full mx-auto text-gray-900 [&_*]:text-gray-900 [&_h1]:text-gray-900 [&_h2]:text-gray-900 [&_h3]:text-gray-900 [&_p]:text-gray-700 [&_li]:text-gray-700 [&_span]:text-gray-700 [&_.text-gray-700]:text-gray-700 [&_.text-gray-600]:text-gray-600 [&_text-gray-500]:text-gray-500 [&_.text-gray-900]:text-gray-900"
              style={{
                fontFamily: resume.data.template?.fontFamily || 'Inter, sans-serif',
                color: '#1f2937'
              }}
            >
              {/* Header */}
              <div className="mb-8">
                <div className="relative">
                  <div className={resume.data.profilePhoto ? "text-left" : "text-center"}>
                    <h1 
                      className="text-2xl font-bold mb-2 text-gray-900"
                      style={{ color: resume.data.template?.primaryColor || '#1f2937' }}
                    >
                      {resume.user.fullName || resume.data.content?.name || resume.data.headerInfo?.name || 'Professional'}
                    </h1>
                    <p 
                      className="text-lg font-semibold mb-2 text-gray-800"
                      style={{ color: resume.data.template?.secondaryColor || '#374151' }}
                    >
                      {resume.user.position || resume.data.content?.bestJobTitle || resume.data.headerInfo?.title || 'Professional'}
                    </p>
                    {(resume.user.location || resume.data.headerInfo?.location || resume.data.content?.location) && (
                      <p className="text-gray-600">
                        {resume.user.location || resume.data.headerInfo?.location || resume.data.content?.location}
                      </p>
                    )}
                  </div>

                  {resume.data.profilePhoto && (
                    <div className="absolute -top-2 right-0">
                      <img 
                        src={resume.data.profilePhoto} 
                        alt="Profile" 
                        className="w-32 h-32 rounded-lg object-cover border-4 shadow-lg"
                        style={{ borderColor: resume.data.template?.primaryColor || '#6366f1' }}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Divider */}
              <div 
                className="w-full h-0.5 my-6" 
                style={{ 
                  backgroundColor: resume.data.template?.primaryColor || '#6366f1',
                  opacity: 0.3
                }}
              ></div>

              {/* Professional Summary */}
              {resume.data.content?.summary && (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div 
                      className="w-1 h-6 rounded-full"
                      style={{ backgroundColor: resume.data.template?.primaryColor || '#6366f1' }}
                    ></div>
                    <h2 
                      className="text-lg font-semibold text-gray-900"
                      style={{ color: resume.data.template?.primaryColor || '#1f2937' }}
                    >
                      Professional Summary
                    </h2>
                  </div>
                  <p 
                    className="text-gray-700 leading-relaxed pl-3 border-l-2"
                    style={{ borderColor: resume.data.template?.secondaryColor || '#d1d5db' }}
                  >{resume.data.content.summary}</p>
                </div>
              )}

              {/* Work Experience */}
              {resume.data.content?.experience && resume.data.content.experience.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div 
                      className="w-1 h-6 rounded-full"
                      style={{ backgroundColor: resume.data.template?.primaryColor || '#6366f1' }}
                    ></div>
                    <h2 
                      className="text-lg font-semibold text-gray-900"
                      style={{ color: resume.data.template?.primaryColor || '#1f2937' }}
                    >
                      Work Experience
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {resume.data.content.experience.map((exp: any, index: number) => (
                      <div key={index} className="border-l-4 pl-4 transition-all duration-200" style={{ borderColor: resume.data.template?.secondaryColor || '#6b7280' }}>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{exp.title || exp.position}</h3>
                          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{exp.duration}</span>
                        </div>
                        <p className="text-gray-600 mb-2 font-medium">{exp.company}</p>
                        {exp.description && (
                          <p className="text-gray-700 text-sm">{exp.description}</p>
                        )}
                        {Array.isArray(exp.achievements) && exp.achievements.length > 0 && (
                          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            {exp.achievements.map((achievement: string, idx: number) => (
                              <li key={idx} className="hover:text-gray-900 transition-colors">{achievement}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Education */}
              {resume.data.content?.education && resume.data.content.education.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div 
                      className="w-1 h-6 rounded-full"
                      style={{ backgroundColor: resume.data.template?.primaryColor || '#6366f1' }}
                    ></div>
                    <h2 
                      className="text-lg font-semibold text-gray-900"
                      style={{ color: resume.data.template?.primaryColor || '#1f2937' }}
                    >
                      Education
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {resume.data.content.education.map((edu: any, index: number) => (
                      <div key={index} className="border-l-4 pl-4 transition-all duration-200" style={{ borderColor: resume.data.template?.secondaryColor || '#6b7280' }}>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{edu.year}</span>
                        </div>
                        <p className="text-gray-600 mb-2 font-medium">{edu.institution}</p>
                        {edu.major && <p className="text-gray-700 text-sm">Major: {edu.major}</p>}
                        {Array.isArray(edu.highlights) && edu.highlights.length > 0 && (
                          <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                            {edu.highlights.map((highlight: string, idx: number) => (
                              <li key={idx} className="hover:text-gray-900 transition-colors">{highlight}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills */}
              {resume.data.content?.skills && (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div 
                      className="w-1 h-6 rounded-full"
                      style={{ backgroundColor: resume.data.template?.primaryColor || '#6366f1' }}
                    ></div>
                    <h2 
                      className="text-lg font-semibold text-gray-900"
                      style={{ color: resume.data.template?.primaryColor || '#1f2937' }}
                    >
                      Skills
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {resume.data.content.skills.technical && resume.data.content.skills.technical.length > 0 && (
                      <div>
                        <h3 className="font-medium text-gray-900 mb-3">Technical Skills</h3>
                        <div className="flex flex-wrap gap-2">
                          {resume.data.content.skills.technical.map((skill: string, index: number) => (
                            <Badge 
                              key={index} 
                              variant="secondary" 
                              style={{ backgroundColor: resume.data.template?.secondaryColor || '#6b7280', color: 'white' }}
                              className="text-xs px-2 py-1"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    {resume.data.content.skills.soft && resume.data.content.skills.soft.length > 0 && (
                      <div>
                        <h3 className="font-medium text-gray-900 mb-3">Soft Skills</h3>
                        <div className="flex flex-wrap gap-2">
                          {resume.data.content.skills.soft.map((skill: string, index: number) => (
                            <Badge 
                              key={index} 
                              variant="outline" 
                              className="text-xs px-2 py-1 border-gray-300 text-gray-700"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    {resume.data.content.skills.languages && resume.data.content.skills.languages.length > 0 && (
                      <div>
                        <h3 className="font-medium text-gray-900 mb-3">Languages</h3>
                        <div className="flex flex-wrap gap-2">
                          {resume.data.content.skills.languages.map((skill: string, index: number) => (
                            <Badge 
                              key={index} 
                              variant="outline" 
                              className="text-xs px-2 py-1 border-blue-300 text-blue-700"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  {!resume.data.content.skills.technical && !resume.data.content.skills.soft && !resume.data.content.skills.languages && Array.isArray(resume.data.content.skills) && (
                    <div className="flex flex-wrap gap-2">
                      {resume.data.content.skills.map((skill: string, index: number) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          style={{ backgroundColor: resume.data.template?.secondaryColor || '#6b7280', color: 'white' }}
                          className="text-xs px-2 py-1"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Certifications */}
              {resume.data.content?.certifications && resume.data.content.certifications.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div 
                      className="w-1 h-6 rounded-full"
                      style={{ backgroundColor: resume.data.template?.primaryColor || '#6366f1' }}
                    ></div>
                    <h2 
                      className="text-lg font-semibold text-gray-900"
                      style={{ color: resume.data.template?.primaryColor || '#1f2937' }}
                    >
                      Certifications
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {resume.data.content.certifications.map((cert: string, index: number) => (
                      <div key={index} className="border-l-4 pl-4 transition-all duration-200" style={{ borderColor: resume.data.template?.secondaryColor || '#6b7280' }}>
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-emerald-600" />
                          <span className="text-gray-700 font-medium">{cert}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Projects */}
              {resume.data.content?.projects && resume.data.content.projects.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div 
                      className="w-1 h-6 rounded-full"
                      style={{ backgroundColor: resume.data.template?.primaryColor || '#6366f1' }}
                    ></div>
                    <h2 
                      className="text-lg font-semibold text-gray-900"
                      style={{ color: resume.data.template?.primaryColor || '#1f2937' }}
                    >
                      Projects
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {resume.data.content.projects.map((project: any, index: number) => (
                      <div key={index} className="border-l-4 pl-4 transition-all duration-200" style={{ borderColor: resume.data.template?.secondaryColor || '#6b7280' }}>
                        <h3 className="font-semibold text-gray-900 mb-2">{project.title}</h3>
                        {project.description && (
                          <p className="text-gray-700 text-sm mb-2">{project.description}</p>
                        )}
                        {Array.isArray(project.technologies) && project.technologies.length > 0 && (
                          <div className="mb-2">
                            <div className="flex flex-wrap gap-1">
                              {project.technologies.map((tech: string, idx: number) => (
                                <Badge 
                                  key={idx} 
                                  variant="outline" 
                                  className="text-xs px-2 py-1 border-violet-300 text-violet-700"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        {Array.isArray(project.impact) && project.impact.length > 0 && (
                          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                            {project.impact.map((impact: string, idx: number) => (
                              <li key={idx} className="hover:text-gray-900 transition-colors">{impact}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements */}
              {resume.data.content?.achievements && resume.data.content.achievements.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div 
                      className="w-1 h-6 rounded-full"
                      style={{ backgroundColor: resume.data.template?.primaryColor || '#6366f1' }}
                    ></div>
                    <h2 
                      className="text-lg font-semibold text-gray-900"
                      style={{ color: resume.data.template?.primaryColor || '#1f2937' }}
                    >
                      Achievements
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {resume.data.content.achievements.map((achievement: string, index: number) => (
                      <div key={index} className="border-l-4 pl-4 transition-all duration-200" style={{ borderColor: resume.data.template?.secondaryColor || '#6b7280' }}>
                        <div className="flex items-center gap-2">
                          <Trophy className="h-4 w-4 text-amber-600" />
                          <span className="text-gray-700">{achievement}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Organizations */}
              {resume.data.content?.organizations && resume.data.content.organizations.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div 
                      className="w-1 h-6 rounded-full"
                      style={{ backgroundColor: resume.data.template?.primaryColor || '#6366f1' }}
                    ></div>
                    <h2 
                      className="text-lg font-semibold text-gray-900"
                      style={{ color: resume.data.template?.primaryColor || '#1f2937' }}
                    >
                      Organizations & Activities
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {resume.data.content.organizations.map((org: any, index: number) => (
                      <div key={index} className="border-l-4 pl-4 transition-all duration-200" style={{ borderColor: resume.data.template?.secondaryColor || '#6b7280' }}>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{org.role || org.title}</h3>
                          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{org.duration}</span>
                        </div>
                        <p className="text-gray-600 mb-2 font-medium">{org.organization || org.company}</p>
                        {org.description && <p className="text-gray-700 text-sm">{org.description}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Debug: Show raw data if no structured content found */}
              {!resume.data.content?.summary && !resume.data.content?.experience && !resume.data.content?.education && !resume.data.content?.skills && !resume.data.content?.certifications && !resume.data.content?.projects && !resume.data.content?.achievements && !resume.data.content?.organizations && !resume.data.content?.name && !resume.data.headerInfo?.name && (
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    No structured content found. Showing raw data:
                  </p>
                  <details>
                    <summary className="text-blue-600 cursor-pointer">Show raw data</summary>
                    <pre className="mt-2 text-xs text-gray-500 overflow-auto">
                      {JSON.stringify(resume.data, null, 2)}
                    </pre>
                  </details>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400">No resume content available</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-2xl"
          >
            {/* Glow Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-2xl animate-pulse"></div>
            
            {/* Modal Content */}
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl border-2 border-cyan-400/30 shadow-2xl overflow-hidden">
              {/* Header with Gradient */}
              <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <span className="text-3xl">✓</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Text Copied Successfully!</h3>
                      <p className="text-cyan-100 text-sm">Ready to share on {shareModalData.platform}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowShareModal(false)}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:scale-110"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-6">
                {/* Instructions */}
                <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl p-5 border border-cyan-400/20">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xl">💡</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">What to do next:</h4>
                      <ol className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 font-bold mt-0.5">1.</span>
                          <span>The {shareModalData.platform} share dialog will open in 1.5 seconds</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 font-bold mt-0.5">2.</span>
                          <span>Paste the text below (Ctrl+V or Cmd+V) into the post box</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 font-bold mt-0.5">3.</span>
                          <span>Your resume image will appear automatically - just hit Share!</span>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>

                {/* Text Preview */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Post Text Preview</label>
                    <button
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(shareModalData.text)
                          const btn = document.getElementById('copy-again-btn')
                          if (btn) {
                            btn.textContent = '✓ Copied!'
                            setTimeout(() => {
                              btn.textContent = 'Copy Again'
                            }, 2000)
                          }
                        } catch (err) {
                          console.error('Failed to copy:', err)
                        }
                      }}
                      id="copy-again-btn"
                      className="text-xs px-3 py-1.5 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg border border-cyan-400/30 transition-all duration-200 hover:scale-105 font-medium"
                    >
                      Copy Again
                    </button>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-white/10 max-h-48 overflow-y-auto">
                    <p className="text-gray-300 whitespace-pre-wrap font-mono text-sm leading-relaxed">
                      {shareModalData.text}
                    </p>
                  </div>
                </div>

                {/* BPOC Branding Footer */}
                <div className="flex items-center justify-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">B</span>
                  </div>
                  <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    BPOC.IO
                  </span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400 text-sm">Where BPO Careers Begin</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    onClick={() => setShowShareModal(false)}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
                  >
                    Got It! 👍
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </CandidateLayout>
  )
}
