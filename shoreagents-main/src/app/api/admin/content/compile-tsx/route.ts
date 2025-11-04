import { NextRequest, NextResponse } from 'next/server'

// Dynamic imports for Babel packages (server-side only)
let parser: any
let traverse: any
let t: any

// Initialize Babel packages
try {
  parser = require('@babel/parser')
  traverse = require('@babel/traverse').default
  t = require('@babel/types')
} catch (error) {
  console.error('Failed to load Babel packages:', error)
}

export async function POST(request: NextRequest) {
  // Ensure packages are loaded
  if (!parser || !traverse || !t) {
    try {
      parser = require('@babel/parser')
      traverse = require('@babel/traverse').default
      t = require('@babel/types')
    } catch (error) {
      return NextResponse.json(
        { error: 'Babel packages not available', details: error instanceof Error ? error.message : 'Unknown error' },
        { status: 500 }
      )
    }
  }
  try {
    const { tsxCode } = await request.json()

    if (!tsxCode || !tsxCode.trim()) {
      return NextResponse.json(
        { error: 'TSX code is required' },
        { status: 400 }
      )
    }

    // Parse TSX code using Babel parser
    const ast = parser.parse(tsxCode, {
      sourceType: 'module',
      plugins: [
        'jsx',
        'typescript',
        'decorators-legacy',
        'classProperties',
        'objectRestSpread',
        'functionBind',
        'exportDefaultFrom',
        'exportNamespaceFrom',
        'dynamicImport',
        'nullishCoalescingOperator',
        'optionalChaining'
      ]
    })

    // Block-level elements that should create paragraph breaks
    const blockElements = new Set(['div', 'p', 'section', 'article', 'header', 'footer', 'main', 'nav', 'aside', 'blockquote', 'pre', 'ul', 'ol', 'li'])
    
    // Content structure to preserve
    interface ContentBlock {
      type: 'heading' | 'paragraph' | 'list' | 'listItem' | 'code' | 'blockquote'
      level?: number
      content: string
      children?: ContentBlock[]
    }

    const contentBlocks: ContentBlock[] = []
    let currentList: ContentBlock | null = null

    // Helper to extract text from any JSX node
    function extractTextFromNode(node: any): string {
      if (t.isJSXText(node)) {
        return node.value.trim()
      }
      
      if (t.isJSXExpressionContainer(node)) {
        if (t.isStringLiteral(node.expression)) {
          return node.expression.value.trim()
        }
        if (t.isTemplateLiteral(node.expression)) {
          return node.expression.quasis
            .map((quasi: any) => quasi.value.cooked?.trim())
            .filter(Boolean)
            .join(' ')
        }
        if (t.isBinaryExpression(node.expression) && node.expression.operator === '+') {
          // Handle string concatenation
          const left = extractTextFromExpression(node.expression.left)
          const right = extractTextFromExpression(node.expression.right)
          return (left + ' ' + right).trim()
        }
      }
      
      if (t.isJSXElement(node)) {
        return extractTextFromJSXElement(node)
      }
      
      return ''
    }

    function extractTextFromExpression(expr: any): string {
      if (t.isStringLiteral(expr)) {
        return expr.value
      }
      if (t.isTemplateLiteral(expr)) {
        return expr.quasis.map((q: any) => q.value.cooked || '').join('')
      }
      return ''
    }

    // Enhanced helper to extract text from JSX element with context
    function extractTextFromJSXElement(element: t.JSXElement, preserveStructure = false): string {
      const parts: string[] = []
      
      element.children.forEach(child => {
        if (t.isJSXText(child)) {
          const trimmed = child.value.trim()
          if (trimmed) {
            parts.push(trimmed)
          }
        } else if (t.isJSXExpressionContainer(child)) {
          const extracted = extractTextFromNode(child)
          if (extracted) {
            parts.push(extracted)
          }
        } else if (t.isJSXElement(child)) {
          const extracted = extractTextFromJSXElement(child, preserveStructure)
          if (extracted) {
            parts.push(extracted)
          }
        }
      })
      
      // Extract alt text, aria-label, etc.
      element.openingElement.attributes.forEach(attr => {
        if (t.isJSXAttribute(attr)) {
          const name = attr.name.name
          if ((name === 'alt' || name === 'aria-label' || name === 'title') && attr.value) {
            if (t.isStringLiteral(attr.value)) {
              parts.push(attr.value.value)
            }
          }
        }
      })
      
      return preserveStructure ? parts.join('\n') : parts.join(' ')
    }

    // Walk the AST and extract structured content
    traverse(ast, {
      JSXElement(path) {
        const node = path.node
        if (!t.isJSXIdentifier(node.openingElement.name)) return
        
        const tagName = node.openingElement.name.name.toLowerCase()
        const isBlockElement = blockElements.has(tagName)
        
        // Extract headings
        if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tagName)) {
          const level = parseInt(tagName[1])
          const text = extractTextFromJSXElement(node).trim()
          if (text) {
            // Close any open list
            if (currentList) {
              contentBlocks.push(currentList)
              currentList = null
            }
            
            contentBlocks.push({
              type: 'heading',
              level,
              content: text
            })
          }
          return
        }
        
        // Extract lists
        if (tagName === 'ul' || tagName === 'ol') {
          // Close previous list if exists
          if (currentList) {
            contentBlocks.push(currentList)
          }
          
          currentList = {
            type: 'list',
            content: '',
            children: []
          }
          
          // Process list items
          node.children.forEach(child => {
            if (t.isJSXElement(child) && t.isJSXIdentifier(child.openingElement.name)) {
              if (child.openingElement.name.name.toLowerCase() === 'li') {
                const itemText = extractTextFromJSXElement(child).trim()
                if (itemText && currentList) {
                  currentList.children!.push({
                    type: 'listItem',
                    content: itemText
                  })
                }
              }
            }
          })
          
          // Don't add empty lists
          if (currentList && currentList.children!.length === 0) {
            currentList = null
          }
          return
        }
        
        // Extract list items
        if (tagName === 'li') {
          const itemText = extractTextFromJSXElement(node).trim()
          if (itemText) {
            if (!currentList) {
              currentList = {
                type: 'list',
                content: '',
                children: []
              }
            }
            if (!currentList.children) {
              currentList.children = []
            }
            currentList.children.push({
              type: 'listItem',
              content: itemText
            })
          }
          return
        }
        
        // Extract blockquotes
        if (tagName === 'blockquote') {
          const text = extractTextFromJSXElement(node, true).trim()
          if (text) {
            // Close any open list
            if (currentList) {
              contentBlocks.push(currentList)
              currentList = null
            }
            
            contentBlocks.push({
              type: 'blockquote',
              content: text
            })
          }
          return
        }
        
        // Extract code blocks
        if (tagName === 'pre' || tagName === 'code') {
          const text = extractTextFromJSXElement(node, true).trim()
          if (text && tagName === 'pre') {
            // Close any open list
            if (currentList) {
              contentBlocks.push(currentList)
              currentList = null
            }
            
            contentBlocks.push({
              type: 'code',
              content: text
            })
          }
          return
        }
        
        // Extract paragraphs and other block elements
        if (isBlockElement && (tagName === 'p' || tagName === 'div' || tagName === 'section' || tagName === 'article')) {
          const text = extractTextFromJSXElement(node).trim()
          if (text) {
            // Close any open list
            if (currentList) {
              contentBlocks.push(currentList)
              currentList = null
            }
            
            // Only add if it's a meaningful paragraph
            if (text.length > 10) {
              contentBlocks.push({
                type: 'paragraph',
                content: text
              })
            }
          }
          return
        }
      },
      
      // Extract standalone text nodes (for text outside of elements)
      JSXText(path) {
        const text = path.node.value.trim()
        if (text && text.length > 10) {
          // Check if parent is a meaningful container
          const parent = path.parent
          if (t.isJSXElement(parent) && t.isJSXIdentifier(parent.openingElement.name)) {
            const tagName = parent.openingElement.name.name.toLowerCase()
            if (!blockElements.has(tagName) && tagName !== 'span') {
              // Close any open list
              if (currentList) {
                contentBlocks.push(currentList)
                currentList = null
              }
              
              contentBlocks.push({
                type: 'paragraph',
                content: text
              })
            }
          }
        }
      },
      
      // Extract text from JSX expressions
      JSXExpressionContainer(path) {
        const parent = path.parent
        if (t.isJSXElement(parent) && t.isJSXIdentifier(parent.openingElement.name)) {
          const tagName = parent.openingElement.name.name.toLowerCase()
          
          // Skip if inside a list (handled above)
          if (tagName === 'li' || tagName === 'ul' || tagName === 'ol') {
            return
          }
          
          let extracted = ''
          if (t.isStringLiteral(path.node.expression)) {
            extracted = path.node.expression.value.trim()
          } else if (t.isTemplateLiteral(path.node.expression)) {
            extracted = path.node.expression.quasis
              .map(quasi => quasi.value.cooked?.trim())
              .filter(Boolean)
              .join(' ')
          }
          
          if (extracted && extracted.length > 10) {
            // Close any open list
            if (currentList) {
              contentBlocks.push(currentList)
              currentList = null
            }
            
            contentBlocks.push({
              type: 'paragraph',
              content: extracted
            })
          }
        }
      }
    })

    // Close any remaining open list
    if (currentList) {
      contentBlocks.push(currentList)
    }

    // Convert content blocks to formatted text
    let extractedText = ''
    
    contentBlocks.forEach((block) => {
      switch (block.type) {
        case 'heading':
          extractedText += `${'#'.repeat(block.level!)} ${block.content}\n\n`
          break
          
        case 'paragraph':
          extractedText += `${block.content}\n\n`
          break
          
        case 'list':
          if (block.children && block.children.length > 0) {
            block.children.forEach((item) => {
              if (item.type === 'listItem') {
                extractedText += `- ${item.content}\n`
              }
            })
            extractedText += '\n'
          }
          break
          
        case 'blockquote':
          extractedText += `> ${block.content.split('\n').join('\n> ')}\n\n`
          break
          
        case 'code':
          extractedText += `\`\`\`\n${block.content}\n\`\`\`\n\n`
          break
          
        default:
          if (block.content) {
            extractedText += `${block.content}\n\n`
          }
      }
    })

    // Fallback to regex extraction if Babel parsing fails to extract content
    if (!extractedText.trim() && contentBlocks.length === 0) {
      // Use improved regex as fallback
      extractedText = tsxCode
        .replace(/import\s+.*?from\s+['"].*?['"];?/g, '')
        .replace(/export\s+(default\s+)?(function|const|class)\s+/g, '')
        .replace(/(const|let|var|function)\s+\w+\s*[=:]\s*/g, '')
        .replace(/\/\*[\s\S]*?\*\//g, '\n')
        .replace(/\/\/.*/g, '')
        .replace(/<\/?(h1|h2|h3|h4|h5|h6|p|div|section|article|header|footer|main|nav|aside)[^>]*>/gi, '\n\n')
        .replace(/<\/[^>]+>/g, '\n')
        .replace(/<[^>]+>/g, ' ')
        .replace(/[{}]/g, ' ')
        .replace(/\n\s*\n\s*\n+/g, '\n\n')
        .replace(/[ \t]+/g, ' ')
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .join('\n\n')
        .trim()
    }

    if (!extractedText.trim()) {
      return NextResponse.json(
        { error: 'Could not extract content from TSX code' },
        { status: 400 }
      )
    }

    return NextResponse.json({
      success: true,
      content: extractedText.trim()
    })
  } catch (error) {
    console.error('Error compiling TSX:', error)
    
    // Fallback to regex extraction on parse error
    try {
      const { tsxCode } = await request.json()
      let extractedText = tsxCode
        .replace(/import\s+.*?from\s+['"].*?['"];?/g, '')
        .replace(/export\s+(default\s+)?(function|const|class)\s+/g, '')
        .replace(/(const|let|var|function)\s+\w+\s*[=:]\s*/g, '')
        .replace(/\/\*[\s\S]*?\*\//g, '\n')
        .replace(/\/\/.*/g, '')
        .replace(/<\/?(h1|h2|h3|h4|h5|h6|p|div|section|article|header|footer|main|nav|aside)[^>]*>/gi, '\n\n')
        .replace(/<\/[^>]+>/g, '\n')
        .replace(/<[^>]+>/g, ' ')
        .replace(/[{}]/g, ' ')
        .replace(/\n\s*\n\s*\n+/g, '\n\n')
        .replace(/[ \t]+/g, ' ')
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .join('\n\n')
        .trim()

      if (extractedText) {
        return NextResponse.json({
          success: true,
          content: extractedText,
          method: 'fallback'
        })
      }
    } catch (fallbackError) {
      // Ignore fallback errors
    }

    return NextResponse.json(
      { 
        error: 'Failed to compile TSX code',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

