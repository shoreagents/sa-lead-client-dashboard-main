import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { tsxCode } = await request.json()

    if (!tsxCode || !tsxCode.trim()) {
      return NextResponse.json(
        { error: 'TSX code is required' },
        { status: 400 }
      )
    }

    // Create a full HTML page with Tailwind CDN and the TSX rendered as HTML
    // We'll convert the TSX to a format that can be displayed
    const previewHtml = `
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
    body {
      margin: 0;
      padding: 0;
    }
  </style>
</head>
<body>
  <div id="preview-root"></div>
  
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://unpkg.com/lucide-react@latest/dist/umd/lucide-react.js"></script>
  
  <script type="text/babel">
    const { Bot, Clock, Globe, Zap, Users, TrendingUp, Star, ArrowRight, CheckCircle, Award, Target, Lightbulb, Code, Database, Shield, Smartphone, Mail, Phone, MapPin, Calendar, FileText, Image: ImageIcon, Video, Music, Download, Upload, Search, Filter, Settings, Bell, Heart, Share, MessageCircle, ThumbsUp, Eye, EyeOff, Lock, Unlock, User, UserPlus, UserMinus, Home, Menu, X, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Plus, Minus, Check, AlertCircle, Info, HelpCircle, ExternalLink, Link, Unlink, Copy, Clipboard, Trash, Edit, Save, RefreshCw, RotateCw, Play, Pause, Stop, SkipBack, SkipForward, Volume, VolumeX, Wifi, WifiOff, Battery, BatteryCharging, Sun, Moon, Cloud, CloudRain, Zap: ZapIcon } = lucideReact;

    ${tsxCode}
    
    // Try to find and render the default export
    const componentToRender = typeof VirtualAssistanceBlog !== 'undefined' ? VirtualAssistanceBlog : 
                               typeof BlogPost !== 'undefined' ? BlogPost :
                               typeof Post !== 'undefined' ? Post :
                               typeof Page !== 'undefined' ? Page :
                               typeof Component !== 'undefined' ? Component :
                               null;
    
    if (componentToRender) {
      const root = ReactDOM.createRoot(document.getElementById('preview-root'));
      root.render(React.createElement(componentToRender));
    } else {
      document.getElementById('preview-root').innerHTML = '<div style="padding: 2rem; text-align: center; color: #ef4444;"><h2>Error: Could not find a component to render</h2><p>Make sure your TSX exports a component (e.g., export default function BlogPost() {...})</p></div>';
    }
  </script>
</body>
</html>
    `

    return new NextResponse(previewHtml, {
      headers: {
        'Content-Type': 'text/html',
      },
    })
  } catch (error) {
    console.error('Error generating preview:', error)
    return NextResponse.json(
      {
        error: 'Failed to generate preview',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

