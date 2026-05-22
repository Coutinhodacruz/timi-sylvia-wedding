import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import crypto from 'crypto';

const INVITE_LINK = "https://www.ireemediaagency.com/tsapproved";

function generateOTP(email: string): string {
  const secret = process.env.OTP_SECRET || 'timi-sylvia-wedding-2026';
  const hash = crypto.createHmac('sha256', secret).update(email.toLowerCase()).digest('hex');
  const intVal = parseInt(hash.substring(0, 8), 16);
  return (intVal % 10000).toString().padStart(4, '0');
}

function getEmailTemplate(recipientEmail: string, otp: string, plusOne?: boolean, total: number = 1): string {
  const emailHex = Buffer.from(recipientEmail).toString('hex');
  const personalizedLink = `${INVITE_LINK}?g=${emailHex}`;

  const guestNote = total > 1 
    ? `<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-top: 25px;">
        <tr>
          <td align="center" style="
            background: linear-gradient(90deg, transparent, rgba(201, 168, 107, 0.1), transparent);
            padding: 18px 0;
            border-top: 1px solid rgba(201, 168, 107, 0.15);
            border-bottom: 1px solid rgba(201, 168, 107, 0.15);
          ">
            <p style="
              font-family: 'Georgia', 'Times New Roman', serif;
              font-size: 11px;
              color: #C9A86B;
              text-transform: uppercase;
              letter-spacing: 4px;
              margin: 0 0 8px 0;
              font-weight: bold;
            ">Exclusive Invitation</p>
            <p style="
              font-family: 'Georgia', 'Times New Roman', serif;
              font-size: 18px;
              color: #ffffff;
              margin: 0;
              font-style: italic;
              line-height: 1.4;
            ">
             This invitation is valid for you and your guest of <span style="color: #E0C097; font-weight: bold; font-size: 22px;">${total}</span>
            </p>
            <p style="
              font-family: 'Georgia', 'Times New Roman', serif;
              font-size: 13px;
              color: #a0a0b0;
              margin: 10px 0 0 0;
              font-style: italic;
            ">Please share your unique access code below for entry</p>
          </td>
        </tr>
      </table>` 
    : '';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>You're Invited!</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0D0D0D; font-family: 'Georgia', 'Times New Roman', serif;">
  
  <!-- Outer wrapper -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #0D0D0D; min-height: 100vh;">
    <tr>
      <td align="center" style="padding: 40px 20px;">

        <!-- Main card -->
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="
          background: linear-gradient(145deg, #7A2C42 0%, #612233 50%, #421521 100%);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(201, 168, 107, 0.15);
          max-width: 600px;
          width: 100%;
        ">

          <!-- Gold top accent bar -->
          <tr>
            <td style="
              height: 4px;
              background: linear-gradient(90deg, #A68A56, #C9A86B, #E0C097, #C9A86B, #A68A56);
            "></td>
          </tr>

          <!-- Top decorative section -->
          <tr>
            <td align="center" style="padding: 50px 40px 20px 40px;">
              <!-- Decorative ornament -->
              <div style="
                font-size: 36px;
                color: #C9A86B;
                letter-spacing: 8px;
                margin-bottom: 10px;
              ">✦ ✦ ✦</div>
              
              <div style="
                width: 80px;
                height: 1px;
                background: linear-gradient(90deg, transparent, #C9A86B, transparent);
                margin: 15px auto;
              "></div>
            </td>
          </tr>

          <!-- "You're Invited" heading -->
          <tr>
            <td align="center" style="padding: 0 40px;">
              <h1 style="
                font-family: 'Georgia', 'Times New Roman', serif;
                font-size: 42px;
                font-weight: normal;
                color: #C9A86B;
                margin: 0;
                letter-spacing: 4px;
                text-transform: uppercase;
                line-height: 1.2;
                text-shadow: 0 2px 10px rgba(201, 168, 107, 0.3);
              ">You're</h1>
              <h1 style="
                font-family: 'Georgia', 'Times New Roman', serif;
                font-size: 52px;
                font-weight: normal;
                color: #E0C097;
                margin: 5px 0 0 0;
                letter-spacing: 6px;
                text-transform: uppercase;
                line-height: 1.2;
                text-shadow: 0 2px 15px rgba(224, 192, 151, 0.4);
              ">Invited</h1>
            </td>
          </tr>

          <!-- Decorative divider -->
          <tr>
            <td align="center" style="padding: 25px 40px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="width: 80px; height: 1px; background: linear-gradient(90deg, transparent, #C9A86B);"></td>
                  <td style="padding: 0 15px;">
                    <div style="color: #C9A86B; font-size: 18px;">💍</div>
                  </td>
                  <td style="width: 80px; height: 1px; background: linear-gradient(90deg, #C9A86B, transparent);"></td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Names section -->
          <tr>
            <td align="center" style="padding: 0 40px;">
              <h2 style="
                font-family: 'Georgia', 'Times New Roman', serif;
                font-size: 36px;
                font-weight: normal;
                font-style: italic;
                color: #ffffff;
                margin: 0;
                letter-spacing: 3px;
                line-height: 1.4;
              ">Timi & Sylvia</h2>
              <p style="
                font-family: 'Georgia', 'Times New Roman', serif;
                font-size: 14px;
                color: #a0a0b0;
                margin: 10px 0 0 0;
                letter-spacing: 6px;
                text-transform: uppercase;
              ">Request the honour of your presence</p>
            </td>
          </tr>

          <!-- Message body -->
          <tr>
            <td align="center" style="padding: 30px 50px 20px 50px;">
              <p style="
                font-family: 'Georgia', 'Times New Roman', serif;
                font-size: 16px;
                color: #c0c0d0;
                line-height: 1.8;
                margin: 0;
                text-align: center;
              ">
                We are thrilled to share this special moment with you. 
                Your presence would make our celebration truly memorable.
                Please click the button below to access your exclusive invitation.
              </p>
              ${guestNote}
            </td>
          </tr>

          <!-- Dress Code Info -->
          <tr>
            <td align="center" style="padding: 0 60px 30px 60px;">
              <p style="
                font-family: 'Georgia', 'Times New Roman', serif;
                font-size: 15px;
                color: #E0C097;
                line-height: 1.6;
                margin: 0;
                text-align: center;
                font-style: italic;
              ">
                Please note: the colours of the day are chocolate brown fabric, paired with a gold gele (for women) or gold fila (for men).
              </p>
            </td>
          </tr>

          <!-- Access Code -->
          <tr>
            <td align="center" style="padding: 10px 40px 20px 40px;">
              <div style="background: rgba(201, 168, 107, 0.1); border: 1px dashed #C9A86B; border-radius: 10px; padding: 15px 30px; display: inline-block;">
                <p style="font-family: 'Georgia', 'Times New Roman', serif; font-size: 14px; color: #E0C097; margin: 0 0 5px 0; text-transform: uppercase; letter-spacing: 2px;">Your Access Code</p>
                <p style="font-family: monospace; font-size: 32px; font-weight: bold; color: #ffffff; margin: 0; letter-spacing: 8px;">${otp}</p>
              </div>
            </td>
          </tr>

          <!-- CTA Button -->
          <tr>
            <td align="center" style="padding: 15px 40px 10px 40px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="
                    background: linear-gradient(135deg, #A68A56, #C9A86B, #E0C097);
                    border-radius: 50px;
                    box-shadow: 0 8px 25px rgba(201, 168, 107, 0.4), 0 2px 8px rgba(0, 0, 0, 0.3);
                  ">
                    <a href="${personalizedLink}" target="_blank" style="
                      display: inline-block;
                      padding: 18px 50px;
                      font-family: 'Georgia', 'Times New Roman', serif;
                      font-size: 16px;
                      font-weight: bold;
                      color: #0D0D0D;
                      text-decoration: none;
                      letter-spacing: 3px;
                      text-transform: uppercase;
                    ">✨ Click Here to Access Your Invite ✨</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>    

          <!-- Decorative divider -->
          <tr>
            <td align="center" style="padding: 30px 40px 15px 40px;">
              <div style="
                width: 200px;
                height: 1px;
                background: linear-gradient(90deg, transparent, #C9A86B, transparent);
              "></div>
            </td>
          </tr>

          <!-- RSVP note -->
          <tr>
            <td align="center" style="padding: 0 50px 30px 50px;">
              <p style="
                font-family: 'Georgia', 'Times New Roman', serif;
                font-size: 14px;
                font-style: italic;
                color: #808090;
                line-height: 1.6;
                margin: 0;
                text-align: center;
              ">
                "United in love, approved by God"
              </p>
            </td>
          </tr>

          <!-- Footer section -->
          <tr>
            <td style="
              background: linear-gradient(180deg, rgba(201, 168, 107, 0.05), rgba(201, 168, 107, 0.1));
              padding: 25px 40px;
              border-top: 1px solid rgba(201, 168, 107, 0.15);
            ">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <p style="
                      font-family: 'Georgia', 'Times New Roman', serif;
                      font-size: 13px;
                      color: #C9A86B;
                      margin: 0 0 5px 0;
                      letter-spacing: 4px;
                      text-transform: uppercase;
                    ">With Love</p>
                    <p style="
                      font-family: 'Georgia', 'Times New Roman', serif;
                      font-size: 22px;
                      font-style: italic;
                      color: #ffffff;
                      margin: 0 0 10px 0;
                    ">T & S</p>
                    <p style="
                      font-family: Arial, sans-serif;
                      font-size: 11px;
                      color: #505060;
                      margin: 0;
                      letter-spacing: 1px;
                    ">Powered by IREE MEDIA AGENCY</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Gold bottom accent bar -->
          <tr>
            <td style="
              height: 4px;
              background: linear-gradient(90deg, #A68A56, #C9A86B, #E0C097, #C9A86B, #A68A56);
            "></td>
          </tr>

        </table>
        <!-- End main card -->

      </td>
    </tr>
  </table>
  <!-- End outer wrapper -->

</body>
</html>
  `;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { recipients } = body as { 
      recipients?: (string | { email: string; plusOne?: boolean; total?: number })[] 
    };

    const emailList = recipients || [
      "coutinhodacruz10@gmail.com",
      "sylviaokonofua@gmail.com",
      "adepekun94@gmail.com",
      "Boonspaceca@gmail.com",
    ];

    // Create transporter using .env credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Verify connection
    await transporter.verify();

    const results: { email: string; status: string; error?: string }[] = [];

    // Send emails to each recipient
    for (const item of emailList) {
      const isString = typeof item === 'string';
      const email = isString ? item : item.email;
      const plusOne = isString ? false : (item.plusOne || false);
      const total = isString ? 1 : (item.total || 1);

      try {
        const otp = generateOTP(email);
        await transporter.sendMail({
          from: `"Timi & Sylvia Wedding" <${process.env.EMAIL_USER}>`,
          to: email,
          replyTo: process.env.EMAIL_REPLY || process.env.EMAIL_USER,
          subject: "💍 You're Invited to Timi & Sylvia's Wedding Celebration!",
          html: getEmailTemplate(email, otp, plusOne, total),
        });

        results.push({ email, status: "sent" });
        console.log(`✅ Invitation sent successfully to: ${email} (Total: ${total})`);
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        results.push({ email, status: "failed", error: errorMessage });
        console.error(`❌ Failed to send to ${email}:`, errorMessage);
      }
    }

    const successCount = results.filter((r) => r.status === "sent").length;
    const failCount = results.filter((r) => r.status === "failed").length;

    return NextResponse.json({
      message: `Invitations processed: ${successCount} sent, ${failCount} failed`,
      results,
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error sending invitations:", errorMessage);
    return NextResponse.json(
      { error: "Failed to send invitations", details: errorMessage },
      { status: 500 }
    );
  }
}
