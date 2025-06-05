import nodemailer from 'nodemailer';

// Create reusable transporter object using the default SMTP transport
export const createTransporter = () => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  return transporter;
};

// Verify SMTP connection
export const verifyConnection = async () => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log('SMTP server is ready to take our messages');
    return true;
  } catch (error) {
    console.error('SMTP verification failed:', error);
    return false;
  }
};

// Email configuration
export const FROM_EMAIL = process.env.EMAIL_FROM || 'Survey360 Research <noreply@example.com>';
export const TO_EMAIL = process.env.EMAIL_TO || 'info@survey360.org';

// Send email function
export const sendEmail = async (options: {
  to: string;
  subject: string;
  html: string;
  text?: string;
}) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: FROM_EMAIL,
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
    };

    const result = await transporter.sendMail(mailOptions);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};