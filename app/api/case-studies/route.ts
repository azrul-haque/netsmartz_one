import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');
    const industry = searchParams.get('industry');

    const where: any = {
      published: true,
    };

    if (industry) {
      where.industry = industry;
    }

    const caseStudies = await prisma.caseStudy.findMany({
      where,
      orderBy: {
        createdAt: 'desc',
      },
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

    // Parse metrics JSON strings
    const caseStudiesWithParsedMetrics = caseStudies.map(cs => ({
      ...cs,
      metrics: cs.metrics ? JSON.parse(cs.metrics) : null,
    }));

    const total = await prisma.caseStudy.count({ where });

    return NextResponse.json({
      caseStudies: caseStudiesWithParsedMetrics,
      total,
      limit,
      offset,
    });
  } catch (error) {
    console.error('Case studies API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch case studies' },
      { status: 500 }
    );
  }
}