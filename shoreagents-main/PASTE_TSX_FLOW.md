# Paste TSX Code Flow Documentation

## Overview

The "Paste TSX" feature allows admins to paste TSX/JSX component code and automatically extract readable text content to create a blog post. This is useful for converting React components into blog content.

---

## Complete Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│ 1. USER SELECTS "PASTE TSX" FROM MODAL                      │
│    - Clicks "Paste TSX" card in creation method modal       │
│    - Modal closes, Paste TSX interface loads                │
└─────────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────────┐
│ 2. USER PASTES TSX CODE                                      │
│    - Textarea with monospace font                            │
│    - 20 rows height for code input                           │
│    - State: tsxCode (string)                                 │
└─────────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────────┐
│ 3. USER CLICKS "COMPILE TSX" BUTTON                          │
│    - Button disabled if tsxCode is empty                     │
│    - Triggers handleCompile() function                       │
└─────────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────────┐
│ 4. CONTENT EXTRACTION PROCESS                                │
│    handleCompile() function:                                  │
│                                                               │
│    a. Validation:                                             │
│       - Checks if tsxCode is not empty                       │
│       - Shows error toast if empty                           │
│                                                               │
│    b. Text Extraction (Regex-based):                        │
│       1. Remove JSX tags: <[^>]+> → ' '                     │
│       2. Remove imports: import ... from ... → ''            │
│       3. Remove exports: export ... → ''                    │
│       4. Remove declarations: const/let/var/function → ''  │
│       5. Remove JSX syntax: { } → ' '                       │
│       6. Clean up spaces: multiple spaces → single space     │
│       7. Trim whitespace                                     │
│                                                               │
│    c. Store Results:                                          │
│       - setCompiledContent(extractedText)                    │
│       - setContent(extractedText) ← For saving              │
│       - Shows success toast                                   │
└─────────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────────┐
│ 5. PREVIEW DISPLAY                                            │
│    - Right side card shows extracted content                 │
│    - Gray background, formatted text                        │
│    - Shows "Compile TSX code..." if empty                    │
└─────────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────────┐
│ 6. USER FILLS POST METADATA                                  │
│    Required Fields:                                           │
│    - Title (string)                                          │
│    - Post URL (string) - e.g., /blog/my-post                │
│    - Slug (auto-extracted from URL, editable)               │
│                                                               │
│    Optional Fields:                                           │
│    - Description (textarea)                                  │
│    - Status (draft/published)                                │
└─────────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────────┐
│ 7. USER CLICKS "SAVE AS DRAFT" OR "PUBLISH"                  │
│    - Button disabled if:                                      │
│      • loading = true                                        │
│      • title is empty                                        │
│      • slug is empty                                         │
│      • compiledContent is empty                              │
│    - Triggers handleSubmit() function                       │
└─────────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────────┐
│ 8. API REQUEST TO SAVE POST                                   │
│    POST /api/admin/content/posts                             │
│                                                               │
│    Request Body:                                             │
│    {                                                         │
│      postType: 'blog' | 'article' | 'pillar',              │
│      title: string,                                          │
│      slug: string,                                           │
│      description: string | null,                            │
│      content: string, ← compiledContent from TSX             │
│      category: string | null,                                │
│      tags: string[],                                         │
│      customUrl: string | null,                               │
│      urlPattern: string | null,                              │
│      status: 'draft' | 'published',                         │
│      authorId: string,                                       │
│      seoTitle: string | null,                               │
│      seoDescription: string | null,                         │
│      seoKeywords: string[] | null,                          │
│      canonicalUrl: string | null,                           │
│      ogImage: string | null,                                │
│      noIndex: boolean                                       │
│    }                                                         │
└─────────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────────┐
│ 9. API PROCESSES REQUEST                                      │
│    - Validates required fields (title, slug)                 │
│    - Checks for duplicate slugs                              │
│    - Checks for duplicate custom URLs                       │
│    - Creates ContentPost record in database                  │
│    - Returns success response with post data                 │
└─────────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────────┐
│ 10. SUCCESS HANDLING                                          │
│     - Shows success toast: "Post created successfully!"       │
│     - Redirects to /admin-dashboard                          │
│     - Post is now saved in database                          │
└─────────────────────────────────────────────────────────────┘
```

---

## Step-by-Step Code Flow

### Step 1: State Management

```typescript
// Initial state for Paste TSX
const [tsxCode, setTsxCode] = useState('')           // Raw TSX code input
const [compiledContent, setCompiledContent] = useState('')  // Extracted text
const [content, setContent] = useState('')           // Final content for saving
```

### Step 2: User Input

```typescript
<Textarea
  placeholder="Paste your TSX code here..."
  value={tsxCode}
  onChange={(e) => setTsxCode(e.target.value)}
  rows={20}
  className="font-mono text-sm"
