import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import crypto from "crypto";

const INVITE_LINK = "https://www.ireemediaagency.com/tsapproved";

// ─── Recipients list (same as send-invites) ───
const RECIPIENTS = [
  { email: "coutinhodacruz10@gmail.com", plusOne: false, total: 1 },
  { email: "sylviaokonofua@gmail.com", plusOne: false, total: 1 },
  { email: "adepekun94@gmail.com", plusOne: false, total: 1 },
  { email: "Boonspaceca@gmail.com", plusOne: false, total: 1 },
  { email: "Kemkomo34@yahoo.com", plusOne: true, total: 2 },
  { email: "omorogieva81@gmail.com", plusOne: false, total: 1 },
  { email: "divine.ogundare@gmail.com", plusOne: true, total: 2 },
  { email: "djsolsax1@gmail.com", plusOne: true, total: 3 },
  { email: "Ozii2011@yahoo.com", plusOne: true, total: 3 },
  { email: "EgbeFelix97@gmail.com", plusOne: true, total: 2 },
  { email: "Osuovester@gmail.com", plusOne: true, total: 2 },
  { email: "detolamolayo@gmail.com", plusOne: true, total: 4 },
  { email: "aaadedapo198@gmail.com", plusOne: false, total: 1 },
  { email: "damiadedapo@gmail.com", plusOne: false, total: 1 },
  { email: "dammy5ive@gmail.com", plusOne: false, total: 1 },
  { email: "ivieojeaga@yahoo.com", plusOne: false, total: 1 },
  { email: "oludipeolaide@gmail.com", plusOne: false, total: 1 },
  { email: "koyejo.dare@gmail.com", plusOne: false, total: 1 },
  { email: "kb-10@hotmail.com", plusOne: false, total: 1 },
  { email: "deletope13@yahoo.com", plusOne: false, total: 1 },
  { email: "Ritymore442@gmail.com", plusOne: false, total: 1 },
  { email: "asma.musa62@yahoo.com", plusOne: false, total: 1 },
  { email: "adedapoade18@gmail.com", plusOne: false, total: 1 },
  { email: "adedapoife01@gmail.com", plusOne: false, total: 1 },
  { email: "ogbawo@gmail.com", plusOne: false, total: 1 },
  { email: "adedapotolu05@gmail.com", plusOne: false, total: 1 },
  { email: "okoseme234@gmail.com", plusOne: false, total: 1 },
  { email: "oladoyin24@hotmail.co.uk", plusOne: false, total: 1 },
  { email: "Ruchilyon@icloud.com", plusOne: false, total: 1 },
  { email: "osonia687@gmail.com", plusOne: false, total: 1 },
  { email: "Sholasleek@gmail.com", plusOne: false, total: 1 },
  { email: "gracemacbruce@gmail.com", plusOne: false, total: 1 },
  { email: "Gwanezaniquese@gmail.com", plusOne: false, total: 1 },
  { email: "Agbamu@stillwaterschools.org", plusOne: false, total: 1 },
  { email: "Ekis50@yahoo.com", plusOne: true, total: 3 },
  { email: "margaretakpedeye@gmail.com", plusOne: false, total: 1 },
  { email: "olamideibuoye@gmail.com", plusOne: false, total: 1 },
  { email: "olatunbosunadesoye@yahoo.com", plusOne: false, total: 1 },
  { email: "manelubs@gmail.com", plusOne: false, total: 1 },
];

// ─── OTP generation (same as send-invites) ───
function generateOTP(email: string): string {
  const secret = process.env.OTP_SECRET || "timi-sylvia-wedding-2026";
  const hash = crypto
    .createHmac("sha256", secret)
    .update(email.toLowerCase())
    .digest("hex");
  const intVal = parseInt(hash.substring(0, 8), 16);
  return (intVal % 10000).toString().padStart(4, "0");
}

// ─── Determine reminder type based on date ───
type ReminderType = "today" | "1-week" | "3-days" | "day-of" | "custom";

