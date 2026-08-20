import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();

    const {
      sender_email,
      receiver_email,
      subject,
      body,
      smtp_username,
      smtp_password,
    } = data;

    if (!smtp_username || !smtp_password) {
      return NextResponse.json({ success: false, message: 'SMTP credentials missing' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: smtp_username,
        pass: smtp_password,
      },
    });

    await transporter.sendMail({
      from: sender_email,
      to: receiver_email,
      subject: subject,
      html: body,
    });

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    );
  }
}
