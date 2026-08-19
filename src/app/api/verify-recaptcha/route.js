import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { token } = body;

  if (!token) {
    return NextResponse.json({ success: false });
  }

  const secret = process.env.RECAPTCHA_SECRET_KEY;

  const googleRes = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secret}&response=${token}`,
    }
  );

  const data = await googleRes.json();

  if (!data.success) {
    return NextResponse.json({ success: false });
  }

  // ✅ reCAPTCHA passed
  // 👉 Here you can:
  // - send email
  // - store in DB
  // - trigger webhook

  return NextResponse.json({ success: true });
}