function getReminderType(override?: string): { type: ReminderType; heading: string; subheading: string; emoji: string; urgency: string } {
  if (override) {
    const map: Record<string, { type: ReminderType; heading: string; subheading: string; emoji: string; urgency: string }> = {
      "today": {
        type: "today",
        heading: "A Gentle Reminder",
        subheading: "Our wedding celebration is approaching!",
        emoji: "💌",
        urgency: "We wanted to reach out to remind you about our upcoming celebration.",
      },
      "1-week": {
        type: "1-week",
        heading: "One Week To Go!",
        subheading: "A Quick Reminder",
        emoji: "💍",
        urgency: "We’re just one week away, and we can’t wait to celebrate with you!",
      },
      "3-days": {
        type: "3-days",
        heading: "3 Days Away!",
        subheading: "The countdown is almost over",
        emoji: "⏳",
        urgency: "Only <strong>3 more days</strong> until our wedding! We can barely contain our excitement and can't wait to see you there.",
      },
      "day-of": {
        type: "day-of",
        heading: "Today Is The Day!",
        subheading: "We're getting married!",
        emoji: "🎊",
        urgency: "The day we've been dreaming of is finally here! We are overjoyed and cannot wait to celebrate with you today.",
      },
    };
    return map[override] || map["today"];
  }

  // Auto-detect based on current date
  const now = new Date();
  const eventDate = new Date("2026-07-24T00:00:00");
  const diffMs = eventDate.getTime() - now.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) {
    return {
      type: "day-of",
      heading: "Today Is The Day!",
      subheading: "We're getting married!",
      emoji: "🎊",
      urgency: "The day we've been dreaming of is finally here! We are overjoyed and cannot wait to celebrate with you today.",
    };
  } else if (diffDays <= 3) {
    return {
      type: "3-days",
      heading: "3 Days Away!",
      subheading: "The countdown is almost over",
      emoji: "⏳",
      urgency: `Only <strong>${diffDays} day${diffDays > 1 ? "s" : ""}</strong> until our wedding! We can barely contain our excitement and can't wait to see you there.`,
    };
  } else if (diffDays <= 7) {
    return {
      type: "1-week",
      heading: "One Week To Go!",
      subheading: "A Quick Reminder",
      emoji: "💍",
      urgency: "We’re just one week away, and we can’t wait to celebrate with you!",
    };
  } else {
    return {
      type: "today",
      heading: "A Gentle Reminder",
      subheading: "Our wedding celebration is approaching!",
      emoji: "💌",
      urgency: `Our wedding is <strong>${diffDays} days</strong> away! We wanted to reach out and make sure you have everything you need.`,
    };
  }
}

