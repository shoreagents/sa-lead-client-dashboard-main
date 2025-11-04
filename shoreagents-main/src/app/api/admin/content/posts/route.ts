import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// POST /api/admin/content/posts - Create a new post
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      postType,
      title,
      slug,
      description,
      content,
      category,
      tags,
      customUrl,
      urlPattern,
      status,
      authorId,
      featuredImage,
      thumbnail,
      seoTitle,
      seoDescription,
      seoKeywords,
      canonicalUrl,
      ogImage,
      noIndex
    } = body

    // Validation
    if (!title || !slug) {
      return NextResponse.json(
        { error: 'Title and slug are required' },
        { status: 400 }
      )
    }

    // Check if slug already exists
    const existingSlug = await prisma.contentPost.findUnique({
      where: { slug }
    })

    if (existingSlug) {
      return NextResponse.json(
        { error: 'A post with this slug already exists. Please use a different slug.' },
        { status: 400 }
      )
    }

    // Check if custom URL already exists (if provided)
    if (customUrl) {
      const existingCustomUrl = await prisma.contentPost.findUnique({
        where: { custom_url: customUrl }
      })

      if (existingCustomUrl) {
        return NextResponse.json(
          { error: 'A post with this custom URL already exists. Please use a different URL.' },
          { status: 400 }
        )
      }
    }

    // Prepare data
    const postData: any = {
      post_type: postType || 'blog',
      title,
      slug,
      description: description || null,
      content,
      category: category || null,
      tags: tags && tags.length > 0 ? tags : [],
      custom_url: customUrl || null,
      url_pattern: urlPattern || null,
      status: status || 'draft',
      author_id: authorId || null,
      featured_image: featuredImage || null,
      thumbnail: thumbnail || null,
      seo_title: seoTitle || null,
      seo_description: seoDescription || null,
      seo_keywords: seoKeywords && seoKeywords.length > 0 ? seoKeywords : [],
      canonical_url: canonicalUrl || null,
      og_image: ogImage || null,
      no_index: noIndex || false,
      published_at: status === 'published' ? new Date() : null,
      updated_at: new Date(),
      created_at: new Date()
    }

    // Create the post
    const post = await prisma.contentPost.create({
      data: postData
    })

    console.log('✅ Post created successfully:', post.id)

    return NextResponse.json({
      success: true,
      data: post,
      message: 'Post created successfully'
    })

  } catch (error: any) {
    console.error('❌ Error creating post:', error)
    
    // Handle Prisma unique constraint errors
    if (error.code === 'P2002') {
      const field = error.meta?.target?.[0] || 'field'
      return NextResponse.json(
        { error: `A post with this ${field} already exists` },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { 
        error: 'Failed to create post',
        message: error.message 
      },
      { status: 500 }
    )
  }
}

// GET /api/admin/content/posts - Get all posts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const postType = searchParams.get('postType')
    const category = searchParams.get('category')
    const limit = parseInt(searchParams.get('limit') || '50')
    const offset = parseInt(searchParams.get('offset') || '0')

    // Build where clause
    const where: any = {}
    
    if (status) {
      where.status = status
    }
    
    if (postType) {
      where.post_type = postType
    }
    
    if (category) {
      where.category = category
    }

    // Fetch posts
    const [posts, total] = await Promise.all([
      prisma.contentPost.findMany({
        where,
        orderBy: { created_at: 'desc' },
        take: limit,
        skip: offset
      }),
      prisma.contentPost.count({ where })
    ])

    return NextResponse.json({
      success: true,
      data: posts,
      total,
      limit,
      offset
    })

  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}

