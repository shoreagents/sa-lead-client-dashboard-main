'use client'

import React, { useState, useMemo } from 'react'
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
import { X, Eye, Globe, Sparkles, Search, ExternalLink, Code, Loader2, ArrowRight } from 'lucide-react'
import { toast } from 'sonner'
import { useAIResearch, useGenerateTSXBlog } from '@/hooks/use-api'

export default function GenerateBlogPage() {
  const router = useRouter()
  const { admin, isAdmin } = useAdminAuth()
  
  // Form state
  const [topic, setTopic] = useState('')
  const [tone, setTone] = useState('professional')
  const [targetAudience, setTargetAudience] = useState('general')
  
  // Research state
  const [researchData, setResearchData] = useState<any>(null)
  const [researchStep, setResearchStep] = useState<'input' | 'researching' | 'ready'>('input')
  
  // TSX generation state
  const [tsxCode, setTsxCode] = useState('')
  const [compiledContent, setCompiledContent] = useState('')
  const [previewLoading, setPreviewLoading] = useState(false)
  const [generationStep, setGenerationStep] = useState<'idle' | 'generating' | 'ready'>('idle')
  
  // TanStack Query mutations
  const researchMutation = useAIResearch()
  const generateTSXMutation = useGenerateTSXBlog()
  
  // Preprocess TSX code for iframe (remove imports and exports)
  const processedTsxCode = useMemo(() => {
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
    
    return processed
  }, [tsxCode])
  
  const handleResearch = () => {
    if (!topic.trim()) {
      toast.error('Please enter a topic to research')
      return
    }
    
    setResearchStep('researching')
    researchMutation.mutate(
      { topic, numResults: 10 },
      {
        onSuccess: (data) => {
          if (data.success) {
            setResearchData(data.data)
            setResearchStep('ready')
            toast.success(`✅ Research complete! Found ${data.data.mainResults.length} results`)
          } else {
            toast.error('Failed to perform research')
            setResearchStep('input')
          }
        },
        onError: (error) => {
          console.error('Research error:', error)
          toast.error(`Research failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
          setResearchStep('input')
        },
      }
    )
  }
  
  const handleGenerateTSX = () => {
    if (!topic.trim()) {
      toast.error('Please enter a topic')
      return
    }
    
    setGenerationStep('generating')
    generateTSXMutation.mutate(
      {
        topic,
        researchData: researchData || undefined,
        tone,
        targetAudience,
      },
      {
        onSuccess: (data) => {
          if (data.success && data.tsxCode) {
            setTsxCode(data.tsxCode)
            setGenerationStep('ready')
            toast.success('✨ Blog post generated! Preview it below.')
          } else {
            toast.error('Failed to generate blog post')
            setGenerationStep('idle')
          }
        },
        onError: (error) => {
          console.error('Generation error:', error)
          toast.error(`Generation failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
          setGenerationStep('idle')
        },
      }
    )
  }
  
  const handleCompile = () => {
    if (!tsxCode.trim()) {
      toast.error('Please generate a blog post first')
      return
    }
    
    console.log('🔍 Preview TSX clicked - generating preview...')
    setPreviewLoading(true)
    setCompiledContent('PREVIEW_READY')
    
    setTimeout(() => {
      setPreviewLoading(false)
      console.log('✅ Preview should be visible now')
      toast.success('✅ Preview ready!')
    }, 1500)
  }
  
  const handleOpenInNewTab = () => {
    if (!tsxCode.trim() || !compiledContent) {
      toast.error('Please preview the TSX code first!')
      return
    }
    
    const fullHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blog Preview - ${topic}</title>
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
    #root { min-height: 100vh; }
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
        
        let componentToRender = null;
        const commonNames = ['BlogPost', 'Post', 'Page', 'Component', 'Article', 'Blog', 'Content'];
        
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
    <AdminGuard>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-20">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <h1 className="text-3xl font-bold text-gray-900">AI Blog Generation</h1>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Input & Controls */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-lime-600" />
                    Generate Blog Post
                  </CardTitle>
                  <CardDescription>
                    Use Serper API to research and Claude API to generate a TSX blog post
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Topic Input */}
                  <div className="space-y-2">
                    <Label htmlFor="topic">Blog Topic</Label>
                    <Input
                      id="topic"
                      placeholder="e.g., Virtual Assistant Services for Small Businesses"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      disabled={researchMutation.isPending || generateTSXMutation.isPending}
                    />
                  </div>
                  
                  {/* Tone Selection */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="tone">Tone</Label>
                      <Select value={tone} onValueChange={setTone}>
                        <SelectTrigger id="tone">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="professional">Professional</SelectItem>
                          <SelectItem value="casual">Casual</SelectItem>
                          <SelectItem value="friendly">Friendly</SelectItem>
                          <SelectItem value="formal">Formal</SelectItem>
                          <SelectItem value="conversational">Conversational</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="audience">Target Audience</Label>
                      <Select value={targetAudience} onValueChange={setTargetAudience}>
                        <SelectTrigger id="audience">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                          <SelectItem value="technical">Technical</SelectItem>
                          <SelectItem value="beginners">Beginners</SelectItem>
                          <SelectItem value="experts">Experts</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  {/* Research Step */}
                  {researchStep === 'input' && (
                    <Button
                      onClick={handleResearch}
                      className="w-full bg-lime-600 hover:bg-lime-700 text-white"
                      disabled={!topic.trim() || researchMutation.isPending}
                    >
                      {researchMutation.isPending ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Researching...
                        </>
                      ) : (
                        <>
                          <Search className="w-4 h-4 mr-2" />
                          Research Topic (Serper API)
                        </>
                      )}
                    </Button>
                  )}
                  
                  {researchStep === 'researching' && (
                    <div className="p-4 bg-lime-50 border border-lime-200 rounded-lg">
                      <div className="flex items-center gap-2 text-lime-700">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Researching topic with Serper API...</span>
                      </div>
                    </div>
                  )}
                  
                  {researchStep === 'ready' && researchData && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-green-700 font-semibold">✅ Research Complete</span>
                        <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300">
                          {researchData.mainResults?.length || 0} results
                        </Badge>
                      </div>
                      <p className="text-sm text-green-600">
                        Found {researchData.mainResults?.length || 0} search results, knowledge graph data, and related searches.
                      </p>
                    </div>
                  )}
                  
                  {/* Generate TSX Button */}
                  <Button
                    onClick={handleGenerateTSX}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                    disabled={!topic.trim() || generateTSXMutation.isPending || generationStep === 'ready'}
                  >
                    {generateTSXMutation.isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Generating TSX Blog...
                      </>
                    ) : generationStep === 'ready' ? (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        ✨ Blog Generated
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Generate TSX Blog (Claude API)
                      </>
                    )}
                  </Button>
                  
                  {/* Generated TSX Code Display */}
                  {generationStep === 'ready' && tsxCode && (
                    <div className="space-y-2">
                      <Label>Generated TSX Code</Label>
                      <Textarea
                        value={tsxCode}
                        onChange={(e) => setTsxCode(e.target.value)}
                        rows={10}
                        className="font-mono text-sm"
                        readOnly={false}
                      />
                      <p className="text-xs text-gray-500">
                        💡 You can edit the generated code before previewing
                      </p>
                    </div>
                  )}
                  
                  {/* Preview Button */}
                  {generationStep === 'ready' && tsxCode && (
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        onClick={handleCompile}
                        className="w-full bg-lime-600 hover:bg-lime-700 text-white"
                        disabled={!tsxCode.trim()}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Preview TSX
                      </Button>
                      <Button
                        onClick={handleOpenInNewTab}
                        variant="outline"
                        className="border-lime-600 text-lime-600 hover:bg-lime-50"
                        disabled={!compiledContent}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Open in Tab
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              {/* Preview */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Eye className="w-5 h-5 text-lime-600" />
                        Live Styled Preview
                      </CardTitle>
                      <CardDescription>
                        Preview your generated TSX blog post with full styling
                      </CardDescription>
                    </div>
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
                          <span>📊 Live Preview Active - Topic: {topic}</span>
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
  <title>Blog Preview</title>
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
        document.getElementById('preview-root').innerHTML = '<div style="padding: 2rem; text-align: center; color: #ef4444;"><h2>Failed to load libraries</h2><p>' + error.message + '</p></div>';
        return false;
      }
    }
    
    loadAllLibraries().then((success) => {
      if (!success) return;
      
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
        
        let componentToRender = null;
        const commonNames = ['BlogPost', 'Post', 'Page', 'Component', 'Article', 'Blog', 'Content'];
        
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
          const root = ReactDOM.createRoot(document.getElementById('preview-root'));
          root.render(React.createElement(componentToRender));
          
          setTimeout(() => {
            if (window.lucide && window.lucide.createIcons) {
              window.lucide.createIcons();
            }
          }, 100);
        } else {
          document.getElementById('preview-root').innerHTML = '<div style="padding: 2rem; text-align: center; color: #ef4444;"><h2>Could not find component</h2></div>';
        }
      } catch (error) {
        console.error('Preview error:', error);
        document.getElementById('preview-root').innerHTML = '<div style="padding: 2rem; text-align: center; color: #ef4444;"><h2>Error rendering component</h2><p>' + error.message + '</p></div>';
      }
    });
  </script>
</body>
</html>
                          `}
                          className="w-full h-full border-0"
                          style={{ minHeight: '600px' }}
                        />
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-[600px] space-y-4 text-gray-400">
                        <Code className="w-16 h-16" />
                        <div className="text-center space-y-2">
                          <p className="text-lg font-semibold">No Preview Available</p>
                          <p className="text-sm">Generate a blog post to see the preview here</p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </AdminGuard>
  )
}





