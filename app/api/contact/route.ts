import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { personalInfo } from '@/lib/data';

// Initialize Resend with the provided API key
const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

// In-memory rate limiting map
// Key: IP address, Value: Array of timestamps
const rateLimitMap = new Map<string, number[]>();

// Rate limit settings
const MAX_REQUESTS = 3;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

export async function POST(request: Request) {
  try {
    // 1. Rate Limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    
    if (ip !== 'unknown') {
      const now = Date.now();
      const userRequests = rateLimitMap.get(ip) || [];
      
      // Filter out old requests
      const recentRequests = userRequests.filter(time => now - time < WINDOW_MS);
      
      if (recentRequests.length >= MAX_REQUESTS) {
        return NextResponse.json(
          { error: 'Too many requests. Please try again later.' },
          { status: 429 }
        );
      }
      
      // Add current request
      recentRequests.push(now);
      rateLimitMap.set(ip, recentRequests);
    }

    // 2. Parse request body
    const body = await request.json();
    const { name, email, message, botcheck } = body;

    // 3. Honeypot Validation
    if (botcheck) {
      // Silently reject if honeypot is filled, pretending it was successful to trick bots
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 4. Input Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 5. Send Email
    const data = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>', // Note: Use your verified domain if available
      to: [personalInfo.email],
      replyTo: email,
      subject: `New Contact Request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (data.error) {
      console.error('Resend error:', data.error);
      return NextResponse.json(
        { error: 'Failed to send message via Resend' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
