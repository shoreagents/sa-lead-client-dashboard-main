# CMS Database Schema Documentation

## Overview

All three content creation methods (AI Generation, Custom CMS, and Paste TSX) use the same database schema. The `ContentPost` model stores all blog posts, articles, and pillar pages regardless of how they were created.

## Database Model: ContentPost

### Table Name
`content_posts`

### Schema Location
`prisma/schema.prisma`

---

## Complete Schema Definition

```prisma
model ContentPost {
  id               String    @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  post_type        String    @map("post_type") @db.VarChar(50) // 'blog' | 'article' | 'pillar'
  title            String    @db.VarChar(500)
  slug             String    @unique @db.VarChar(500)
  description      String?   @db.Text
  content          String    @db.Text
  category         String?   @db.VarChar(200)
  tags             Json?     @default("[]") @db.Json
  custom_url       String?   @unique @map("custom_url") @db.VarChar(500)
  url_pattern      String?   @map("url_pattern") @db.VarChar(200)
  status           String    @default("draft") @db.VarChar(50) // 'draft' | 'published'
  author_id        String?   @map("author_id") @db.VarChar(255)
  featured_image   String?   @map("featured_image") @db.VarChar(1000)
  thumbnail        String?   @db.VarChar(1000)
  
  // SEO Fields
  seo_title        String?   @map("seo_title") @db.VarChar(500)
  seo_description  String?   @map("seo_description") @db.VarChar(1000)
  seo_keywords     Json?     @default("[]") @map("seo_keywords") @db.Json
  canonical_url    String?   @map("canonical_url") @db.VarChar(500)
  og_image         String?   @map("og_image") @db.VarChar(1000)
  structured_data  Json?     @map("structured_data") @db.Json
  no_index         Boolean   @default(false) @map("no_index")
  
  // Metadata
  published_at     DateTime? @map("published_at") @db.Timestamptz(6)
  created_at       DateTime  @default(now()) @map("created_at") @db.Timestamptz(6)
  updated_at       DateTime  @default(now()) @map("updated_at") @db.Timestamptz(6)
  last_modified   DateTime? @map("last_modified") @db.Timestamptz(6)

  @@index([slug], map: "idx_content_posts_slug")
  @@index([custom_url], map: "idx_content_posts_custom_url")
  @@index([post_type], map: "idx_content_posts_post_type")
  @@index([status], map: "idx_content_posts_status")
  @@index([category], map: "idx_content_posts_category")
  @@index([published_at], map: "idx_content_posts_published_at")
  @@index([created_at], map: "idx_content_posts_created_at")
  @@index([author_id], map: "idx_content_posts_author_id")
  @@map("content_posts")
  @@schema("public")
}
```

---

## Field Descriptions

### Core Content Fields

| Field | Type | Required | Description |
|------|------|----------|-------------|
| `id` | UUID | Yes | Primary key, auto-generated |
| `post_type` | String (50) | Yes | Type of content: `'blog'`, `'article'`, or `'pillar'` |
| `title` | String (500) | Yes | Main title of the post |
| `slug` | String (500) | Yes | URL-friendly identifier (unique) |
| `description` | Text | No | Short description or excerpt |
| `content` | Text | Yes | Main content body |
| `category` | String (200) | No | Category classification |
| `tags` | JSON Array | No | Array of tag strings (default: `[]`) |

### URL & Routing Fields

| Field | Type | Required | Description |
|------|------|----------|-------------|
| `custom_url` | String (500) | No | Custom URL path (e.g., `/real-estate-outsourcing`) - **Unique** |
| `url_pattern` | String (200) | No | URL pattern template (e.g., `/blog/[slug]`) |

### Status & Metadata Fields

| Field | Type | Required | Description |
|------|------|----------|-------------|
| `status` | String (50) | Yes | Post status: `'draft'` or `'published'` (default: `'draft'`) |
| `author_id` | String (255) | No | ID of the admin/user who created the post |
| `featured_image` | String (1000) | No | URL to featured image |
| `thumbnail` | String (1000) | No | URL to thumbnail image |
| `published_at` | Timestamp | No | When the post was published |
| `created_at` | Timestamp | Yes | When the post was created (auto-set) |
| `updated_at` | Timestamp | Yes | When the post was last updated (auto-set) |
| `last_modified` | Timestamp | No | Last modification timestamp |

### SEO Fields

