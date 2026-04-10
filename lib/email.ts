import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
};

export const sendEmail = async (options: EmailOptions) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
    to: options.to,
    subject: options.subject,
    html: options.html,
    text: options.text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

export const sendContactFormEmail = async (data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  service?: string;
}) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; }
        .content { background: #f9fafb; padding: 30px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #4b5563; }
        .value { margin-top: 5px; color: #1f2937; }
        .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${data.name}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${data.email}</div>
          </div>
          ${data.phone ? `
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value">${data.phone}</div>
          </div>
          ` : ''}
          ${data.company ? `
          <div class="field">
            <div class="label">Company:</div>
            <div class="value">${data.company}</div>
          </div>
          ` : ''}
          ${data.service ? `
          <div class="field">
            <div class="label">Service Interested In:</div>
            <div class="value">${data.service}</div>
          </div>
          ` : ''}
          <div class="field">
            <div class="label">Message:</div>
            <div class="value">${data.message}</div>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from the Netsmartz website contact form.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const text = `
    New Contact Form Submission
    
    Name: ${data.name}
    Email: ${data.email}
    ${data.phone ? `Phone: ${data.phone}` : ''}
    ${data.company ? `Company: ${data.company}` : ''}
    ${data.service ? `Service: ${data.service}` : ''}
    
    Message:
    ${data.message}
  `;

  return await sendEmail({
    to: process.env.SMTP_FROM_EMAIL || '',
    subject: `New Contact Form Submission from ${data.name}`,
    html,
    text,
  });
};