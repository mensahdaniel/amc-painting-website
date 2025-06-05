interface ContactEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  organization?: string;
  serviceInterest?: string;
}

export const getContactEmailHTML = ({
  name,
  email,
  subject,
  message,
  phone,
  organization,
  serviceInterest,
}: ContactEmailProps): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <div style="background-color: #f97316; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">
            New Contact Form Submission
          </h1>
        </div>
        
        <div style="padding: 30px; background-color: #ffffff;">
          <h2 style="color: #1f2937; margin-bottom: 20px;">Contact Details</h2>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #374151;">Name:</strong>
            <span style="margin-left: 10px; color: #6b7280;">${name}</span>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #374151;">Email:</strong>
            <span style="margin-left: 10px; color: #6b7280;">${email}</span>
          </div>
          
          ${phone ? `
          <div style="margin-bottom: 15px;">
            <strong style="color: #374151;">Phone:</strong>
            <span style="margin-left: 10px; color: #6b7280;">${phone}</span>
          </div>
          ` : ''}
          
          ${organization ? `
          <div style="margin-bottom: 15px;">
            <strong style="color: #374151;">Organization:</strong>
            <span style="margin-left: 10px; color: #6b7280;">${organization}</span>
          </div>
          ` : ''}
          
          ${serviceInterest ? `
          <div style="margin-bottom: 15px;">
            <strong style="color: #374151;">Service Interest:</strong>
            <span style="margin-left: 10px; color: #6b7280;">${serviceInterest}</span>
          </div>
          ` : ''}
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #374151;">Subject:</strong>
            <span style="margin-left: 10px; color: #6b7280;">${subject}</span>
          </div>
          
          <div style="margin-top: 25px;">
            <strong style="color: #374151;">Message:</strong>
            <div style="margin-top: 10px; padding: 15px; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; color: #374151; line-height: 1.6;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
        
        <div style="background-color: #f3f4f6; padding: 20px; text-align: center;">
          <p style="margin: 0; color: #6b7280; font-size: 14px;">
            This email was sent from the Survey 360 Research Solutions contact form.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};

interface AutoReplyEmailProps {
  name: string;
}

export const getAutoReplyEmailHTML = ({ name }: AutoReplyEmailProps): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You for Contacting Us</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <div style="background-color: #f97316; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">
            Thank You for Contacting Us
          </h1>
        </div>
        
        <div style="padding: 30px; background-color: #ffffff;">
          <h2 style="color: #1f2937; margin-bottom: 20px;">
            Dear ${name},
          </h2>
          
          <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">
            Thank you for reaching out to Survey 360 Research Solutions. We have received your message and appreciate your interest in our services.
          </p>
          
          <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">
            Our team will review your inquiry and respond within 24 hours. In the meantime, feel free to explore our website to learn more about our research services, mentorship programs, and business coaching offerings.
          </p>
          
          <div style="background-color: #fef3e2; border: 1px solid #f59e0b; border-radius: 6px; padding: 15px; margin-bottom: 20px;">
            <h3 style="color: #92400e; margin: 0 0 10px 0; font-size: 16px;">
              What happens next?
            </h3>
            <ul style="color: #92400e; margin: 0; padding-left: 20px;">
              <li>Our team will review your message</li>
              <li>We'll respond within 24 hours</li>
              <li>We may schedule a call to discuss your needs further</li>
            </ul>
          </div>
          
          <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">
            If you have any urgent questions, please don't hesitate to call us at:
          </p>
          
          <div style="text-align: center; margin: 20px 0;">
            <p style="margin: 5px 0; color: #f97316; font-weight: bold;">
              📞 0322494556 / 0550102130
            </p>
            <p style="margin: 5px 0; color: #f97316; font-weight: bold;">
              📧 info@survey360.org
            </p>
          </div>
          
          <p style="color: #374151; line-height: 1.6;">
            Best regards,<br/>
            <strong>The Survey 360 Research Solutions Team</strong>
          </p>
        </div>
        
        <div style="background-color: #f3f4f6; padding: 20px; text-align: center;">
          <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 14px;">
            Survey 360 Research Solutions
          </p>
          <p style="margin: 0; color: #6b7280; font-size: 12px;">
            105 Eastwood Avenue, Off Lake Bosomtwe Road, Atonsu-Monaco, Kumasi, Ghana
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};

export const getContactEmailText = ({
  name,
  email,
  subject,
  message,
  phone,
  organization,
  serviceInterest,
}: ContactEmailProps): string => {
  return `
New Contact Form Submission

Contact Details:
- Name: ${name}
- Email: ${email}
${phone ? `- Phone: ${phone}` : ''}
${organization ? `- Organization: ${organization}` : ''}
${serviceInterest ? `- Service Interest: ${serviceInterest}` : ''}
- Subject: ${subject}

Message:
${message}

---
This email was sent from the Survey 360 Research Solutions contact form.
  `;
};

export const getAutoReplyEmailText = ({ name }: AutoReplyEmailProps): string => {
  return `
Dear ${name},

Thank you for reaching out to Survey 360 Research Solutions. We have received your message and appreciate your interest in our services.

Our team will review your inquiry and respond within 24 hours. In the meantime, feel free to explore our website to learn more about our research services, mentorship programs, and business coaching offerings.

What happens next?
- Our team will review your message
- We'll respond within 24 hours
- We may schedule a call to discuss your needs further

If you have any urgent questions, please don't hesitate to call us at:
📞 0322494556 / 0550102130
📧 info@survey360.org

Best regards,
The Survey 360 Research Solutions Team

Survey 360 Research Solutions
105 Eastwood Avenue, Off Lake Bosomtwe Road, Atonsu-Monaco, Kumasi, Ghana
  `;
};