// ─── Reminder email template ───
function getReminderTemplate(
  email: string,
  otp: string,
  reminder: { heading: string; subheading: string; emoji: string; urgency: string }
): string {
  const emailHex = Buffer.from(email).toString("hex");
  const personalizedLink = `${INVITE_LINK}?g=${emailHex}`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${reminder.heading} - Timi & Sylvia Wedding</title>
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
              <div style="font-size: 48px; margin-bottom: 10px;">${reminder.emoji}</div>
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
              ">${reminder.heading}</h1>
              <p style="
                font-family: 'Georgia', 'Times New Roman', serif;
                font-size: 14px;
                color: #a0a0b0;
                margin: 12px 0 0 0;
                letter-spacing: 4px;
                text-transform: uppercase;
              ">${reminder.subheading}</p>
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
              ">${reminder.urgency}</p>
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

// ─── Subject line based on reminder type ───
function getSubjectLine(type: ReminderType): string {
  switch (type) {
    case "1-week":
      return "🗓️ One Week Until Timi & Sylvia's Wedding!";
    case "3-days":
      return "⏳ Just 3 Days Away — Timi & Sylvia's Wedding!";
    case "day-of":
      return "🎊 Today Is The Day — Timi & Sylvia's Wedding!";
    default:
      return "💌 Reminder — Timi & Sylvia's Wedding Celebration!";
  }
}

// ─── Target reminder dates (YYYY-MM-DD format) ───
const REMINDER_DATES: Record<string, ReminderType> = {
  "2026-07-17": "1-week",   // 1 week before the Joining Ceremony
  "2026-07-21": "3-days",   // 3 days before the Joining Ceremony
  "2026-07-24": "day-of",   // Day of the Joining Ceremony
};

// ─── API Route Handler ───
export async function GET(request: Request) {
  // Verify cron secret to prevent unauthorized access
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const reminderTypeOverride = searchParams.get("type"); // optional: "today", "1-week", "3-days", "day-of"
  const source = searchParams.get("source"); // "cron" for automated calls

  if (
    secret !== process.env.CRON_SECRET && 
    secret !== process.env.INVITE_SECRET &&
    secret !== "timi-sylvia-wedding-2026-secure-invite-key"
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // ─── Cron mode: only send on specific dates ───
  if (source === "cron") {
    const today = new Date().toISOString().split("T")[0]; // "YYYY-MM-DD"
    const scheduledType = REMINDER_DATES[today];

    if (!scheduledType) {
      console.log(`⏭️  Cron triggered on ${today} — no reminder scheduled. Skipping.`);
      return NextResponse.json({
        message: `No reminder scheduled for ${today}. Skipping.`,
        skipped: true,
      });
    }

    // Use the scheduled type for this date
    const reminder = getReminderType(scheduledType);
    console.log(`🔔 Cron triggered on ${today} — sending "${reminder.heading}" reminder!`);
    return sendReminders(request, reminder);
  }

  // ─── Manual mode: send immediately with specified or auto-detected type ───
  const reminder = getReminderType(reminderTypeOverride || undefined);
  return sendReminders(request, reminder);
}

// ─── Shared send logic ───
async function sendReminders(
  _request: Request,
  reminder: { type: ReminderType; heading: string; subheading: string; emoji: string; urgency: string }
) {
  console.log(`\n═══════════════════════════════════════════════════`);
  console.log(`  💌  Wedding Reminder Sender — ${reminder.heading}`);
  console.log(`═══════════════════════════════════════════════════\n`);
  console.log(`📧 Sending reminders to ${RECIPIENTS.length} recipients...`);

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.verify();

    const results: { email: string; status: string; error?: string }[] = [];

    for (const recipient of RECIPIENTS) {
      try {
        const otp = generateOTP(recipient.email);
        const html = getReminderTemplate(recipient.email, otp, reminder);

        await transporter.sendMail({
          from: `"Timi & Sylvia Wedding" <${process.env.EMAIL_USER}>`,
          to: recipient.email,
          replyTo: process.env.EMAIL_REPLY || process.env.EMAIL_USER,
          subject: getSubjectLine(reminder.type),
          html,
        });

        results.push({ email: recipient.email, status: "sent" });
        console.log(`✅ Reminder sent to: ${recipient.email}`);
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        results.push({ email: recipient.email, status: "failed", error: errorMessage });
        console.error(`❌ Failed to send to ${recipient.email}:`, errorMessage);
      }
    }

    const successCount = results.filter((r) => r.status === "sent").length;
    const failCount = results.filter((r) => r.status === "failed").length;

    return NextResponse.json({
      message: `Reminders processed (${reminder.heading}): ${successCount} sent, ${failCount} failed`,
      reminderType: reminder.type,
      results,
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error sending reminders:", errorMessage);
    return NextResponse.json(
      { error: "Failed to send reminders", details: errorMessage },
      { status: 500 }
    );
  }
}

// Also support POST for manual triggers
export async function POST(request: Request) {
  const url = new URL(request.url);
  // Forward to GET handler with the same params
  const secret = url.searchParams.get("secret");
  const type = url.searchParams.get("type");
  
  const body = await request.json().catch(() => ({}));
  const resolvedSecret = secret || (body as Record<string, string>).secret || "";
  const resolvedType = type || (body as Record<string, string>).type || "";

  const getUrl = new URL(request.url);
  getUrl.searchParams.set("secret", resolvedSecret);
  if (resolvedType) getUrl.searchParams.set("type", resolvedType);

  return GET(new Request(getUrl.toString()));
}
