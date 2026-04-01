import { NextResponse } from "next/server";
import crypto from 'crypto';

export async function POST(request: Request) {
  try {
    const { emailHex, otp } = await request.json();
    
    if (!emailHex || !otp) {
      return NextResponse.json({ success: false, error: "Missing parameters" }, { status: 400 });
    }
    
    const email = Buffer.from(emailHex, 'hex').toString('utf-8');
    
    const secret = process.env.OTP_SECRET || 'timi-sylvia-wedding-2026';
    const hash = crypto.createHmac('sha256', secret).update(email.toLowerCase()).digest('hex');
    const intVal = parseInt(hash.substring(0, 8), 16);
    const expectedOtp = (intVal % 10000).toString().padStart(4, '0');
    
    if (otp === expectedOtp) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: "Invalid access code. Please try again." }, { status: 401 });
    }
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 400 });
  }
}
