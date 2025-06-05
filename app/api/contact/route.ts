import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, TO_EMAIL } from '@/lib/email/smtp';
import { 
  getContactEmailHTML, 
  getAutoReplyEmailHTML, 
  getContactEmailText, 
  getAutoReplyEmailText 
} from '@/lib/email/templates';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, phone, organization, serviceInterest } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long' },
        { status: 400 }
      );
    }

    // Send notification email to Survey 360 team
    const notificationResult = await sendEmail({
      to: TO_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      html: getContactEmailHTML({
        name,
        email,
        subject,
        message,
        phone,
        organization,
        serviceInterest,
      }),
      text: getContactEmailText({
        name,
        email,
        subject,
        message,
        phone,
        organization,
        serviceInterest,
      }),
    });

    // Send auto-reply email to the user
    const autoReplyResult = await sendEmail({
      to: email,
      subject: 'Thank you for contacting Survey 360 Research Solutions',
      html: getAutoReplyEmailHTML({ name }),
      text: getAutoReplyEmailText({ name }),
    });

    // Check if notification email was sent successfully
    if (!notificationResult.success) {
      console.error('Error sending notification email:', notificationResult.error);
      return NextResponse.json(
        { error: 'Failed to send notification email. Please try again or contact us directly.' },
        { status: 500 }
      );
    }

    // Auto-reply failure shouldn't fail the whole request
    if (!autoReplyResult.success) {
      console.error('Error sending auto-reply email:', autoReplyResult.error);
    }

    return NextResponse.json({
      message: 'Email sent successfully',
      notificationId: notificationResult.messageId,
      autoReplyId: autoReplyResult.messageId,
      autoReplyStatus: autoReplyResult.success ? 'sent' : 'failed',
    });

  } catch (error) {
    console.error('Error in contact API route:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}