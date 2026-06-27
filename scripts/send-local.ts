import nodemailer from "nodemailer";
import crypto from "crypto";

const INVITE_LINK = "https://www.ireemediaagency.com/tsapproved";

const RECIPIENTS = [
  { email: "coutinhodacruz10@gmail.com", plusOne: false, total: 1 },
];

function generateOTP(email: string): string {
  const secret = process.env.OTP_SECRET || "timi-sylvia-wedding-2026";
  const hash = crypto
    .createHmac("sha256", secret)
    .update(email.toLowerCase())
    .digest("hex");
  const intVal = parseInt(hash.substring(0, 8), 16);
  return (intVal % 10000).toString().padStart(4, "0");
}

function getReminderTemplate(email: string, otp: string): string {
  const emailHex = Buffer.from(email).toString("hex");
  const personalizedLink = `${INVITE_LINK}?g=${emailHex}`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>One Week To Go! - Timi & Sylvia Wedding</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0D0D0D; font-family: 'Georgia', 'Times New Roman', serif;">

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
            <td align="center" style="padding: 50px 40px 15px 40px;">
              <div style="font-size: 48px; margin-bottom: 10px;">💍</div>
              <div style="
                width: 80px;
                height: 1px;
                background: linear-gradient(90deg, transparent, #C9A86B, transparent);
                margin: 15px auto;
              "></div>
            </td>
          </tr>

          <!-- Heading -->
          <tr>
            <td align="center" style="padding: 0 40px;">
              <h1 style="
                font-family: 'Georgia', 'Times New Roman', serif;
                font-size: 38px;
                font-weight: normal;
                color: #C9A86B;
                margin: 0;
                letter-spacing: 3px;
                text-transform: uppercase;
                line-height: 1.2;
                text-shadow: 0 2px 10px rgba(201, 168, 107, 0.3);
              ">One Week To Go!</h1>
              <p style="
                font-family: 'Georgia', 'Times New Roman', serif;
                font-size: 14px;
                color: #a0a0b0;
                margin: 12px 0 0 0;
                letter-spacing: 4px;
                text-transform: uppercase;
              ">A Quick Reminder</p>
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

          <!-- Names -->
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
            </td>
          </tr>

          <!-- Urgency message -->
          <tr>
            <td align="center" style="padding: 25px 50px 15px 50px;">
              <p style="
                font-family: 'Georgia', 'Times New Roman', serif;
                font-size: 16px;
                color: #c0c0d0;
                line-height: 1.8;
                margin: 0;
                text-align: center;
              ">We’re just one week away, and we can’t wait to celebrate with you!</p>
            </td>
          </tr>

          <!-- Event details cards -->
          <tr>
            <td align="center" style="padding: 20px 30px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <!-- Joining Ceremony -->
                  <td width="48%" style="
                    background: rgba(255, 255, 255, 0.08);
                    border: 1px solid rgba(201, 168, 107, 0.2);
                    border-radius: 16px;
                    padding: 25px 15px;
                    text-align: center;
                    vertical-align: top;
                  ">
                    <p style="margin: 0 0 4px 0; font-size: 10px; color: #C9A86B; text-transform: uppercase; letter-spacing: 3px; font-weight: 600;">
                      🌊 Joining Ceremony
                    </p>
                    <div style="width: 24px; height: 1px; background-color: #C9A86B; margin: 10px auto;"></div>
                    <p style="margin: 0 0 4px 0; font-size: 22px; color: #FFFFFF; font-weight: 300; font-family: 'Georgia', serif;">
                      Friday, July 24
                    </p>
                    <p style="margin: 0 0 4px 0; font-size: 13px; color: #E0C097;">
                      Dockside | 4:00 PM
                    </p>
                  </td>

                  <!-- Spacer -->
                  <td width="4%"></td>

                  <!-- Traditional Ceremony -->
                  <td width="48%" style="
                    background: rgba(201, 168, 107, 0.1);
                    border: 1px solid rgba(201, 168, 107, 0.3);
                    border-radius: 16px;
                    padding: 25px 15px;
                    text-align: center;
                    vertical-align: top;
                  ">
                    <p style="margin: 0 0 4px 0; font-size: 10px; color: #C9A86B; text-transform: uppercase; letter-spacing: 3px; font-weight: 600;">
                      🎉 Traditional Wedding
                    </p>
                    <div style="width: 24px; height: 1px; background-color: #C9A86B; margin: 10px auto;"></div>
                    <p style="margin: 0 0 4px 0; font-size: 22px; color: #FFFFFF; font-weight: 300; font-family: 'Georgia', serif;">
                      Saturday, July 25
                    </p>
                    <p style="margin: 0 0 4px 0; font-size: 13px; color: #E0C097;">
                      Bellagio Hall | 2:00 PM
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Venue -->
          <tr>
            <td align="center" style="padding: 10px 40px 20px 40px;">
              <table role="presentation" cellpadding="0" cellspacing="0" style="
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(201, 168, 107, 0.15);
                border-radius: 12px;
                padding: 18px 30px;
              ">
                <tr>
                  <td style="text-align: center;">
                    <p style="margin: 0 0 6px 0; font-size: 10px; color: #C9A86B; text-transform: uppercase; letter-spacing: 3px; font-weight: 600;">
                      📍 Venue
                    </p>
                    <p style="margin: 0 0 4px 0; font-size: 16px; color: #ffffff; font-weight: 600;">
                      Ramada by Wyndham Resort & Spa
                    </p>
                    <p style="margin: 0; font-size: 13px; color: #a0a0b0;">
                      49 Lorne Street, Jackson’s Point, ON L0E 1L0
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Dress code reminder -->
          <tr>
            <td align="center" style="padding: 0 50px 20px 50px;">
              <p style="
                font-family: 'Georgia', 'Times New Roman', serif;
                font-size: 14px;
                color: #E0C097;
                line-height: 1.6;
                margin: 0;
                text-align: center;
                font-style: italic;
              ">
                👗 Dress Code Reminder: Chocolate brown fabric, paired with a gold gele (women) or gold fila (men).
              </p>
            </td>
          </tr>

          <!-- Arrival & Closing Notes -->
          <tr>
            <td align="center" style="padding: 0 50px 20px 50px;">
              <p style="
                font-family: 'Georgia', 'Times New Roman', serif;
                font-size: 14px;
                color: #c0c0d0;
                line-height: 1.6;
                margin: 0 0 15px 0;
                text-align: center;
              ">
                🕑 Please plan to arrive early to allow time for parking and seating before each ceremony begins.
              </p>
              <p style="
                font-family: 'Georgia', 'Times New Roman', serif;
                font-size: 14px;
                color: #c0c0d0;
                line-height: 1.6;
                margin: 0 0 15px 0;
                text-align: center;
              ">
                If you have any questions before the wedding, please don’t hesitate to reach out. We look forward to celebrating with you!
              </p>
              <p style="
                font-family: 'Georgia', 'Times New Roman', serif;
                font-size: 15px;
                font-weight: bold;
                color: #ffffff;
                line-height: 1.6;
                margin: 0 0 5px 0;
                text-align: center;
              ">
                See you soon! ✨
              </p>
              <p style="
                font-family: 'Georgia', 'Times New Roman', serif;
                font-size: 15px;
                font-weight: bold;
                color: #C9A86B;
                line-height: 1.6;
                margin: 0;
                text-align: center;
                letter-spacing: 1px;
              ">
                #TSApproved
              </p>
            </td>
          </tr>

          <!-- Access Code -->
          <tr>
            <td align="center" style="padding: 10px 40px 15px 40px;">
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
                      font-size: 14px;
                      font-weight: bold;
                      color: #0D0D0D;
                      text-decoration: none;
                      letter-spacing: 3px;
                      text-transform: uppercase;
                    ">✨ View Your Invitation ✨</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Map link -->
          <tr>
            <td align="center" style="padding: 15px 40px 10px 40px;">
              <a href="https://maps.google.com/?q=49+Lorne+Street,+Jacksons+Point,+ON,+L0E+1L0" target="_blank" style="
                font-family: 'Georgia', 'Times New Roman', serif;
                font-size: 13px;
                color: #C9A86B;
                text-decoration: underline;
                letter-spacing: 1px;
              ">📍 Get Directions to Venue</a>
            </td>
          </tr>

          <!-- Decorative divider -->
          <tr>
            <td align="center" style="padding: 25px 40px 15px 40px;">
              <div style="
                width: 200px;
                height: 1px;
                background: linear-gradient(90deg, transparent, #C9A86B, transparent);
              "></div>
            </td>
          </tr>

          <!-- Closing quote -->
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

          <!-- Footer -->
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
      </td>
    </tr>
  </table>

</body>
</html>`;
}

async function run() {
  console.log("Sending locally via direct SMTP...");
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "TSApprovedenquiries@gmail.com",
      pass: "xvcf hfop ewsn hdxd",
    },
  });

  await transporter.verify();
  console.log("SMTP configured successfully.");

  for (const recipient of RECIPIENTS) {
    const otp = generateOTP(recipient.email);
    const html = getReminderTemplate(recipient.email, otp);

    console.log(`Sending to ${recipient.email}...`);
    await transporter.sendMail({
      from: `"Timi & Sylvia Wedding" <TSApprovedenquiries@gmail.com>`,
      to: recipient.email,
      replyTo: "TSApprovedenquiries@gmail.com",
      subject: "🗓️ One Week Until Timi & Sylvia's Wedding!",
      html,
    });
    console.log(`Sent successfully to ${recipient.email}!`);
  }
}

run().catch(console.error);
