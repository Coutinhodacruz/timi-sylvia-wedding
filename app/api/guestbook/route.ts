import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

// Beautiful auto-reply email template for the guest
function buildGuestAutoReplyTemplate(guestName: string): string {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank You - Timi &amp; Sylvia</title>
</head>
<body style="margin: 0; padding: 0; background-color: #FDF8F4; font-family: 'Georgia', 'Times New Roman', serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #FDF8F4;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">

          <!-- Top Decorative Border -->
          <tr>
            <td style="background: linear-gradient(135deg, #7A1B2E, #9B3A4E); height: 6px; border-radius: 20px 20px 0 0;"></td>
          </tr>

          <!-- Header Section -->
          <tr>
            <td style="background-color: #FFFFFF; padding: 50px 40px 30px 40px; text-align: center;">
              <!-- Decorative Ornament -->
              <div style="margin-bottom: 20px;">
                <span style="color: #C79A6B; font-size: 32px; letter-spacing: 8px;">✦ ✦ ✦</span>
              </div>

              <!-- Couple Names -->
              <h1 style="margin: 0 0 8px 0; font-size: 36px; font-weight: 300; color: #7A1B2E; letter-spacing: 3px; font-family: 'Georgia', serif;">
                Timi & Sylvia
              </h1>

              <!-- Decorative Line -->
              <div style="margin: 16px auto; width: 80px; height: 1px; background-color: #C79A6B;"></div>

              <p style="margin: 0; font-size: 12px; color: #C79A6B; text-transform: uppercase; letter-spacing: 4px; font-weight: 600;">
                Wedding Celebration
              </p>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="background-color: #FFFFFF; padding: 10px 40px 40px 40px;">
              <!-- Thank You Card -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background: linear-gradient(135deg, #FFF8F2, #FDF2E9); border: 1px solid #F0DCC8; border-radius: 20px; padding: 40px 30px; text-align: center;">

                    <!-- Heart Icon -->
                    <div style="margin-bottom: 20px;">
                      <span style="font-size: 40px;">💛</span>
                    </div>

                    <h2 style="margin: 0 0 16px 0; font-size: 26px; font-weight: 300; color: #7A1B2E; font-family: 'Georgia', serif;">
                      Thank You, ${guestName}!
                    </h2>

                    <div style="width: 40px; height: 1px; background-color: #C79A6B; margin: 0 auto 20px auto;"></div>

                    <p style="margin: 0 0 20px 0; font-size: 16px; color: #6B4F4F; line-height: 1.8; font-style: italic;">
                      Your beautiful message means the world to us. We are deeply touched by your kind words and warm wishes as we embark on this special journey together.
                    </p>

                    <p style="margin: 0; font-size: 16px; color: #6B4F4F; line-height: 1.8;">
                      Your love and support make our celebration even more meaningful.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Event Details Section -->
          <tr>
            <td style="background-color: #FFFFFF; padding: 0 40px 40px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="text-align: center; padding-bottom: 24px;">
                    <p style="margin: 0; font-size: 11px; color: #C79A6B; text-transform: uppercase; letter-spacing: 4px; font-weight: 600;">
                      Save the Date
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <!-- Traditional Wedding -->
                        <td width="48%" style="background: linear-gradient(145deg, #7A1B2E, #9B3A4E); border-radius: 16px; padding: 28px 20px; text-align: center; vertical-align: top;">
                          <p style="margin: 0 0 4px 0; font-size: 10px; color: #E8C5A0; text-transform: uppercase; letter-spacing: 3px; font-weight: 600;">
                            Traditional
                          </p>
                          <p style="margin: 0 0 8px 0; font-size: 10px; color: #E8C5A0; text-transform: uppercase; letter-spacing: 3px; font-weight: 600;">
                            Wedding
                          </p>
                          <div style="width: 24px; height: 1px; background-color: #C79A6B; margin: 12px auto;"></div>
                          <p style="margin: 0 0 4px 0; font-size: 20px; color: #FFFFFF; font-weight: 300; font-family: 'Georgia', serif;">
                            July 25
                          </p>
                          <p style="margin: 0; font-size: 12px; color: #E8C5A0;">
                            2026
                          </p>
                        </td>

                        <!-- Spacer -->
                        <td width="4%"></td>

                        <!-- White Wedding -->
                        <td width="48%" style="background: linear-gradient(145deg, #F8EDE3, #FDF2E9); border: 1px solid #E8D5C4; border-radius: 16px; padding: 28px 20px; text-align: center; vertical-align: top;">
                          <p style="margin: 0 0 4px 0; font-size: 10px; color: #7A1B2E; text-transform: uppercase; letter-spacing: 3px; font-weight: 600;">
                            White
                          </p>
                          <p style="margin: 0 0 8px 0; font-size: 10px; color: #7A1B2E; text-transform: uppercase; letter-spacing: 3px; font-weight: 600;">
                            Wedding
                          </p>
                          <div style="width: 24px; height: 1px; background-color: #C79A6B; margin: 12px auto;"></div>
                          <p style="margin: 0 0 4px 0; font-size: 20px; color: #7A1B2E; font-weight: 300; font-family: 'Georgia', serif;">
                            July 24
                          </p>
                          <p style="margin: 0; font-size: 12px; color: #9B6B6B;">
                            2026
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Closing Message -->
          <tr>
            <td style="background-color: #FFFFFF; padding: 0 40px 40px 40px; text-align: center;">
              <div style="width: 60px; height: 1px; background-color: #F0DCC8; margin: 0 auto 24px auto;"></div>
              <p style="margin: 0 0 8px 0; font-size: 15px; color: #6B4F4F; line-height: 1.7;">
                We can't wait to celebrate with you!
              </p>
              <p style="margin: 0 0 24px 0; font-size: 15px; color: #6B4F4F; line-height: 1.7;">
                Your presence will make our day truly unforgettable.
              </p>

              <!-- Signature -->
              <p style="margin: 0 0 4px 0; font-size: 13px; color: #C79A6B; font-style: italic;">
                With love and gratitude,
              </p>
              <p style="margin: 0; font-size: 22px; color: #7A1B2E; font-family: 'Georgia', serif; font-weight: 300;">
                Timi & Sylvia
              </p>

              <!-- Decorative Hearts -->
              <div style="margin-top: 20px;">
                <span style="color: #C79A6B; font-size: 14px; letter-spacing: 6px;">♥ ♥ ♥</span>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background: linear-gradient(135deg, #7A1B2E, #9B3A4E); padding: 28px 40px; text-align: center; border-radius: 0 0 20px 20px;">
              <p style="margin: 0 0 8px 0; font-size: 11px; color: #E8C5A0; letter-spacing: 3px; text-transform: uppercase; font-weight: 600;">
                #TimiAndSylvia2026
              </p>
              <p style="margin: 0; font-size: 11px; color: #D4A080;">
                This is an automated message from our wedding website.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// Notification email template for the couple
function buildCoupleNotificationTemplate(
    guestName: string,
    guestMessage: string,
    guestEmail: string
): string {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Guestbook Entry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #FDF8F4; font-family: 'Georgia', 'Times New Roman', serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #FDF8F4;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">

          <!-- Top Border -->
          <tr>
            <td style="background: linear-gradient(135deg, #7A1B2E, #9B3A4E); height: 4px; border-radius: 16px 16px 0 0;"></td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="background-color: #FFFFFF; padding: 36px 40px 20px 40px; text-align: center;">
              <p style="margin: 0 0 8px 0; font-size: 11px; color: #C79A6B; text-transform: uppercase; letter-spacing: 4px; font-weight: 600;">
                New Guestbook Entry
              </p>
              <h1 style="margin: 0; font-size: 28px; font-weight: 300; color: #7A1B2E; font-family: 'Georgia', serif;">
                📖 Someone signed your guestbook!
              </h1>
            </td>
          </tr>

          <!-- Message Content -->
          <tr>
            <td style="background-color: #FFFFFF; padding: 20px 40px 36px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background: linear-gradient(135deg, #FFF8F2, #FDF2E9); border: 1px solid #F0DCC8; border-radius: 16px; padding: 30px;">
                    
                    <!-- Guest Name -->
                    <p style="margin: 0 0 4px 0; font-size: 10px; color: #C79A6B; text-transform: uppercase; letter-spacing: 3px; font-weight: 600;">
                      From
                    </p>
                    <p style="margin: 0 0 20px 0; font-size: 20px; color: #7A1B2E; font-family: 'Georgia', serif;">
                      ${guestName}
                    </p>

                    <!-- Guest Email -->
                    ${guestEmail
            ? `
                    <p style="margin: 0 0 4px 0; font-size: 10px; color: #C79A6B; text-transform: uppercase; letter-spacing: 3px; font-weight: 600;">
                      Email
                    </p>
                    <p style="margin: 0 0 20px 0; font-size: 14px; color: #6B4F4F;">
                      ${guestEmail}
                    </p>
                    `
            : ""
        }

                    <!-- Divider -->
                    <div style="width: 100%; height: 1px; background-color: #E8D5C4; margin: 0 0 20px 0;"></div>

                    <!-- Message -->
                    <p style="margin: 0 0 4px 0; font-size: 10px; color: #C79A6B; text-transform: uppercase; letter-spacing: 3px; font-weight: 600;">
                      Message
                    </p>
                    <p style="margin: 0; font-size: 16px; color: #6B4F4F; line-height: 1.8; font-style: italic;">
                      "${guestMessage}"
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background: linear-gradient(135deg, #7A1B2E, #9B3A4E); padding: 20px 40px; text-align: center; border-radius: 0 0 16px 16px;">
              <p style="margin: 0; font-size: 11px; color: #E8C5A0; letter-spacing: 2px;">
                Timi & Sylvia Wedding Guestbook
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
    try {
        const { name, email, message } = await req.json();

        // Validate required fields
        if (!name || !message) {
            return NextResponse.json(
                { error: "Name and message are required" },
                { status: 400 }
            );
        }

        // 1. Send notification email to the couple
        await transporter.sendMail({
            from: `"Timi & Sylvia Wedding" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_RECIEVER,
            replyTo: email || undefined,
            subject: `📖 New Guestbook Entry from ${name}`,
            html: buildCoupleNotificationTemplate(name, message, email || ""),
        });

        // 2. Send auto-reply to the guest (only if they provided an email)
        if (email) {
            await transporter.sendMail({
                from: `"Timi & Sylvia" <${process.env.EMAIL_USER}>`,
                to: email,
                replyTo: process.env.EMAIL_REPLY,
                subject: `💛 Thank you for signing our guestbook, ${name}!`,
                html: buildGuestAutoReplyTemplate(name),
            });
        }

        return NextResponse.json(
            {
                success: true,
                message: "Guestbook entry submitted successfully",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Guestbook API Error:", error);
        return NextResponse.json(
            { error: "Failed to submit guestbook entry" },
            { status: 500 }
        );
    }
}
