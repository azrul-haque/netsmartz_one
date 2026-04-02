import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Helper function to generate unique slug
async function generateUniqueSlug(title: string): Promise<string> {
  let slug = title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 100);
  
  let counter = 1;
  let uniqueSlug = slug;
  
  while (await prisma.successStory.findUnique({ where: { slug: uniqueSlug } })) {
    uniqueSlug = `${slug}-${counter}`;
    counter++;
  }
  
  return uniqueSlug;
}

// GET - List all success stories (with optional pagination)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '50');
    const published = searchParams.get('published');
    
    const where = published !== null 
      ? { published: published === 'true' }
      : {};

    const stories = await prisma.successStory.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: limit,
    });

    return NextResponse.json({
      success: true,
      data: stories,
    });
  } catch (error) {
    console.error('Error fetching success stories:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch success stories' },
      { status: 500 }
    );
  }
}

// POST - Create new success story
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, category, image, excerpt, content, published } = body;

    if (!title || !image || !content) {
      return NextResponse.json(
        { success: false, error: 'Title, image, and content are required' },
        { status: 400 }
      );
    }

    const slug = await generateUniqueSlug(title);

    const story = await prisma.successStory.create({
      data: {
        title,
        slug,
        category: category || null,
        image,
        excerpt: excerpt || null,
        content,
        published: published !== undefined ? published : true,
      },
    });

    return NextResponse.json({
      success: true,
      data: story,
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating success story:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create success story' },
      { status: 500 }
    );
  }
}
