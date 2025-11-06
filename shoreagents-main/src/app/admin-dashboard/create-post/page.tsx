'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAdminAuth } from '@/lib/admin-auth-context'
import { AdminGuard } from '@/components/auth/AdminGuard'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { X, Save, Eye, Globe, Sparkles, FileEdit, ArrowRight, Code, ExternalLink, Copy, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { useCompileTsx, useImproveTsx, useAIResearch, useAIGenerateBlog } from '@/hooks/use-api'

type PostType = 'blog' | 'article' | 'pillar'
type CreationMethod = 'ai' | 'custom' | 'paste' | null

export default function CreatePostPage() {
  const router = useRouter()
  const { admin, isAdmin } = useAdminAuth()
  const [loading, setLoading] = useState(false)
  const [showMethodModal, setShowMethodModal] = useState(true)
  const [creationMethod, setCreationMethod] = useState<CreationMethod>(null)
  
  // Form state
  const [postType, setPostType] = useState<PostType>('blog')
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('')
  const [customUrl, setCustomUrl] = useState('')
  const [urlPattern, setUrlPattern] = useState('/blog/[slug]')
  const [status, setStatus] = useState<'draft' | 'published'>('draft')
  const [tags, setTags] = useState<string[]>([])
  const [tagInput, setTagInput] = useState('')
  
  // SEO fields
  const [seoTitle, setSeoTitle] = useState('')
  const [seoDescription, setSeoDescription] = useState('')
  const [seoKeywords, setSeoKeywords] = useState<string[]>([])
  const [seoKeywordInput, setSeoKeywordInput] = useState('')
  const [canonicalUrl, setCanonicalUrlState] = useState('')
  const [ogImage, setOgImage] = useState('')
  const [noIndex, setNoIndex] = useState(false)
  
  // Paste TSX state
  const [tsxCode, setTsxCode] = useState('')
  const [compiledContent, setCompiledContent] = useState('')
  const [previewLoading, setPreviewLoading] = useState(false)
  const [isImprovedByAI, setIsImprovedByAI] = useState(false)
  
  // Preprocess TSX code for iframe (remove imports and exports)
  const processedTsxCode = React.useMemo(() => {
    if (!tsxCode) return ''
    
    let processed = tsxCode
    
    // Remove all import statements
    processed = processed.replace(/^import\s+.*?from\s+['"].*?['"];?\s*$/gm, '')
    
    // Replace "export default function" with just "function"
    processed = processed.replace(/export\s+default\s+function/g, 'function')
    
    // Replace "export function" with just "function"  
    processed = processed.replace(/export\s+function/g, 'function')
    
    // Replace "export default ComponentName" at the end
    processed = processed.replace(/export\s+default\s+(\w+);?\s*$/gm, '// $1 is the component')
    
    console.log('🔧 Processed TSX Code Sample (first 200 chars):', processed.substring(0, 200))
    
    return processed
  }, [tsxCode])
  
  // AI Content Generation state
  const [aiTopic, setAiTopic] = useState('')
  const [aiPostType, setAiPostType] = useState<PostType>('blog')
  const [aiTone, setAiTone] = useState('professional')
  const [aiTargetAudience, setAiTargetAudience] = useState('general')
  const [aiResearchData, setAiResearchData] = useState<any>(null)
  const [aiGeneratedContent, setAiGeneratedContent] = useState<any>(null)
  const [aiStep, setAiStep] = useState<'input' | 'researching' | 'generating' | 'preview'>('input')
  
  // TanStack Query mutations
  const compileTsxMutation = useCompileTsx()
  const improveTsxMutation = useImproveTsx()
  const aiResearchMutation = useAIResearch()
  const aiGenerateBlogMutation = useAIGenerateBlog()

  // Handle method selection
  const handleMethodSelect = (method: 'ai' | 'custom' | 'paste') => {
    setCreationMethod(method)
    setShowMethodModal(false)
  }

  // Generate slug from title
  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  // Update slug from title only if no custom URL is set
  React.useEffect(() => {
    if (title && !slug && !customUrl) {
      setSlug(generateSlug(title))
    }
  }, [title, slug, customUrl])

  // Auto-generate slug from URL when URL is entered
  React.useEffect(() => {
    if (customUrl && customUrl.startsWith('/')) {
      // Extract slug from URL if it follows a pattern
      if (customUrl.startsWith('/blog/') || customUrl.startsWith('/blogs/') || customUrl.startsWith('/services/pillars/')) {
        const extractedSlug = customUrl.split('/').pop()
        if (extractedSlug && extractedSlug !== slug) {
          setSlug(extractedSlug)
        }
      }
    } else if (!customUrl && title && !slug) {
      // If no custom URL, generate slug from title
      setSlug(generateSlug(title))
    }
  }, [customUrl, title])

  // Handle tag input
  const handleTagAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault()
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()])
        setTagInput('')
      }
    }
  }

  const handleTagRemove = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  // Handle SEO keyword input
  const handleSeoKeywordAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && seoKeywordInput.trim()) {
      e.preventDefault()
      if (!seoKeywords.includes(seoKeywordInput.trim())) {
        setSeoKeywords([...seoKeywords, seoKeywordInput.trim()])
        setSeoKeywordInput('')
      }
    }
  }

  const handleSeoKeywordRemove = (keywordToRemove: string) => {
    setSeoKeywords(seoKeywords.filter(keyword => keyword !== keywordToRemove))
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/admin/content/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          postType,
          title,
          slug,
          description,
          content,
          category,
          tags,
          // Save the URL directly (customUrl takes priority, otherwise build from pattern)
          customUrl: customUrl || (slug && urlPattern ? urlPattern.replace('[slug]', slug) : slug ? `/${slug}` : null),
          urlPattern: customUrl ? null : urlPattern, // Only save pattern if not using custom URL
          status,
          authorId: admin?.id || admin?.user_id,
          seoTitle: seoTitle || null,
          seoDescription: seoDescription || null,
          seoKeywords: seoKeywords.length > 0 ? seoKeywords : null,
          canonicalUrl: canonicalUrl || null,
          ogImage: ogImage || null,
          noIndex
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create post')
      }

      toast.success('Post created successfully!')
      
      // Redirect to admin dashboard
      router.push('/admin-dashboard')
    } catch (error: any) {
      console.error('Error creating post:', error)
      toast.error(error.message || 'Failed to create post. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // Handle AI Content Generation
  const handleStartAIGeneration = () => {
    if (!aiTopic.trim()) {
      toast.error('Please enter a topic')
      return
    }

    setAiStep('researching')
    
    // Step 1: Research with Serper
    aiResearchMutation.mutate(
      { topic: aiTopic, numResults: 10 },
      {
        onSuccess: (researchResponse) => {
          console.log('✅ Research completed:', researchResponse)
          setAiResearchData(researchResponse.data)
          setAiStep('generating')
          
          // Step 2: Generate blog with Claude AI
          aiGenerateBlogMutation.mutate(
            {
              topic: aiTopic,
              research: researchResponse.data,
              postType: aiPostType,
              tone: aiTone,
              targetAudience: aiTargetAudience,
            },
            {
              onSuccess: (blogResponse) => {
                console.log('✅ Blog generated:', blogResponse)
                setAiGeneratedContent(blogResponse.data)
                
                // Pre-populate form fields
                setTitle(blogResponse.data.title)
                setDescription(blogResponse.data.description)
                setContent(blogResponse.data.content)
                setTags(blogResponse.data.suggestedTags || [])
                setSeoKeywords(blogResponse.data.suggestedKeywords || [])
                setPostType(aiPostType)
                
                setAiStep('preview')
                toast.success('✨ Blog post generated successfully!')
              },
              onError: (error) => {
                console.error('❌ Blog generation error:', error)
                toast.error(`Failed to generate blog: ${error.message}`)
                setAiStep('input')
              },
            }
          )
        },
        onError: (error) => {
          console.error('❌ Research error:', error)
          toast.error(`Failed to research topic: ${error.message}`)
          setAiStep('input')
        },
      }
    )
  }

  // Render AI Generation Interface
  const renderAIGeneration = () => {
    return (
      <div className="flex flex-1 flex-col gap-4 p-4 pt-20">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
          <h1 className="text-3xl font-bold text-gray-900">AI Content Generation</h1>
        </div>

        {/* Input Stage */}
        {aiStep === 'input' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-lime-600" />
                Generate Content with AI
              </CardTitle>
              <CardDescription>
                Use AI to research on Google (via Serper) and generate your blog post automatically
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Topic Input */}
              <div>
                <Label htmlFor="ai-topic">Topic *</Label>
                <Input
                  id="ai-topic"
                  placeholder="e.g., Virtual Assistants for Real Estate"
                  value={aiTopic}
                  onChange={(e) => setAiTopic(e.target.value)}
                  className="text-lg"
                />
                <p className="text-sm text-gray-500 mt-1">
                  What do you want to write about? Be specific for better results.
                </p>
              </div>

              {/* Post Type */}
              <div>
                <Label htmlFor="ai-post-type">Content Type</Label>
                <Select value={aiPostType} onValueChange={(value) => setAiPostType(value as PostType)}>
                  <SelectTrigger id="ai-post-type">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="blog">Blog Post (1500-2000 words)</SelectItem>
                    <SelectItem value="article">Article (2000-3000 words)</SelectItem>
                    <SelectItem value="pillar">Pillar Page (3000+ words)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Tone */}
              <div>
                <Label htmlFor="ai-tone">Tone</Label>
                <Select value={aiTone} onValueChange={setAiTone}>
                  <SelectTrigger id="ai-tone">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="casual">Casual</SelectItem>
                    <SelectItem value="friendly">Friendly</SelectItem>
                    <SelectItem value="authoritative">Authoritative</SelectItem>
                    <SelectItem value="conversational">Conversational</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Target Audience */}
              <div>
                <Label htmlFor="ai-audience">Target Audience</Label>
                <Input
                  id="ai-audience"
                  placeholder="e.g., real estate agents, property managers"
                  value={aiTargetAudience}
                  onChange={(e) => setAiTargetAudience(e.target.value)}
                />
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button
                  onClick={handleStartAIGeneration}
                  className="flex-1 bg-lime-600 hover:bg-lime-700 text-white"
                  disabled={!aiTopic.trim()}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate Content
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setCreationMethod(null)
                    setShowMethodModal(true)
                  }}
                >
                  Choose Different Method
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Researching Stage */}
        {aiStep === 'researching' && (
          <Card>
            <CardContent className="py-12">
              <div className="flex flex-col items-center gap-4">
                <Loader2 className="w-12 h-12 text-lime-600 animate-spin" />
                <h3 className="text-xl font-semibold">Researching on Google...</h3>
                <p className="text-gray-600 text-center max-w-md">
                  Using Serper AI to gather comprehensive research from Google about "{aiTopic}"
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Generating Stage */}
        {aiStep === 'generating' && (
          <Card>
            <CardContent className="py-12">
              <div className="flex flex-col items-center gap-4">
                <Loader2 className="w-12 h-12 text-lime-600 animate-spin" />
                <h3 className="text-xl font-semibold">Generating Blog Post...</h3>
                <p className="text-gray-600 text-center max-w-md">
                  Our AI is processing the research and creating a {aiPostType} for you
                </p>
                {aiResearchData && (
                  <div className="mt-4 p-4 bg-lime-50 rounded-lg text-sm">
                    <p className="text-lime-900">
                      ✓ Found {aiResearchData.mainResults?.length || 0} sources
                    </p>
                    <p className="text-lime-900">
                      ✓ Identified {aiResearchData.peopleAlsoAsk?.length || 0} common questions
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Preview Stage */}
        {aiStep === 'preview' && aiGeneratedContent && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-lime-600" />
                  Generated Content Preview
                </CardTitle>
                <CardDescription>
                  Review and edit your AI-generated content before publishing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Title */}
                <div>
                  <Label htmlFor="ai-preview-title">Title</Label>
                  <Input
                    id="ai-preview-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-lg font-semibold"
                  />
                </div>

                {/* Description */}
                <div>
                  <Label htmlFor="ai-preview-description">Description</Label>
                  <Textarea
                    id="ai-preview-description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {aiGeneratedContent.estimatedReadTime}
                  </p>
                </div>

                {/* Content Preview */}
                <div>
                  <Label htmlFor="ai-preview-content">Content (Markdown)</Label>
                  <Textarea
                    id="ai-preview-content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={20}
                    className="font-mono text-sm"
                  />
                </div>

                {/* Tags */}
                <div>
                  <Label>Suggested Tags</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                        {tag}
                        <button
                          type="button"
                          onClick={() => handleTagRemove(tag)}
                          className="ml-1 hover:text-red-600"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  <Button
                    onClick={() => {
                      // Populate form and switch to custom CMS for editing
                      setCreationMethod('custom')
                    }}
                    className="flex-1 bg-lime-600 hover:bg-lime-700 text-white"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Continue to Edit & Publish
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      // Reset and start over
                      setAiStep('input')
                      setAiTopic('')
                      setAiResearchData(null)
                      setAiGeneratedContent(null)
                    }}
                  >
                    Generate Another
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Research Sources Card */}
            {aiResearchData && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Research Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {aiResearchData.mainResults?.slice(0, 5).map((result: any, index: number) => (
                      <div key={index} className="p-3 bg-gray-50 rounded-lg">
                        <a 
                          href={result.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-medium text-lime-600 hover:text-lime-700 flex items-center gap-1"
                        >
                          {result.title}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <p className="text-sm text-gray-600 mt-1">{result.snippet}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    )
  }

  // Render Paste TSX Interface
  const renderPasteTSX = () => {
    const handleImproveWithAI = () => {
      if (!tsxCode.trim()) {
        toast.error('Please paste your TSX code first')
        return
      }

      improveTsxMutation.mutate(tsxCode, {
        onSuccess: (data) => {
          if (data.improvedCode && data.improvedCode.trim()) {
            // Validate the improved code has balanced quotes
            const singleQuotes = (data.improvedCode.match(/'/g) || []).length
            const doubleQuotes = (data.improvedCode.match(/"/g) || []).length
            const backticks = (data.improvedCode.match(/`/g) || []).length
            
            // Check for unterminated strings (basic validation)
            if (doubleQuotes % 2 !== 0) {
              console.warn('⚠️ Detected unbalanced double quotes in AI response')
              toast.error('AI response may be incomplete. Please try again or edit manually.')
              return
            }
            
            // Check for common truncation patterns
            if (data.improvedCode.endsWith('...') || data.improvedCode.length < tsxCode.length * 0.8) {
              console.warn('⚠️ AI response appears truncated')
              toast.error('AI response was truncated. Please try again or use the original code.')
              return
            }
            
            setTsxCode(data.improvedCode)
            setIsImprovedByAI(true)
            
            // Show success message with banner image info
            if (data.bannerImage && data.keywords) {
              toast.success(
                `✨ Code improved with AI! Added banner image for: "${data.keywords}"`,
                { duration: 5000 }
              )
              console.log('🖼️ Banner image added:', data.bannerImage)
            } else {
              toast.success('✨ TSX code improved by AI! Review the changes and compile when ready.')
            }
          } else {
            toast.error('Could not improve TSX code. Please try again.')
          }
        },
        onError: (error) => {
          console.error('Error improving TSX:', error)
          toast.error(`Failed to improve TSX code: ${error instanceof Error ? error.message : 'Unknown error'}`)
        },
      })
    }

    const handleCompile = () => {
      if (!tsxCode.trim()) {
        toast.error('Please paste your TSX code first')
        return
      }

      console.log('🔍 Preview TSX clicked - generating preview...')
      console.log('TSX Code length:', tsxCode.length)
      
      // Set loading state
      setPreviewLoading(true)
      
      // Set preview mode - the iframe will render the actual styled component
      setCompiledContent('PREVIEW_READY')
      setContent(tsxCode) // Store the TSX code as content
      
      // Remove loading state after a short delay to let iframe load
      setTimeout(() => {
        setPreviewLoading(false)
        console.log('✅ Preview should be visible now')
        toast.success('✅ Preview ready!')
      }, 1500)
      
      console.log('✅ State updated - compiledContent set to PREVIEW_READY')
    }

    const handleOpenInNewTab = () => {
      if (!tsxCode.trim() || !compiledContent) {
        toast.error('Please preview the TSX code first!')
        return
      }

      // Create the full HTML document
      const fullHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TSX Preview - Full Size</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            lime: {
              50: '#f7fee7',
              100: '#ecfccb',
              200: '#d9f99d',
              300: '#bef264',
              400: '#a3e635',
              500: '#84cc16',
              600: '#65a30d',
              700: '#4d7c0f',
              800: '#3f6212',
              900: '#365314',
            }
          }
        }
      }
    }
  </script>
  <style>
    body { margin: 0; padding: 0; }
  </style>
</head>
<body>
  <div id="root">
    <div style="padding: 2rem; text-align: center; color: #84cc16;">
      <div style="font-size: 2rem; margin-bottom: 1rem;">⏳</div>
      <p>Loading preview...</p>
    </div>
  </div>
  
  <script>
    function loadScript(src) {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    }
    
    async function loadAllLibraries() {
      try {
        await loadScript('https://unpkg.com/react@18/umd/react.production.min.js');
        await loadScript('https://unpkg.com/react-dom@18/umd/react-dom.production.min.js');
        
        if (typeof React !== 'undefined') {
          window.React = React;
          window.ReactDOM = ReactDOM;
        }
        
        await loadScript('https://unpkg.com/@babel/standalone/babel.min.js');
        
        await loadScript('https://unpkg.com/lucide@latest/dist/umd/lucide.min.js');
        
        return true;
      } catch (error) {
        console.error('Error loading libraries:', error);
        document.getElementById('root').innerHTML = '<div style="padding: 2rem; text-align: center; color: #ef4444;"><h2>Failed to load libraries</h2><p>' + error.message + '</p></div>';
        return false;
      }
    }
    
    loadAllLibraries().then((success) => {
      if (!success) return;
      
      // Create Lucide icon components
      const createLucideIcon = (iconName) => {
        return (props) => {
          const { className = '', style = {}, ...rest } = props || {};
          const kebabName = iconName.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
          
          const iconElement = React.createElement('i', {
            'data-lucide': kebabName,
            className: className,
            style: { display: 'inline-block', ...style },
            ...rest
          });
          
          React.useEffect(() => {
            if (window.lucide && window.lucide.createIcons) {
              window.lucide.createIcons();
            }
          }, []);
          
          return iconElement;
        };
      };
      
      // Common icon names
      const commonIcons = [
        'Bot', 'Clock', 'Globe', 'Globe2', 'Zap', 'Users', 'Users2', 'TrendingUp', 
        'Star', 'ArrowRight', 'CheckCircle', 'CheckCircle2', 'Award', 'Target',
        'Lightbulb', 'Code', 'Code2', 'Database', 'Shield', 'Smartphone',
        'Mail', 'Phone', 'MapPin', 'Calendar', 'FileText', 'Image', 'Video', 
        'Music', 'Download', 'Upload', 'Search', 'Filter', 'Settings', 'Bell', 
        'Heart', 'Share', 'Share2', 'MessageCircle', 'ThumbsUp', 'Eye', 'EyeOff',
        'Lock', 'Unlock', 'User', 'User2', 'UserPlus', 'UserMinus', 'Home', 
        'Menu', 'X', 'ChevronDown', 'ChevronUp', 'ChevronLeft', 'ChevronRight',
        'Plus', 'Minus', 'Check', 'AlertCircle', 'Info', 'HelpCircle', 
        'ExternalLink', 'Link', 'Link2', 'Unlink', 'Copy', 'Clipboard', 'Trash', 
        'Trash2', 'Edit', 'Edit2', 'Edit3', 'Save', 'RefreshCw', 'RotateCw',
        'Play', 'Pause', 'Stop', 'SkipBack', 'SkipForward', 'Volume', 'Volume2',
        'VolumeX', 'Wifi', 'WifiOff', 'Battery', 'BatteryCharging', 'Sun', 
        'Moon', 'Cloud', 'CloudRain', 'Twitter', 'Linkedin', 'Facebook',
        'Instagram', 'Github', 'Youtube'
      ];
      
      commonIcons.forEach(iconName => {
        window[iconName] = createLucideIcon(iconName);
      });
      
      try {
        const processedCode = \`${processedTsxCode.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;
        const transpiledCode = Babel.transform(processedCode, {
          presets: ['react']
        }).code;
        
        eval(transpiledCode);
        
        // Auto-detect any React component function
        let componentToRender = null;
        const commonNames = ['VirtualAssistanceBlog', 'BlogPost', 'Post', 'Page', 'Component', 'Article', 'Blog', 'Content'];
        
        for (const name of commonNames) {
          if (typeof window[name] === 'function') {
            componentToRender = window[name];
            break;
          }
        }
        
        if (!componentToRender) {
          for (const key in window) {
            if (key[0] === key[0].toUpperCase() && typeof window[key] === 'function') {
              if (!['Object', 'Array', 'String', 'Number', 'Boolean', 'Date', 'RegExp', 'Error', 'Function', 'Symbol', 'Promise', 'Map', 'Set', 'WeakMap', 'WeakSet', 'Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Uint16Array', 'Int32Array', 'Uint32Array', 'Float32Array', 'Float64Array', 'BigInt64Array', 'BigUint64Array', 'DataView', 'ArrayBuffer', 'SharedArrayBuffer', 'Atomics', 'JSON', 'Math', 'Reflect', 'Proxy', 'Intl', 'WebAssembly', 'React', 'ReactDOM', 'Babel'].includes(key)) {
                componentToRender = window[key];
                break;
              }
            }
          }
        }
        
        if (componentToRender) {
          const root = ReactDOM.createRoot(document.getElementById('root'));
          root.render(React.createElement(componentToRender));
          
          // Initialize Lucide icons after render
          setTimeout(() => {
            if (window.lucide && window.lucide.createIcons) {
              window.lucide.createIcons();
            }
          }, 100);
        } else {
          document.getElementById('root').innerHTML = '<div style="padding: 2rem; text-align: center; color: #ef4444;"><h2>Could not find component</h2></div>';
        }
      } catch (error) {
        console.error('Preview error:', error);
        document.getElementById('root').innerHTML = '<div style="padding: 2rem; text-align: center; color: #ef4444;"><h2>Error rendering component</h2><p>' + error.message + '</p></div>';
      }
    });
  </script>
</body>
</html>
      `

      // Open in new tab
      const newWindow = window.open('', '_blank')
      if (newWindow) {
        newWindow.document.write(fullHtml)
        newWindow.document.close()
        toast.success('Opened preview in new tab!')
      } else {
        toast.error('Please allow pop-ups to open the preview in a new tab!')
      }
    }

    return (
      <div className="flex flex-1 flex-col gap-4 p-4 pt-20">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
          <h1 className="text-3xl font-bold text-gray-900">Paste TSX Code</h1>
        </div>

        <form onSubmit={(e) => {
          e.preventDefault()
          handleCompile()
        }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* TSX Code Input */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-lime-600" />
                  Paste Your TSX Code
                </CardTitle>
                <CardDescription>
                  Paste your TSX/JSX component code here and preview it with full styling.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Paste your TSX code here..."
                  value={tsxCode}
                  onChange={(e) => {
                    setTsxCode(e.target.value)
                    // Reset improvement flag when code is manually edited
                    if (isImprovedByAI) {
                      setIsImprovedByAI(false)
                    }
                  }}
                  rows={20}
                  className="font-mono text-sm"
                />
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    type="button"
                    onClick={handleImproveWithAI}
                    variant="outline"
                    className="w-full border-lime-600 text-lime-600 hover:bg-lime-50 disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={!tsxCode.trim() || improveTsxMutation.isPending || isImprovedByAI}
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    {improveTsxMutation.isPending ? 'Improving...' : isImprovedByAI ? '✨ Improved by AI' : 'Improve with AI'}
                  </Button>
                  <Button
                    type="button"
                    onClick={handleCompile}
                    className="w-full bg-lime-600 hover:bg-lime-700 text-white"
                    disabled={!tsxCode.trim()}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Preview TSX
                  </Button>
                </div>
                <p className="text-xs text-gray-500 text-center">
                  💡 Tip: Use "Improve with AI" to enhance styling, accessibility, and SEO before previewing
                </p>
                {/* Debug Info */}
                <div className="mt-4 p-3 bg-gray-100 rounded text-xs font-mono">
                  <div className="font-semibold text-gray-700 mb-2">Debug Info:</div>
                  <div className="space-y-1 text-gray-600">
                    <div>TSX Code: {tsxCode ? `${tsxCode.length} characters` : 'Empty'}</div>
                    <div>Processed Code: {processedTsxCode ? `${processedTsxCode.length} characters (imports removed)` : 'Not processed'}</div>
                    <div>Compiled Content: {compiledContent || 'Not set'}</div>
                    <div>Preview Loading: {previewLoading ? '⏳ Yes' : '✓ No'}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Styled TSX Preview */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Eye className="w-5 h-5 text-lime-600" />
                      Live Styled Preview
                    </CardTitle>
                    <CardDescription>
                      Preview your TSX component with full styling
                    </CardDescription>
                  </div>
                  {compiledContent && tsxCode && (
                    <Button
                      type="button"
                      onClick={handleOpenInNewTab}
                      variant="outline"
                      className="border-lime-600 text-lime-600 hover:bg-lime-50"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Open in New Tab
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="min-h-[400px] max-h-[600px] overflow-hidden rounded-lg border border-gray-200 bg-white">
                  {previewLoading ? (
                    <div className="flex flex-col items-center justify-center h-[600px] space-y-4">
                      <div className="relative">
                        <div className="w-16 h-16 border-4 border-lime-200 border-t-lime-600 rounded-full animate-spin"></div>
                        <Eye className="w-8 h-8 text-lime-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                      </div>
                      <div className="text-center space-y-2">
                        <p className="text-lg font-semibold text-gray-700">Loading Preview...</p>
                        <p className="text-sm text-gray-500">Compiling your TSX component with full styling</p>
                      </div>
                    </div>
                  ) : compiledContent && tsxCode ? (
                    <>
                      <div className="bg-lime-50 border-b border-lime-200 px-4 py-2 text-sm text-lime-700 flex items-center justify-between">
                        <span>📊 Live Preview Active - Component: {tsxCode.match(/function\s+(\w+)/)?.[1] || 'Unknown'}</span>
                        <span className="text-xs bg-lime-600 text-white px-2 py-1 rounded">✓ Ready</span>
                      </div>
                      <iframe
                      key={compiledContent + tsxCode.length}
                      srcDoc={`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TSX Preview</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            lime: {
              50: '#f7fee7',
              100: '#ecfccb',
              200: '#d9f99d',
              300: '#bef264',
              400: '#a3e635',
              500: '#84cc16',
              600: '#65a30d',
              700: '#4d7c0f',
              800: '#3f6212',
              900: '#365314',
            }
          }
        }
      }
    }
  </script>
  <style>
    body { margin: 0; padding: 0; }
    #preview-root { min-height: 100vh; }
  </style>
</head>
<body>
  <div id="preview-root">
    <div style="padding: 2rem; text-align: center; color: #84cc16;">
      <div style="font-size: 2rem; margin-bottom: 1rem;">⏳</div>
      <p>Loading preview...</p>
    </div>
  </div>
  
  <script>
    // Load scripts sequentially
    function loadScript(src) {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    }
    
    async function loadAllLibraries() {
      try {
        console.log('📦 Loading React...');
        await loadScript('https://unpkg.com/react@18/umd/react.production.min.js');
        console.log('✅ React loaded');
        
        console.log('📦 Loading ReactDOM...');
        await loadScript('https://unpkg.com/react-dom@18/umd/react-dom.production.min.js');
        console.log('✅ ReactDOM loaded');
        
        // Expose React globally
        if (typeof React !== 'undefined') {
          window.React = React;
          window.ReactDOM = ReactDOM;
          console.log('✅ React exposed globally');
        } else {
          throw new Error('React not loaded properly');
        }
        
        console.log('📦 Loading Babel...');
        await loadScript('https://unpkg.com/@babel/standalone/babel.min.js');
        console.log('✅ Babel loaded');
        
        console.log('📦 Loading Lucide icons...');
        await loadScript('https://unpkg.com/lucide@latest/dist/umd/lucide.min.js');
        console.log('✅ Lucide loaded');
        
        console.log('✅ All libraries loaded successfully!');
        return true;
      } catch (error) {
        console.error('❌ Error loading libraries:', error);
        document.getElementById('preview-root').innerHTML = '<div style="padding: 2rem; text-align: center; color: #ef4444;"><h2>Failed to load preview libraries</h2><p>' + error.message + '</p></div>';
        return false;
      }
    }
    
    loadAllLibraries().then((success) => {
      if (!success) return;
      console.log('🚀 Starting preview render...');
      
      // Create Lucide icon components
      console.log('🎨 Creating Lucide icon components');
      
      // Helper to convert kebab-case to PascalCase (e.g., 'arrow-right' to 'ArrowRight')
      const toPascalCase = (str) => {
        return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
      };
      
      // Create React component wrapper for Lucide icons
      const createLucideIcon = (iconName) => {
        return (props) => {
          const { className = '', style = {}, ...rest } = props || {};
          
          // Convert PascalCase to kebab-case for Lucide (e.g., 'ArrowRight' to 'arrow-right')
          const kebabName = iconName.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
          
          // Create the icon element
          const iconElement = React.createElement('i', {
            'data-lucide': kebabName,
            className: className,
            style: { display: 'inline-block', ...style },
            ...rest
          });
          
          // Use effect to initialize the icon after render
          React.useEffect(() => {
            if (window.lucide && window.lucide.createIcons) {
              window.lucide.createIcons();
            }
          }, []);
          
          return iconElement;
        };
      };
      
      // Common icon names used in blogs/articles
      const commonIcons = [
        'Bot', 'Clock', 'Globe', 'Globe2', 'Zap', 'Users', 'Users2', 'TrendingUp', 
        'Star', 'ArrowRight', 'CheckCircle', 'CheckCircle2', 'Award', 'Target',
        'Lightbulb', 'Code', 'Code2', 'Database', 'Shield', 'Smartphone',
        'Mail', 'Phone', 'MapPin', 'Calendar', 'FileText', 'Image', 'Video', 
        'Music', 'Download', 'Upload', 'Search', 'Filter', 'Settings', 'Bell', 
        'Heart', 'Share', 'Share2', 'MessageCircle', 'ThumbsUp', 'Eye', 'EyeOff',
        'Lock', 'Unlock', 'User', 'User2', 'UserPlus', 'UserMinus', 'Home', 
        'Menu', 'X', 'ChevronDown', 'ChevronUp', 'ChevronLeft', 'ChevronRight',
        'Plus', 'Minus', 'Check', 'AlertCircle', 'Info', 'HelpCircle', 
        'ExternalLink', 'Link', 'Link2', 'Unlink', 'Copy', 'Clipboard', 'Trash', 
        'Trash2', 'Edit', 'Edit2', 'Edit3', 'Save', 'RefreshCw', 'RotateCw',
        'Play', 'Pause', 'Stop', 'SkipBack', 'SkipForward', 'Volume', 'Volume2',
        'VolumeX', 'Wifi', 'WifiOff', 'Battery', 'BatteryCharging', 'Sun', 
        'Moon', 'Cloud', 'CloudRain', 'Twitter', 'Linkedin', 'Facebook',
        'Instagram', 'Github', 'Youtube'
      ];
      
      // Auto-generate all icon components
      commonIcons.forEach(iconName => {
        window[iconName] = createLucideIcon(iconName);
      });
      
      console.log('✅ Created', commonIcons.length, 'Lucide icon components');
      
      try {
        console.log('📝 Transpiling TSX code...');
        
        // Transpile and execute the code
        const transpiledCode = Babel.transform(\`${processedTsxCode.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`, {
          presets: ['react']
        }).code;
        
        console.log('✅ Code transpiled successfully');
        eval(transpiledCode);
        
        console.log('🔍 Looking for component to render...');
        
        // Auto-detect any React component function in global scope
        let componentToRender = null;
        const commonNames = ['VirtualAssistanceBlog', 'BlogPost', 'Post', 'Page', 'Component', 'Article', 'Blog', 'Content'];
        
        // First, try common component names
        for (const name of commonNames) {
          if (typeof window[name] === 'function') {
            componentToRender = window[name];
            console.log('✅ Found component by common name:', name);
            break;
          }
        }
        
        // If not found, scan all global functions starting with capital letter (React convention)
        if (!componentToRender) {
          console.log('🔍 Scanning global scope for React components...');
          for (const key in window) {
            if (key[0] === key[0].toUpperCase() && typeof window[key] === 'function') {
              // Skip built-in constructors
              if (!['Object', 'Array', 'String', 'Number', 'Boolean', 'Date', 'RegExp', 'Error', 'Function', 'Symbol', 'Promise', 'Map', 'Set', 'WeakMap', 'WeakSet', 'Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Uint16Array', 'Int32Array', 'Uint32Array', 'Float32Array', 'Float64Array', 'BigInt64Array', 'BigUint64Array', 'DataView', 'ArrayBuffer', 'SharedArrayBuffer', 'Atomics', 'JSON', 'Math', 'Reflect', 'Proxy', 'Intl', 'WebAssembly', 'React', 'ReactDOM', 'Babel'].includes(key)) {
                componentToRender = window[key];
                console.log('✅ Auto-detected component:', key);
                break;
              }
            }
          }
        }
        
        console.log('🎯 Component found:', componentToRender ? 'YES' : 'NO');
        console.log('Component name:', componentToRender?.name || 'Unknown');
        
        if (componentToRender) {
          console.log('✨ Rendering component...');
          const root = ReactDOM.createRoot(document.getElementById('preview-root'));
          root.render(React.createElement(componentToRender));
          console.log('✅ Component rendered successfully!');
          
          // Initialize Lucide icons after render
          setTimeout(() => {
            if (window.lucide && window.lucide.createIcons) {
              window.lucide.createIcons();
              console.log('✅ Lucide icons initialized!');
            }
          }, 100);
        } else {
          console.error('❌ No component found to render');
          document.getElementById('preview-root').innerHTML = '<div style="padding: 2rem; text-align: center; color: #ef4444; font-family: system-ui;"><h2 style="font-size: 1.5rem; margin-bottom: 1rem;">❌ Could not find component</h2><p>Make sure your TSX exports a component with:<br><code style="background: #fee; padding: 0.5rem; border-radius: 0.25rem; display: inline-block; margin-top: 1rem;">export default function ComponentName() {...}</code></p></div>';
        }
      } catch (error) {
        console.error('❌ Preview error:', error);
        console.error('Error stack:', error.stack);
        document.getElementById('preview-root').innerHTML = '<div style="padding: 2rem; text-align: center; color: #ef4444; font-family: system-ui;"><h2 style="font-size: 1.5rem; margin-bottom: 1rem;">❌ Error rendering component</h2><p style="background: #fee; padding: 1rem; border-radius: 0.5rem; margin-top: 1rem; text-align: left; overflow-x: auto;"><strong>Error:</strong> ' + error.message + '<br><br><strong>Stack:</strong><br><code style="font-size: 0.75rem; white-space: pre-wrap;">' + (error.stack || 'No stack trace') + '</code></p></div>';
      }
    });
  </script>
</body>
</html>
                      `}
                      className="w-full h-[550px] border-0"
                      title="TSX Preview"
                      sandbox="allow-scripts allow-same-origin"
                      onLoad={() => {
                        console.log('📊 Preview iframe loaded')
                        console.log('📊 TSX Code length:', tsxCode.length)
                        console.log('📊 Processed Code length:', processedTsxCode.length)
                      }}
                      onError={(e) => {
                        console.error('❌ Iframe error:', e)
                        toast.error('Failed to load preview iframe')
                      }}
                    />
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-[400px] text-gray-400">
                      <div className="text-center space-y-2">
                        <Eye className="w-12 h-12 mx-auto opacity-50" />
                        <p>Paste TSX code and click "Preview TSX" to see it with full styling</p>
                      </div>
                    </div>
                    )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Form fields for post metadata */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* Title */}
              <Card>
                <CardHeader>
                  <CardTitle>Title</CardTitle>
                  <CardDescription>The main title of your post</CardDescription>
                </CardHeader>
                <CardContent>
                  <Input
                    placeholder="Enter post title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="text-lg"
                  />
                </CardContent>
              </Card>

              {/* URL Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>URL Settings</CardTitle>
                  <CardDescription>Set the URL where your post will be published</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="post-url-tsx">Post URL</Label>
                    <Input
                      id="post-url-tsx"
                      placeholder="/blog/my-post or /real-estate-outsourcing"
                      value={customUrl || (slug ? `${urlPattern.replace('[slug]', slug)}` : '')}
                      onChange={(e) => {
                        let url = e.target.value.trim()
                        if (url && !url.startsWith('/')) {
                          url = '/' + url
                        }
                        if (url && url.length > 1) {
                          const urlParts = url.split('/').filter(part => part.length > 0)
                          const extractedSlug = urlParts[urlParts.length - 1] || ''
                          if (extractedSlug) {
                            setSlug(extractedSlug)
                          }
                          setCustomUrl(url)
                          if (url.startsWith('/blog/')) {
                            setUrlPattern('/blog/[slug]')
                          } else if (url.startsWith('/blogs/')) {
                            setUrlPattern('/blogs/[slug]')
                          } else if (url.startsWith('/services/pillars/')) {
                            setUrlPattern('/services/pillars/[slug]')
                          } else {
                            setUrlPattern(null)
                          }
                        } else {
                          setCustomUrl(url)
                        }
                      }}
                      required
                      className="font-mono"
                    />
                    
                    {/* Live URL Preview */}
                    {(customUrl || slug) && (
                      <div className="flex items-center gap-2 p-3 bg-lime-50 border border-lime-200 rounded-lg mt-3">
                        <Globe className="w-4 h-4 text-lime-600 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-lime-700 font-medium mb-1">Live Preview:</p>
                          <p className="text-sm text-lime-900 font-mono truncate">
                            https://yourdomain.com{customUrl || (slug ? `${urlPattern.replace('[slug]', slug)}` : '')}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            const fullUrl = `https://yourdomain.com${customUrl || (slug ? `${urlPattern.replace('[slug]', slug)}` : '')}`
                            navigator.clipboard.writeText(fullUrl)
                            toast.success('URL copied to clipboard!')
                          }}
                          className="p-2 hover:bg-lime-100 rounded transition-colors"
                          title="Copy URL"
                        >
                          <Copy className="w-4 h-4 text-lime-600" />
                        </button>
                      </div>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="slug-tsx">Slug</Label>
                    <Input
                      id="slug-tsx"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle>Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Enter a brief description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={status} onValueChange={(value) => setStatus(value as 'draft' | 'published')}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button
                    type="submit"
                    className="w-full bg-lime-600 hover:bg-lime-700 text-white"
                    disabled={loading || !title || !slug || !compiledContent}
                    onClick={handleSubmit}
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {loading ? 'Saving...' : status === 'draft' ? 'Save as Draft' : 'Publish'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setCreationMethod(null)
                      setShowMethodModal(true)
                    }}
                  >
                    Choose Different Method
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    )
  }

  // Render Custom CMS Form
  const renderCustomCMS = () => {
    return (
      <div className="flex flex-1 flex-col gap-4 p-4 pt-20">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
          <h1 className="text-3xl font-bold text-gray-900">Create a Post</h1>
        </div>

        <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content Area */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Post Type Selection */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Post Type</CardTitle>
                      <CardDescription>Select the type of content you want to create</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Select value={postType} onValueChange={(value) => setPostType(value as PostType)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select post type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="blog">Blog Post</SelectItem>
                          <SelectItem value="article">Article</SelectItem>
                          <SelectItem value="pillar">Pillar Page</SelectItem>
                        </SelectContent>
                      </Select>
                    </CardContent>
                  </Card>

                  {/* Title */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Title</CardTitle>
                      <CardDescription>The main title of your post</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Input
                        placeholder="Enter post title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="text-lg"
                      />
                    </CardContent>
                  </Card>

                  {/* URL Settings */}
                  <Card>
                    <CardHeader>
                      <CardTitle>URL Settings</CardTitle>
                      <CardDescription>Set the URL where your post will be published</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="post-url">Post URL</Label>
                        <Input
                          id="post-url"
                          placeholder="/blog/my-post or /real-estate-outsourcing"
                          value={customUrl || (slug && urlPattern ? urlPattern.replace('[slug]', slug) : '')}
                          onChange={(e) => {
                            let url = e.target.value.trim()
                            
                            // Ensure it starts with /
                            if (url && !url.startsWith('/')) {
                              url = '/' + url
                            }
                            
                            // Extract slug from URL (last part after /)
                            if (url && url.length > 1) {
                              const urlParts = url.split('/').filter(part => part.length > 0)
                              const extractedSlug = urlParts[urlParts.length - 1] || ''
                              
                              if (extractedSlug) {
                                setSlug(extractedSlug)
                              }
                              
                              // Save the full URL
                              setCustomUrl(url)
                              
                              // Auto-detect pattern if it matches known patterns
                              if (url.startsWith('/blog/')) {
                                setUrlPattern('/blog/[slug]')
                              } else if (url.startsWith('/blogs/')) {
                                setUrlPattern('/blogs/[slug]')
                              } else if (url.startsWith('/services/pillars/')) {
                                setUrlPattern('/services/pillars/[slug]')
                              } else {
                                // Custom URL, no pattern
                                setUrlPattern(null)
                              }
                            } else {
                              setCustomUrl(url)
                            }
                          }}
                          required
                          className="font-mono"
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Type the full URL where your post will be published (e.g., /blog/my-post or /real-estate-outsourcing). This will be saved to the database.
                        </p>
                        
                        {/* Live URL Preview */}
                        {(customUrl || slug) && (
                          <div className="flex items-center gap-2 p-3 bg-lime-50 border border-lime-200 rounded-lg mt-3">
                            <Globe className="w-4 h-4 text-lime-600 flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                              <p className="text-xs text-lime-700 font-medium mb-1">Live Preview:</p>
                              <p className="text-sm text-lime-900 font-mono truncate">
                                https://yourdomain.com{customUrl || (slug && urlPattern ? urlPattern.replace('[slug]', slug) : '')}
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                const fullUrl = `https://yourdomain.com${customUrl || (slug && urlPattern ? urlPattern.replace('[slug]', slug) : '')}`
                                navigator.clipboard.writeText(fullUrl)
                                toast.success('URL copied to clipboard!')
                              }}
                              className="p-2 hover:bg-lime-100 rounded transition-colors"
                              title="Copy URL"
                            >
                              <Copy className="w-4 h-4 text-lime-600" />
                            </button>
                          </div>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="slug">Slug (Auto-generated from URL)</Label>
                        <Input
                          id="slug"
                          placeholder="post-url-slug"
                          value={slug}
                          onChange={(e) => {
                            setSlug(e.target.value)
                            // Update customUrl if it exists
                            if (customUrl) {
                              const urlParts = customUrl.split('/').filter(part => part.length > 0)
                              if (urlParts.length > 0) {
                                urlParts[urlParts.length - 1] = e.target.value
                                setCustomUrl('/' + urlParts.join('/'))
                              }
                            }
                          }}
                          required
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          URL-friendly identifier. Auto-extracted from URL above, but you can edit it.
                        </p>
                      </div>

                      {/* URL Preview */}
                      <div className="p-3 bg-lime-50 rounded-lg border border-lime-200">
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                          <Globe className="w-4 h-4" />
                          <span className="font-medium">URL to be saved:</span>
                        </div>
                        <code className="text-lime-700 font-mono text-sm break-all">
                          {customUrl || (slug ? `/${slug}` : '') || 'Enter URL above...'}
                        </code>
                        <p className="text-xs text-lime-600 mt-2">
                          ✓ This exact URL will be saved to the database
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Description */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Description</CardTitle>
                      <CardDescription>Short description or excerpt for your post</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Textarea
                        placeholder="Enter a brief description..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={3}
                      />
                    </CardContent>
                  </Card>

                  {/* Content */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Content</CardTitle>
                      <CardDescription>The main content of your post</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Textarea
                        placeholder="Write your post content here..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows={15}
                        className="font-mono"
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        Rich text editor coming soon. For now, use plain text or markdown.
                      </p>
                    </CardContent>
                  </Card>

                  {/* SEO Settings */}
                  <Card>
                    <CardHeader>
                      <CardTitle>SEO Settings</CardTitle>
                      <CardDescription>Optimize your post for search engines</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="seo-title">SEO Title (Meta Title)</Label>
                        <Input
                          id="seo-title"
                          placeholder="Leave empty to use post title"
                          value={seoTitle}
                          onChange={(e) => setSeoTitle(e.target.value)}
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Recommended: 50-60 characters. Will default to post title if empty.
                        </p>
                      </div>

                      <div>
                        <Label htmlFor="seo-description">SEO Description (Meta Description)</Label>
                        <Textarea
                          id="seo-description"
                          placeholder="Leave empty to use post description"
                          value={seoDescription}
                          onChange={(e) => setSeoDescription(e.target.value)}
                          rows={3}
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Recommended: 150-160 characters. Will default to post description if empty.
                        </p>
                      </div>

                      <div>
                        <Label htmlFor="seo-keywords">SEO Keywords</Label>
                        <Input
                          id="seo-keywords"
                          placeholder="Add a keyword and press Enter"
                          value={seoKeywordInput}
                          onChange={(e) => setSeoKeywordInput(e.target.value)}
                          onKeyDown={handleSeoKeywordAdd}
                        />
                        {seoKeywords.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {seoKeywords.map((keyword) => (
                              <Badge key={keyword} variant="secondary" className="flex items-center gap-1">
                                {keyword}
                                <button
                                  type="button"
                                  onClick={() => handleSeoKeywordRemove(keyword)}
                                  className="ml-1 hover:text-red-600"
                                >
                                  <X className="w-3 h-3" />
                                </button>
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="canonical-url">Canonical URL (Optional)</Label>
                        <Input
                          id="canonical-url"
                          placeholder="https://example.com/canonical-page"
                          value={canonicalUrl}
                          onChange={(e) => setCanonicalUrlState(e.target.value)}
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Use if this content is duplicated from another URL.
                        </p>
                      </div>

                      <div>
                        <Label htmlFor="og-image">Open Graph Image URL (Optional)</Label>
                        <Input
                          id="og-image"
                          placeholder="https://example.com/image.jpg"
                          value={ogImage}
                          onChange={(e) => setOgImage(e.target.value)}
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Image shown when sharing on social media (1200x630px recommended).
                        </p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="no-index"
                          checked={noIndex}
                          onChange={(e) => setNoIndex(e.target.checked)}
                          className="rounded border-gray-300"
                        />
                        <Label htmlFor="no-index" className="cursor-pointer">
                          Prevent search engines from indexing this page
                        </Label>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Status */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Select value={status} onValueChange={(value) => setStatus(value as 'draft' | 'published')}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="published">Published</SelectItem>
                        </SelectContent>
                      </Select>
                    </CardContent>
                  </Card>

                  {/* Category */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Category</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Input
                        placeholder="e.g., Outsourcing, Real Estate"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      />
                    </CardContent>
                  </Card>

                  {/* Tags */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Tags</CardTitle>
                      <CardDescription>Press Enter to add a tag</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Input
                        placeholder="Add a tag and press Enter"
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyDown={handleTagAdd}
                      />
                      {tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                              {tag}
                              <button
                                type="button"
                                onClick={() => handleTagRemove(tag)}
                                className="ml-1 hover:text-red-600"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Actions */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <Button
                        type="submit"
                        className="w-full bg-lime-600 hover:bg-lime-700 text-white"
                        disabled={loading || !title || !slug}
                      >
                        <Save className="w-4 h-4 mr-2" />
                        {loading ? 'Saving...' : status === 'draft' ? 'Save as Draft' : 'Publish'}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full"
                        onClick={() => router.back()}
                      >
                        Cancel
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </form>
          </div>
    )
  }

  return (
    <AdminGuard>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          {/* Method Selection Modal */}
          <Dialog open={showMethodModal} onOpenChange={(open) => {
            // Prevent closing modal without selecting a method
            if (!open && !creationMethod) {
              // Redirect back if user tries to close
              router.back()
            }
          }}>
            <DialogContent className="sm:max-w-[900px]" showCloseButton={false}>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900">
                  Choose Creation Method
                </DialogTitle>
                <DialogDescription className="text-base">
                  Select how you would like to create your post
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {/* AI Generation Option */}
                <Card 
                  className="cursor-pointer hover:shadow-lg transition-all duration-200 border-2 hover:border-lime-500"
                  onClick={() => handleMethodSelect('ai')}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-lime-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Generate with AI
                        </h3>
                        <p className="text-sm text-gray-600">
                          Let AI help you create content quickly. Provide a topic or prompt and get a complete post generated.
                        </p>
                      </div>
                      <Button 
                        className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-4"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleMethodSelect('ai')
                        }}
                      >
                        Choose AI Generation
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Custom CMS Option */}
                <Card 
                  className="cursor-pointer hover:shadow-lg transition-all duration-200 border-2 hover:border-lime-500"
                  onClick={() => handleMethodSelect('custom')}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center">
                        <FileEdit className="w-8 h-8 text-lime-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Custom CMS
                        </h3>
                        <p className="text-sm text-gray-600">
                          Create your post manually with full control over content, formatting, and structure.
                        </p>
                      </div>
                      <Button 
                        className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-4"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleMethodSelect('custom')
                        }}
                      >
                        Choose Custom CMS
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Paste TSX Option */}
                <Card 
                  className="cursor-pointer hover:shadow-lg transition-all duration-200 border-2 hover:border-lime-500"
                  onClick={() => handleMethodSelect('paste')}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center">
                        <Code className="w-8 h-8 text-lime-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Paste TSX
                        </h3>
                        <p className="text-sm text-gray-600">
                          Paste your TSX code and compile it as a blog post. Perfect for custom React components.
                        </p>
                      </div>
                      <Button 
                        className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-4"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleMethodSelect('paste')
                        }}
                      >
                        Choose Paste TSX
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </DialogContent>
          </Dialog>

          {/* Render content based on selected method */}
          {creationMethod === 'ai' && renderAIGeneration()}
          {creationMethod === 'custom' && renderCustomCMS()}
          {creationMethod === 'paste' && renderPasteTSX()}
        </SidebarInset>
      </SidebarProvider>
    </AdminGuard>
  )
}

