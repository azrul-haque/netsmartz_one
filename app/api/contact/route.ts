import { NextRequest, NextResponse } from 'next/server';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, service } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Check if database is available
    if (!process.env.DATABASE_URL || process.env.DATABASE_URL.includes('file:./dev.db')) {
      console.warn('Database not configured, skipping form submission');
      return NextResponse.json({
        success: true,
        message: 'Form received (database not configured)',
      });
    }

    const { prisma } = await import('@/lib/prisma');
    const { sendContactFormEmail } = await import('@/lib/email');
    
    const submission = await prisma.formSubmission.create({
      data: {
        name,
        email,
        phone: phone || null,
        company: company || null,
        message,
        service: service || null,
      },
    });

    if (process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
      try {
        await sendContactFormEmail({ name, email, phone, company, message, service });
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
      id: submission.id,
    }, { status: 201 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}