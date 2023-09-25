import { EmailTemplate } from '../../components/EmailTemplate';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  if (!req.body) return NextResponse.json({ error: 'Request body is empty' });
  

  const { name, email, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: 'Brick ' + `<${process.env.CONTACT_MAIL}>`,
      to: email,
      subject: `${name}: Sent a message via web`,
      react: EmailTemplate({ message }) as React.ReactElement,
    });
    console.log(data)

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error });
  }
}