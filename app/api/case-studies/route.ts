import { NextRequest, NextResponse } from 'next/server';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');
    const industry = searchParams.get('industry');

    // Check if we're in build phase or if DATABASE_URL is not set
    if (!process.env.DATABASE_URL || process.env.DATABASE_URL.includes('file:./dev.db')) {
      return NextResponse.json({
        caseStudies: [],
        total: 0,
        limit,
        offset,
      });
    }

    const { prisma } = await import('@/lib/prisma');
    
    const where: any = { published: true };
    if (industry) where.industry = industry;

    const caseStudies = await prisma.caseStudy.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: limit,
      skip: offset,
      select: {
        id: true,
        title: true,
        slug: true,
        description: true,
        industry: true,
        image: true,
        metrics: true,
      },
    });

    const caseStudiesWithParsedMetrics = caseStudies.map(cs => ({
      ...cs,
      metrics: cs.metrics ? JSON.parse(cs.metrics) : null,
    }));

    const total = await prisma.caseStudy.count({ where });

    return NextResponse.json({ caseStudies: caseStudiesWithParsedMetrics, total, limit, offset });
  } catch (error) {
    console.error('Case studies API error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch case studies',
        caseStudies: [],
        total: 0,
        limit: 10,
        offset: 0 
      },
      { status: 200 }
    );
  }
}