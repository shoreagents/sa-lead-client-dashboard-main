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
  
  // Use a ref to store the processed code for postMessage (avoids useEffect dependency issues)
  const processedCodeRef = React.useRef<string>('')
  
  // Generate iframe HTML (memoized to avoid recreation on every render)
  const iframeHtml = React.useMemo(() => {
    // Build the HTML as a string to avoid template literal issues
    const html = [
      '<!DOCTYPE html>',
      '<html lang="en">',
      '<head>',
      '  <meta charset="UTF-8">',
      '  <meta name="viewport" content="width=device-width, initial-scale=1.0">',
      '  <title>TSX Preview</title>',
      '  <script src="https://cdn.tailwindcss.com"></' + 'script>',
      '  <script>',
      '    tailwind.config = {',
      '      theme: {',
      '        extend: {',
      '          colors: {',
      '            lime: {',
      '              50: "#f7fee7",',
      '              100: "#ecfccb",',
      '              200: "#d9f99d",',
      '              300: "#bef264",',
      '              400: "#a3e635",',
      '              500: "#84cc16",',
      '              600: "#65a30d",',
      '              700: "#4d7c0f",',
      '              800: "#3f6212",',
      '              900: "#365314",',
      '            }',
      '          }',
      '        }',
      '      }',
      '    }',
      '  </' + 'script>',
      '  <style>',
      '    body { margin: 0; padding: 0; }',
      '    #preview-root { min-height: 100vh; }',
      '  </style>',
      '</head>',
      '<body>',
      '  <div id="preview-root">',
      '    <div style="padding: 2rem; text-align: center; color: #84cc16;">',
      '      <div style="font-size: 2rem; margin-bottom: 1rem;">⏳</div>',
      '      <p>Waiting for code...</p>',
      '    </div>',
      '  </div>',
      '  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></' + 'script>',
      '  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></' + 'script>',
      '  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></' + 'script>',
      '  <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></' + 'script>',
      '  <script>',
      '    (function() {',
      '      console.log("Iframe initializing...");',
      '      ',
      '      // Wait for all libraries to load',
      '      const checkLibraries = setInterval(() => {',
      '        if (typeof React !== "undefined" && typeof ReactDOM !== "undefined" && typeof Babel !== "undefined" && typeof lucide !== "undefined") {',
      '          clearInterval(checkLibraries);',
      '          window.React = React;',
      '          window.ReactDOM = ReactDOM;',
      '          window.Babel = Babel;',
      '          window.lucide = lucide;',
      '          console.log("All libraries loaded");',
      '          ',
      '          // Notify parent that iframe is ready',
      '          if (window.parent !== window) {',
      '            window.parent.postMessage({ type: "iframe-ready" }, "*");',
      '          }',
      '        }',
      '      }, 100);',
      '      ',
      '      // Listen for TSX code from parent',
      '      window.addEventListener("message", function(event) {',
      '        if (event.data && event.data.type === "tsx-code") {',
      '          console.log("Received TSX code, length:", event.data.code ? event.data.code.length : 0);',
      '          ',
      '          if (!event.data.code) {',
      '            console.error("No code received!");',
      '            return;',
      '          }',
      '          ',
      '          // Process the code',
      '          processAndRenderCode(event.data.code);',
      '        }',
      '      });',
      '      ',
      '      // Process and render function',
      '      function processAndRenderCode(tsxCode) {',
      '        try {',
      '          console.log("Processing TSX code...");',
      '          ',
      '          // Create Lucide icon components',
      '          const commonIcons = ["Bot", "Clock", "Globe", "Zap", "Users", "TrendingUp", "Star", "ArrowRight", "CheckCircle", "Award", "Target", "Lightbulb", "Code", "Database", "Shield", "Smartphone", "Mail", "Phone", "MapPin", "Calendar", "FileText", "Image", "Video", "Heart", "Share", "MessageCircle", "ThumbsUp", "Eye", "Lock", "User", "Home", "Menu", "X", "ChevronDown", "ChevronUp", "ChevronLeft", "ChevronRight", "Plus", "Minus", "Check", "AlertCircle", "Info", "ExternalLink", "Link", "Copy", "Trash", "Edit", "Save"];',
      '          ',
      '          commonIcons.forEach(function(iconName) {',
      '            window[iconName] = function(props) {',
      '              var className = (props && props.className) || "";',
      '              var kebabName = iconName.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");',
      '              var el = React.createElement("i", { "data-lucide": kebabName, className: className });',
      '              React.useEffect(function() {',
      '                if (window.lucide) window.lucide.createIcons();',
      '              }, []);',
      '              return el;',
      '            };',
      '          });',
      '          ',
      '          // Transpile and evaluate',
      '          var transpiledCode = Babel.transform(tsxCode, { presets: ["react"] }).code;',
      '          console.log("Code transpiled");',
      '          ',
      '          eval(transpiledCode);',
      '          console.log("Code evaluated");',
      '          ',
      '          // Find component to render',
      '          var componentToRender = null;',
      '          var commonNames = ["VirtualAssistanceBlog", "BlogPost", "Post", "Page", "Component", "Article", "Blog", "Content", "App", "Main"];',
      '          ',
      '          for (var i = 0; i < commonNames.length; i++) {',
      '            if (typeof window[commonNames[i]] === "function") {',
      '              componentToRender = window[commonNames[i]];',
      '              console.log("Found component:", commonNames[i]);',
      '              break;',
      '            }',
      '          }',
      '          ',
      '          // Render the component',
      '          if (componentToRender) {',
      '            var root = ReactDOM.createRoot(document.getElementById("preview-root"));',
      '            root.render(React.createElement(componentToRender));',
      '            console.log("Component rendered");',
      '            ',
      '            // Notify success',
      '            setTimeout(function() {',
      '              if (window.lucide) window.lucide.createIcons();',
      '              if (window.parent !== window) {',
      '                window.parent.postMessage({ type: "preview-success" }, "*");',
      '              }',
      '            }, 500);',
      '          } else {',
      '            throw new Error("No component found to render");',
      '          }',
      '        } catch (error) {',
      '          console.error("Preview error:", error);',
      '          document.getElementById("preview-root").innerHTML = "<div style=\\"padding:2rem;color:#ef4444\\"><h2>Error</h2><p>" + error.message + "</p></div>";',
      '          if (window.parent !== window) {',
      '            window.parent.postMessage({ type: "preview-error", error: error.message }, "*");',
      '          }',
      '        }',
      '      }',
      '    })();',
      '  </' + 'script>',
      '</body>',
      '</html>'
    ].join('\n');
    
    return html;
  }, []);
  
  // Preprocess TSX code for iframe (remove imports, exports, and TypeScript syntax)
  const processedTsxCode = React.useMemo(() => {
    if (!tsxCode) return ''
    
    let processed = tsxCode
    
    // Remove all import statements
    processed = processed.replace(/^import\s+.*?from\s+['"].*?['"];?\s*$/gm, '')
    
    // Remove TypeScript interfaces (handle multi-line with balanced braces)
    // First, find all interface declarations and remove them
    const lines = processed.split('\n')
    const filteredLines: string[] = []
    let inInterface = false
    let braceCount = 0
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      
      // Check if this line starts an interface
      if (/^\s*interface\s+\w+/.test(line)) {
        inInterface = true
        braceCount = (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length
        continue // Skip this line
      }
      
      // If we're inside an interface, count braces
      if (inInterface) {
        braceCount += (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length
        if (braceCount <= 0) {
          inInterface = false
          braceCount = 0
        }
        continue // Skip this line
      }
      
      // Otherwise, keep the line
      filteredLines.push(line)
    }
    
    processed = filteredLines.join('\n')
    
    // Remove TypeScript type definitions (single line)
    processed = processed.replace(/^\s*type\s+\w+\s*=\s*[^;]+;?\s*$/gm, '')
    
    // Remove React.FC and React.FunctionComponent type annotations (do this BEFORE other type removals)
    processed = processed.replace(/:\s*React\.FC(?:<[^>]*>)?/g, '')
    processed = processed.replace(/:\s*React\.FunctionComponent(?:<[^>]*>)?/g, '')
    processed = processed.replace(/:\s*FC(?:<[^>]*>)?/g, '')
    processed = processed.replace(/:\s*FunctionComponent(?:<[^>]*>)?/g, '')
    
    // Fix malformed patterns like "const BlogPost.FC =" or "BlogPost.FC ="
    processed = processed.replace(/(\w+)\.FC\s*=/g, '$1 =')
    processed = processed.replace(/(\w+)\.FunctionComponent\s*=/g, '$1 =')
    
    // Remove type annotations from variable declarations (including React.FC)
    // This must come after React.FC removal to avoid creating malformed patterns
    processed = processed.replace(/(const|let|var)\s+(\w+)\s*:\s*[^=]+=/g, '$1 $2 =')
    
    // Remove type annotations from function parameters (more comprehensive)
    processed = processed.replace(/:\s*[A-Z]\w*(?:<[^>]*>)?(\[\])?/g, '')
    processed = processed.replace(/:\s*\{[^}]*\}/g, '')
    processed = processed.replace(/:\s*\([^)]*\)\s*=>/g, ' =>')
    
    // Remove return type annotations from functions
    processed = processed.replace(/\)\s*:\s*[A-Z]\w*(?:\s*\{|\s*=>)/g, (match) => {
      return match.includes('=>') ? ' =>' : ' {'
    })
    
    // Remove generic type parameters from function declarations
    processed = processed.replace(/function\s+\w+\s*<[^>]+>/g, (match) => {
      return match.replace(/<[^>]+>/, '')
    })
    
    // Remove generic type parameters from arrow functions
    processed = processed.replace(/const\s+\w+\s*<[^>]+>\s*=/g, (match) => {
      return match.replace(/<[^>]+>/, '')
    })
    
    // Replace "export default function ComponentName" with "function ComponentName" and assign to window
    processed = processed.replace(/export\s+default\s+function\s+(\w+)/g, (match, componentName) => {
      return `function ${componentName}`;
    });
    
    // Replace "export function ComponentName" with "function ComponentName" and assign to window
    processed = processed.replace(/export\s+function\s+(\w+)/g, (match, componentName) => {
      return `function ${componentName}`;
    });
    
    // Add window assignments for all component functions at the end
    // This will be done after transpilation in the iframe
    
    // Replace "export default ComponentName" at the end - assign to window
    processed = processed.replace(/export\s+default\s+(\w+);?\s*$/gm, (match, componentName) => {
      return `window.${componentName} = ${componentName};`;
    });
    
    // Also handle: const Component = ...; export default Component;
    processed = processed.replace(/(const\s+(\w+)\s*=\s*[^;]+);\s*export\s+default\s+(\w+);/g, (match, declaration, varName, exportName) => {
      return `${declaration}; window.${varName} = ${varName};`;
    });
    
    // Handle arrow function exports: const Component = () => ...; export default Component;
    processed = processed.replace(/(const\s+(\w+)\s*=\s*\([^)]*\)\s*=>[^;]+);\s*export\s+default\s+(\w+);/g, (match, declaration, varName, exportName) => {
      return `${declaration}; window.${varName} = ${varName};`;
    });
    
    // Remove generic type parameters from function declarations
    processed = processed.replace(/<[A-Z][\w\s,<>]*>/g, '')
    
    // Clean up multiple empty lines
    processed = processed.replace(/\n\s*\n\s*\n/g, '\n\n')
    
    console.log('🔧 Processed TSX Code Sample (first 200 chars):', processed.substring(0, 200))
    
    return processed
  }, [tsxCode])
  
  // Update the ref whenever processedTsxCode changes
  React.useEffect(() => {
    processedCodeRef.current = processedTsxCode
  }, [processedTsxCode])
  
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

  // Listen for messages from iframe (for error reporting and ready signal)
  React.useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'preview-error') {
        console.error('❌ Preview error from iframe:', event.data.error)
        setPreviewLoading(false)
        toast.error(`Preview error: ${event.data.error}`)
      }
      
      if (event.data?.type === 'preview-success') {
        console.log('✅ Preview rendered successfully in iframe!')
        setPreviewLoading(false)
        
        // Clear the timeout since preview loaded successfully
        if ((window as any).__previewTimeoutId) {
          clearTimeout((window as any).__previewTimeoutId)
          delete (window as any).__previewTimeoutId
        }
      }
      
      if (event.data?.type === 'iframe-ready') {
        console.log('✅ Iframe signaled ready, sending TSX code...')
        console.log('📊 processedCodeRef.current length:', processedCodeRef.current?.length || 0)
        
        // Send the TSX code to the iframe using the ref
        const iframe = document.querySelector('iframe[title="TSX Preview"]') as HTMLIFrameElement
        console.log('🔍 Found iframe:', !!iframe)
        console.log('🔍 Iframe has contentWindow:', !!iframe?.contentWindow)
        console.log('🔍 Code is available:', !!processedCodeRef.current)
        
        const sendCodeToIframe = (retryCount = 0) => {
          if (!iframe?.contentWindow) {
            console.error('❌ iframe or contentWindow not available')
            if (retryCount < 3) {
              console.log(`⏳ Retry ${retryCount + 1}/3 in 200ms...`)
              setTimeout(() => sendCodeToIframe(retryCount + 1), 200)
            } else {
              toast.error('Failed to connect to preview iframe')
              setPreviewLoading(false)
            }
            return
          }
          
          if (!processedCodeRef.current || processedCodeRef.current.length === 0) {
            console.error('❌ processedCodeRef.current is empty!')
            if (retryCount < 3) {
              console.log(`⏳ Waiting for code... Retry ${retryCount + 1}/3 in 200ms...`)
              setTimeout(() => sendCodeToIframe(retryCount + 1), 200)
            } else {
              console.error('❌ Code never became available after 3 retries')
              toast.error('Preview code is not available. Please try clicking Preview again.')
              setPreviewLoading(false)
            }
            return
          }
          
          console.log('📤 Sending TSX code to iframe...')
          iframe.contentWindow.postMessage({
            type: 'tsx-code',
            code: processedCodeRef.current
          }, '*')
          console.log('✅ Message sent! Code length:', processedCodeRef.current.length)
        }
        
        // Send immediately, with retry logic if needed
        setTimeout(() => sendCodeToIframe(), 100)
      }
    }
    
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

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
      console.log('📊 processedTsxCode length:', processedTsxCode.length)
      console.log('📊 processedCodeRef.current length:', processedCodeRef.current?.length || 0)
      
      // Ensure the ref is updated with the latest processed code before showing preview
      if (processedTsxCode && processedTsxCode.length > 0) {
        processedCodeRef.current = processedTsxCode
        console.log('✅ Manually updated processedCodeRef to ensure it has the latest code')
      } else {
        console.error('❌ processedTsxCode is empty! Cannot preview.')
        toast.error('Failed to process TSX code. Please check your code syntax.')
        return
      }
      
      // Set loading state
      setPreviewLoading(true)
      
      // Set preview mode - the iframe will render the actual styled component
      setCompiledContent('PREVIEW_READY')
      setContent(tsxCode) // Store the TSX code as content
      
      // Fallback: Remove loading state after max timeout (10 seconds) if iframe doesn't load
      const timeoutId = setTimeout(() => {
        setPreviewLoading(false)
        console.warn('⚠️ Preview loading timeout - iframe may have failed to load')
        console.warn('📊 Final check - processedCodeRef.current length:', processedCodeRef.current?.length || 0)
        toast.error('Preview timed out. Please try again or check the console for errors.')
      }, 10000)
      
      // Store timeout ID to clear it when iframe loads
      ;(window as any).__previewTimeoutId = timeoutId
      
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
        // Additional cleanup: Remove any remaining malformed patterns
        // Escape backticks and dollar signs for template literal embedding
        // Use String.fromCharCode to avoid template literal issues
        const backtick = String.fromCharCode(96);
        const dollar = String.fromCharCode(36);
        const escapedBacktick = String.fromCharCode(92) + String.fromCharCode(96);
        const escapedDollar = String.fromCharCode(92) + String.fromCharCode(36);
        let cleanedCode = processedTsxCode.replace(/\\/g, '\\\\').replace(new RegExp(backtick, 'g'), escapedBacktick).replace(new RegExp(dollar, 'g'), escapedDollar);
        
        // Fix any remaining .FC or .FunctionComponent patterns
        cleanedCode = cleanedCode.replace(/(\w+)\.FC\s*=/g, '$1 =');
        cleanedCode = cleanedCode.replace(/(\w+)\.FunctionComponent\s*=/g, '$1 =');
        
        // Remove any standalone .FC or .FunctionComponent references
        cleanedCode = cleanedCode.replace(/\.FC\b/g, '');
        cleanedCode = cleanedCode.replace(/\.FunctionComponent\b/g, '');
        
        const processedCode = cleanedCode;
        const transpiledCode = Babel.transform(processedCode, {
          presets: ['react']
        }).code;
        
        eval(transpiledCode);
        
        // After eval, automatically assign components to window
        // Use string parsing instead of regex
        const componentNames = new Set();
        const lines = processedCode.split('\\n');
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].trim();
          
          // Check for: function ComponentName(
          const funcIndex = line.indexOf('function ');
          if (funcIndex >= 0) {
            const afterFunc = line.substring(funcIndex + 9);
            const parenIndex = afterFunc.indexOf('(');
            if (parenIndex > 0) {
              const name = afterFunc.substring(0, parenIndex).trim();
              if (name.length > 0 && name.charAt(0) === name.charAt(0).toUpperCase()) {
                componentNames.add(name);
              }
            }
          }
          
          // Check for: const ComponentName =
          const constIndex = line.indexOf('const ');
          if (constIndex >= 0) {
            const afterConst = line.substring(constIndex + 6);
            const eqIndex = afterConst.indexOf('=');
            if (eqIndex > 0) {
              const name = afterConst.substring(0, eqIndex).trim();
              if (name.length > 0 && name.charAt(0) === name.charAt(0).toUpperCase()) {
                componentNames.add(name);
              }
            }
          }
        }
        
        for (const name of componentNames) {
          try {
            const component = eval(name);
            if (typeof component === 'function') {
              window[name] = component;
            }
          } catch (e) {
            // Component might not be accessible
          }
        }
        
        // Auto-detect any React component function
        let componentToRender = null;
        const commonNames = ['VirtualAssistanceBlog', 'BlogPost', 'Post', 'Page', 'Component', 'Article', 'Blog', 'Content', 'App', 'Main', 'Home', 'Layout'];
        
        for (const name of commonNames) {
          if (typeof window[name] === 'function') {
            componentToRender = window[name];
            break;
          }
        }
        
        if (!componentToRender) {
          const lucideIcons = ['Bot', 'Clock', 'Globe', 'Globe2', 'Zap', 'Users', 'Users2', 'TrendingUp', 
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
            'Instagram', 'Github', 'Youtube'];
          
          const builtIns = ['Object', 'Array', 'String', 'Number', 'Boolean', 'Date', 'RegExp', 'Error', 'Function', 'Symbol', 'Promise', 'Map', 'Set', 'WeakMap', 'WeakSet', 'Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Uint16Array', 'Int32Array', 'Uint32Array', 'Float32Array', 'Float64Array', 'BigInt64Array', 'BigUint64Array', 'DataView', 'ArrayBuffer', 'SharedArrayBuffer', 'Atomics', 'JSON', 'Math', 'Reflect', 'Proxy', 'Intl', 'WebAssembly', 'React', 'ReactDOM', 'Babel', 'loadScript', 'loadAllLibraries'];
          
          for (const key in window) {
            if (key[0] === key[0].toUpperCase() && typeof window[key] === 'function') {
              // Skip built-in constructors and Lucide icons
              if (!builtIns.includes(key) && !lucideIcons.includes(key)) {
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
                      srcDoc={iframeHtml}
                      className="w-full h-[550px] border-0"
                      title="TSX Preview"
                      sandbox="allow-scripts allow-same-origin"
                      onLoad={() => {
                        console.log('📊 Preview iframe loaded')
                        console.log('📊 TSX Code length:', tsxCode.length)
                        console.log('📊 Processed Code length:', processedTsxCode.length)
                        
                        // Clear loading state when iframe loads
                        setPreviewLoading(false)
                        
                        // Clear the timeout if it exists
                        if ((window as any).__previewTimeoutId) {
                          clearTimeout((window as any).__previewTimeoutId)
                          delete (window as any).__previewTimeoutId
                        }
                        
                        // Code will be sent when iframe signals it's ready via postMessage
                        console.log('⏳ Waiting for iframe to signal ready...')
                        
                        // Check iframe content after delay
                        setTimeout(() => {
                          try {
                            const iframeElement = document.querySelector('iframe[title="TSX Preview"]') as HTMLIFrameElement
                            if (iframeElement?.contentWindow?.document) {
                              const root = iframeElement.contentWindow.document.getElementById('preview-root')
                              if (root && root.textContent?.includes('Error')) {
                                toast.error('Preview loaded but contains errors. Check console for details.')
                              } else if (root && !root.textContent?.includes('Waiting')) {
                                console.log('✅ Preview appears to have content')
                              }
                            }
                          } catch (e) {
                            console.log('Could not access iframe content (expected for security)')
                          }
                        }, 1000)
                      }}
                    />
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-[600px] text-gray-400">
                      <Eye className="w-16 h-16 mb-4 opacity-50" />
                      <p className="text-lg">Preview will appear here</p>
                      <p className="text-sm">Paste your TSX code and click "Preview Code"</p>
                    </div>
                  )}
                </div>

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

          </div>
          
          {/* Action Buttons */}
          {compiledContent && tsxCode && (
            <div className="flex gap-4 mt-6">
              <Button
                type="button"
                onClick={() => {
                  setMode('preview');
                  setContent(tsxCode);
                }}
                className="flex-1 bg-lime-600 hover:bg-lime-700 text-white"
              >
                <FileText className="w-4 h-4 mr-2" />
                Use This Content
              </Button>
              <Button
                type="button"
                onClick={() => {
                  setTsxCode('');
                  setCompiledContent('');
                  setContent('');
                }}
                variant="outline"
                className="flex-1"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Start Over
              </Button>
            </div>
          )}
        </form>
        </div>
      )
    }

  // Main component return
  return (
    <AdminGuard>
      <SidebarProvider>
        <AdminSidebar />
        <SidebarInset>
          {renderPasteTSX()}
        </SidebarInset>
      </SidebarProvider>
    </AdminGuard>
  )
}
