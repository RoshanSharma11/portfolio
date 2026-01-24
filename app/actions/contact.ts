'use server';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <contact@roshansharma.net>',
        to: process.env.CONTACT_EMAIL || 'your-email@example.com',
        subject: `New Contact Form Message from ${formData.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Contact Form Submission</h2>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${formData.name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> ${formData.email}</p>
              <p style="margin: 10px 0;"><strong>Message:</strong></p>
              <p style="margin: 10px 0; white-space: pre-wrap;">${formData.message}</p>
            </div>
            <p style="color: #666; font-size: 12px;">This email was sent from your portfolio contact form.</p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send message. Please try again.' };
  }
}
