import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  if (!req.body) {
    return res.status(400).json({ message: 'No data provided' });
  }
  const { name, email, message } = req.body;
  try {
    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_TO_EMAIL!,
      subject: 'WPH Portfolio 2 Contact Form',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });
    res.status(200).json({ message: 'Email sent', result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to send email' });
  }
}
