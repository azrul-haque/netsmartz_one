import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

type RouteParams = {
  params: Promise<{ slug: string }>;
};

// GET - Get single success story by slug
export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { slug } = await params;
    
    const story = await prisma.successStory.findUnique({
      where: { slug },
    });

    if (!story) {
      return NextResponse.json(
        { success: false, error: 'Success story not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: story,
    });
  } catch (error) {
    console.error('Error fetching success story:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch success story' },
      { status: 500 }
    );
  }
}

// PUT - Update success story
export async function PUT(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { slug } = await params;
    const body = await request.json();
    const { title, category, image, excerpt, content, published } = body;

    const existingStory = await prisma.successStory.findUnique({
      where: { slug },
    });

    if (!existingStory) {
      return NextResponse.json(
        { success: false, error: 'Success story not found' },
        { status: 404 }
      );
    }

    // Generate new slug if title changed
    let newSlug = slug;
    if (title && title !== existingStory.title) {
      newSlug = title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .substring(0, 100);
      
      // Check if new slug already exists
      const slugExists = await prisma.successStory.findUnique({
        where: { slug: newSlug },
      });
      
      if (slugExists && slugExists.id !== existingStory.id) {
        let counter = 1;
        while (await prisma.successStory.findUnique({ where: { slug: `${newSlug}-${counter}` } })) {
          counter++;
        }
        newSlug = `${newSlug}-${counter}`;
      }
    }

    const updatedStory = await prisma.successStory.update({
      where: { slug },
      data: {
        ...(title && { title, slug: newSlug }),
        ...(category !== undefined && { category }),
        ...(image && { image }),
        ...(excerpt !== undefined && { excerpt }),
        ...(content && { content }),
        ...(published !== undefined && { published }),
      },
    });

    return NextResponse.json({
      success: true,
      data: updatedStory,
    });
  } catch (error) {
    console.error('Error updating success story:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update success story' },
      { status: 500 }
    );
  }
}

// DELETE - Delete success story
export async function DELETE(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { slug } = await params;

    const story = await prisma.successStory.findUnique({
      where: { slug },
    });

    if (!story) {
      return NextResponse.json(
        { success: false, error: 'Success story not found' },
        { status: 404 }
      );
    }

    await prisma.successStory.delete({
      where: { slug },
    });

    return NextResponse.json({
      success: true,
      message: 'Success story deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting success story:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete success story' },
      { status: 500 }
    );
  }
}