/>
```

### Step 3: Compilation Process

```typescript
const handleCompile = async () => {
  // Validation
  if (!tsxCode.trim()) {
    toast.error('Please paste your TSX code first')
    return
  }

  try {
    // Extract text content from TSX
    let extractedText = tsxCode
      .replace(/<[^>]+>/g, ' ')                    // Remove JSX tags
      .replace(/import\s+.*?from\s+['"].*?['"];?/g, '')  // Remove imports
      .replace(/export\s+(default\s+)?(function|const|class)\s+/g, '')  // Remove exports
      .replace(/(const|let|var|function)\s+\w+\s*[=:]\s*/g, '')  // Remove declarations
      .replace(/[{}]/g, ' ')                      // Remove JSX syntax
      .replace(/\s+/g, ' ')                       // Clean up spaces
      .trim()                                      // Trim whitespace

    // Store results
    setCompiledContent(extractedText)
    setContent(extractedText)  // ← This is what gets saved
    toast.success('TSX code compiled! Content extracted and ready to save.')
  } catch (error) {
    toast.error('Failed to compile TSX code. Please check the syntax.')
  }
}
```

### Step 4: Preview Display

```typescript
<div className="min-h-[400px] p-4 bg-gray-50 rounded-lg border">
  {compiledContent ? (
    <div className="whitespace-pre-wrap text-sm text-gray-700">
      {compiledContent}
    </div>
  ) : (
    <p className="text-gray-400 text-center text-sm">
      Compile TSX code to see extracted content here...
    </p>
  )}
</div>
```

### Step 5: Save to Database

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setLoading(true)

  const response = await fetch('/api/admin/content/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      // ... other fields
      content,  // ← Uses compiledContent from TSX
      // ... other fields
    })
  })

  // Handle response...
}
```

---

## Example: TSX Input → Extracted Output

### Input TSX Code:
```tsx
import React from 'react'
import { Button } from '@/components/ui/button'

export default function RealEstatePost() {
  const title = "Real Estate Outsourcing Guide"
  
  return (
    <div className="container">
      <h1>{title}</h1>
      <p>Learn how real estate outsourcing can transform your business.</p>
      <p>Our comprehensive guide covers everything you need to know.</p>
      <Button>Get Started</Button>
    </div>
  )
}
```

### Extracted Output:
```
Real Estate Outsourcing Guide Learn how real estate outsourcing can transform your business. Our comprehensive guide covers everything you need to know. Get Started
```

---

## Key Features

### 1. **Text Extraction Algorithm**
- Uses regex patterns to strip code structure
- Preserves text content from JSX elements
- Removes imports, exports, and declarations
- Cleans up formatting and whitespace

### 2. **Validation**
- Ensures TSX code is not empty before compilation
- Validates that extracted content exists
- Shows user-friendly error messages

### 3. **Preview**
- Real-time preview of extracted content
- Split-screen layout (code left, preview right)
- Shows placeholder when no content

### 4. **Integration**
- Extracted content automatically populates `content` field
- Same save flow as Custom CMS method
- Uses same database schema

---

## Limitations & Future Enhancements

### Current Limitations:
1. **Simple text extraction** - Uses regex, not a full TSX parser
2. **No component execution** - Can't actually run the TSX code
3. **Text only** - Loses formatting, structure, and styling
4. **No validation** - Doesn't check if TSX syntax is valid

### Future Enhancements:
1. **Full TSX parser** - Use a proper parser like `@babel/parser` or `typescript`
2. **Component rendering** - Actually render React components
3. **Structure preservation** - Maintain headings, lists, etc.
4. **Syntax validation** - Validate TSX before compilation
5. **Rich content extraction** - Extract images, links, and formatting

---

## Data Flow Summary

```
User Input (TSX Code)
    ↓
handleCompile()
    ↓
Regex Extraction
    ↓
extractedText
    ↓
setCompiledContent() + setContent()
    ↓
Preview Display
    ↓
User fills metadata
    ↓
handleSubmit()
    ↓
API POST /api/admin/content/posts
    ↓
Database (ContentPost table)
    ↓
Saved Post
```

---

## Error Handling

1. **Empty TSX Code**
   - Shows: "Please paste your TSX code first"
   - Button disabled until code is entered

2. **No Extractable Content**
   - Shows: "Could not extract content from TSX. Please check your code."
   - Occurs if extraction results in empty string

3. **Compilation Error**
   - Shows: "Failed to compile TSX code. Please check the syntax."
   - Logs error to console for debugging

4. **Save Validation**
   - Button disabled if: `!title || !slug || !compiledContent`
   - User must compile TSX before saving

---

## UI Components Used

- `Card` - Container for sections
- `Textarea` - TSX code input (monospace font)
- `Button` - Compile and Save actions
- `Input` - Title, URL, Slug fields
- `Select` - Status dropdown
- `toast` - Success/error notifications

---

## State Variables

| Variable | Type | Purpose |
|----------|------|---------|
| `tsxCode` | `string` | Raw TSX code from user input |
| `compiledContent` | `string` | Extracted text for preview |
| `content` | `string` | Final content saved to database |
| `title` | `string` | Post title |
| `slug` | `string` | URL-friendly identifier |
| `customUrl` | `string` | Custom URL path |
| `description` | `string` | Post description |
| `status` | `'draft' \| 'published'` | Publication status |
| `loading` | `boolean` | Loading state during save |

---

## API Endpoint Details

**Endpoint**: `POST /api/admin/content/posts`

**Request Body**:
- `content`: String - The extracted/compiled content from TSX
- All other fields same as Custom CMS method

**Response**:
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "title": "...",
    "content": "...",  // ← Extracted TSX content
    ...
  },
  "message": "Post created successfully"
}
```

---

This flow allows admins to quickly convert React/TSX components into blog posts by extracting readable text content from the code structure.


