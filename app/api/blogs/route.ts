import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');

    const blogs = await prisma.blog.findMany({
      where: {
        published: true,
      },
      orderBy: {
        date: 'desc',
      },
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

    // Convert comma-separated tags to array
    const blogsWithArrayTags = blogs.map(blog => ({
      ...blog,
      tags: blog.tags ? blog.tags.split(',').map(t => t.trim()) : [],
    }));

    const total = await prisma.blog.count({
      where: { published: true },
    });

    return NextResponse.json({
      blogs: blogsWithArrayTags,
      total,
      limit,
      offset,
    });
  } catch (error) {
    console.error('Blogs API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}