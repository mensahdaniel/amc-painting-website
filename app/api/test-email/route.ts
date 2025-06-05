import { NextResponse } from 'next/server';
import { sendEmail, verifyConnection } from '@/lib/email/smtp';

export async function GET() {
  try {
    // First verify the SMTP connection
    const isConnected = await verifyConnection();

    if (!isConnected) {
      return NextResponse.json(
        { error: 'SMTP connection failed' },
        { status: 500 }
      );
    }

    // Send a test email
    const testResult = await sendEmail({
      to: process.env.EMAIL_TO || 'test@example.com',
      subject: 'SMTP Test Email - Survey 360 Research',
      html: `
        <h2>SMTP Test Successful!</h2>
        <p>This is a test email to verify that the SMTP configuration is working correctly.</p>
        <p>Sent at: ${new Date().toISOString()}</p>
        <hr>
        <p><em>Survey 360 Research Solutions</em></p>
      `,
      text: `
        SMTP Test Successful!

        This is a test email to verify that the SMTP configuration is working correctly.
        Sent at: ${new Date().toISOString()}

        Survey 360 Research Solutions
      `,
    });

    if (testResult.success) {
      return NextResponse.json({
        message: 'SMTP test successful',
        messageId: testResult.messageId,
        timestamp: new Date().toISOString(),
      });
    } else {
      return NextResponse.json(
        { error: 'Failed to send test email', details: testResult.error },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Error in test-email endpoint:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
