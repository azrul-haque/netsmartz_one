import { NextRequest, NextResponse } from 'next/server';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');

    // Check if we're in build phase or if DATABASE_URL is not set
    if (!process.env.DATABASE_URL || process.env.DATABASE_URL.includes('file:./dev.db')) {
      // Return empty response for build/development without real DB
      return NextResponse.json({
        blogs: [],
        total: 0,
        limit,
        offset,
      });
    }

    // Only import and use Prisma when database is available
    const { prisma } = await import('@/lib/prisma');
    
    const blogs = await prisma.blog.findMany({
      where: { published: true },
      orderBy: { date: 'desc' },
      take: limit,
      skip: offset,
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        image: true,
        author: true,
        date: true,
        tags: true,
      },
    });

    const blogsWithArrayTags = blogs.map(blog => ({
      ...blog,
      tags: blog.tags ? blog.tags.split(',').map(t => t.trim()) : [],
    }));

    const total = await prisma.blog.count({ where: { published: true } });

    return NextResponse.json({ blogs: blogsWithArrayTags, total, limit, offset });
  } catch (error) {
    console.error('Blogs API error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch blogs',
        blogs: [],
        total: 0,
        limit: 10,
        offset: 0 
      },
      { status: 200 } // Return 200 even on error to prevent build failures
    );
  }
}