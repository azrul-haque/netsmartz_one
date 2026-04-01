import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendContactFormEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, service } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Save to database
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

    // Send email if SMTP credentials are configured
    if (process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
      try {
        await sendContactFormEmail({
          name,
          email,
          phone,
          company,
          message,
          service,
        });
      } catch (emailError) {
        console.error('Email sending failed, but form saved:', emailError);
        // Don't fail the request if email fails
      }
    } else {
      console.warn('SMTP credentials not configured. Email not sent.');
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully',
        id: submission.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}