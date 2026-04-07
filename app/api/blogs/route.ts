import { NextRequest, NextResponse } from 'next/server';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// DATABASE COMMENTED OUT FOR DEPLOYMENT
// Will be enabled after database setup

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');

    // TEMPORARY: Return empty data (database not connected yet)
    return NextResponse.json({
      blogs: [],
      total: 0,
      limit,
      offset,
      message: 'Database not connected yet'
    });

    /* DATABASE CODE - UNCOMMENT WHEN READY
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
    */
  } catch (error) {
    console.error('Blogs API error:', error);
    return NextResponse.json(
      { 
        error: 'API not ready',
        blogs: [],
        total: 0,
        limit: 10,
        offset: 0 
      },
      { status: 200 }
    );
  }
}