| Field | Type | Required | Description |
|------|------|----------|-------------|
| `seo_title` | String (500) | No | Custom SEO title (overrides post title) |
| `seo_description` | String (1000) | No | Meta description for search engines |
| `seo_keywords` | JSON Array | No | SEO keywords array (default: `[]`) |
| `canonical_url` | String (500) | No | Canonical URL for duplicate content |
| `og_image` | String (1000) | No | Open Graph image URL for social sharing |
| `structured_data` | JSON | No | JSON-LD structured data schema |
| `no_index` | Boolean | No | Prevent search engines from indexing (default: `false`) |

---

## Indexes

The schema includes the following indexes for optimized queries:

1. **`idx_content_posts_slug`** - Fast lookup by slug
2. **`idx_content_posts_custom_url`** - Fast lookup by custom URL
3. **`idx_content_posts_post_type`** - Filter by post type
4. **`idx_content_posts_status`** - Filter by status (draft/published)
5. **`idx_content_posts_category`** - Filter by category
6. **`idx_content_posts_published_at`** - Sort by publication date
7. **`idx_content_posts_created_at`** - Sort by creation date
8. **`idx_content_posts_author_id`** - Filter by author

---

## Unique Constraints

1. **`slug`** - Each slug must be unique across all posts
2. **`custom_url`** - Each custom URL must be unique (if provided)

---

## How Each Creation Method Uses the Schema

### 1. AI Generation Method
- **Fields populated**: `title`, `slug`, `content` (from AI), `description`, `status`, `author_id`
- **Content source**: Generated by AI
- **Content format**: Plain text or markdown

### 2. Custom CMS Method
- **Fields populated**: All fields available
- **Content source**: Manual input via form
- **Content format**: Plain text (rich text editor coming soon)

### 3. Paste TSX Method
- **Fields populated**: `title`, `slug`, `content` (compiled from TSX), `description`, `status`, `author_id`
- **Content source**: Extracted from pasted TSX/JSX code
- **Content format**: Text extracted from TSX components

---

## Example Data Structure

### JSON Representation

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "post_type": "blog",
  "title": "How to Scale Your Business with Virtual Assistants",
  "slug": "how-to-scale-business-virtual-assistants",
  "description": "Learn how virtual assistants can help scale your business operations.",
  "content": "Full blog post content here...",
  "category": "Business Growth",
  "tags": ["virtual-assistants", "business", "scaling", "outsourcing"],
  "custom_url": "/blog/how-to-scale-business-virtual-assistants",
  "url_pattern": "/blog/[slug]",
  "status": "published",
  "author_id": "admin-123",
  "featured_image": "https://example.com/image.jpg",
  "thumbnail": "https://example.com/thumb.jpg",
  "seo_title": "Scale Business with Virtual Assistants | Guide 2024",
  "seo_description": "Discover how virtual assistants can transform your business. Complete guide with tips and strategies.",
  "seo_keywords": ["virtual assistants", "business scaling", "outsourcing", "remote team"],
  "canonical_url": null,
  "og_image": "https://example.com/og-image.jpg",
  "structured_data": {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "How to Scale Your Business with Virtual Assistants"
  },
  "no_index": false,
  "published_at": "2024-01-15T10:00:00Z",
  "created_at": "2024-01-15T09:00:00Z",
  "updated_at": "2024-01-15T10:00:00Z",
  "last_modified": "2024-01-15T10:00:00Z"
}
```

---

## Database Migration

To create this table in your database, run:

```bash
npx prisma migrate dev --name add_content_posts
```

Then generate the Prisma client:

```bash
npx prisma generate
```

---

## API Endpoints

### Create Post
- **Method**: `POST`
- **Endpoint**: `/api/admin/content/posts`
- **Body**: All fields from the schema (as JSON)

### Get Posts
- **Method**: `GET`
- **Endpoint**: `/api/admin/content/posts`
- **Query Parameters**:
  - `status` - Filter by status (draft/published)
  - `postType` - Filter by post type (blog/article/pillar)
  - `category` - Filter by category
  - `limit` - Number of results (default: 50)
  - `offset` - Pagination offset (default: 0)

---

## Notes

1. **All three methods use the same schema** - The creation method doesn't affect the database structure
2. **Content is stored as text** - Rich formatting is preserved in the `content` field
3. **URL flexibility** - Use either `custom_url` (full path) or `url_pattern` + `slug` combination
4. **SEO optimization** - All SEO fields are optional but recommended for published posts
5. **JSON fields** - `tags`, `seo_keywords`, and `structured_data` are stored as JSON for flexibility

---

## Future Enhancements

Potential additions to the schema:
- `revisions` - Version history tracking
- `related_posts` - JSON array of related post IDs
- `reading_time` - Calculated reading time in minutes
- `view_count` - Analytics tracking
- `featured` - Boolean flag for featured posts
- `publish_schedule` - Scheduled publication datetime

