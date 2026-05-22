/**
 * ============================================================
 *  Wedding Invitation Email Sender Script
 * ============================================================
 * 
 *  This script sends a beautiful wedding invitation email to 
 *  the specified recipients with a link to the wedding page.
 * 
 *  Usage:
 *    npx tsx scripts/send-invites.ts
 * 
 *  Make sure the dev server is running:
 *    npm run dev
 * 
 * ============================================================
 */

const API_URL = "http://localhost:3000/api/send-invites";

const RECIPIENTS = [
  { email: "coutinhodacruz10@gmail.com", plusOne: false, total: 1 },
  // { email: "sylviaokonofua@gmail.com", plusOne: false, total: 1 },
  // { email: "adepekun94@gmail.com", plusOne: false, total: 1 },
  { email: "Boonspaceca@gmail.com", plusOne: false, total: 1 },
  // { email: "Kemkomo34@yahoo.com", plusOne: true, total: 2 },
  // { email: "omorogieva81@gmail.com", plusOne: false, total: 1 },
  // { email: "divine.ogundare@gmail.com", plusOne: true, total: 2 },
  // { email: "djsolsax1@gmail.com", plusOne: true, total: 3 },
  // { email: "Ozii2011@yahoo.com", plusOne: true, total: 3 },
  // { email: "EgbeFelix97@gmail.com", plusOne: true, total: 2 },
  // { email: "Osuovester@gmail.com", plusOne: true, total: 2 },
  // { email: "detolamolayo@gmail.com", plusOne: true, total: 4 },
  // { email: "aaadedapo198@gmail.com", plusOne: false, total: 1 },
  // { email: "damiadedapo@gmail.com", plusOne: false, total: 1 },
  // { email: "dammy5ive@gmail.com", plusOne: false, total: 1 },
  // { email: "ivieojeaga@yahoo.com", plusOne: false, total: 1 },
  // { email: "oludipeolaide@gmail.com", plusOne: false, total: 1 },
  // { email: "koyejo.dare@gmail.com", plusOne: false, total: 1 },
  // { email: "kb-10@hotmail.com", plusOne: false, total: 1 },
  // { email: "deletope13@yahoo.com", plusOne: false, total: 1 },
  // { email: "Ritymore442@gmail.com", plusOne: false, total: 1 },
  // { email: "asma.musa62@yahoo.com", plusOne: false, total: 1 },
  // { email: "adedapoade18@gmail.com", plusOne: false, total: 1 },
  // { email: "adedapoife01@gmail.com", plusOne: false, total: 1 },
  // { email: "ogbawo@gmail.com", plusOne: false, total: 1 },
  // { email: "adedapotolu05@gmail.com", plusOne: false, total: 1 },
  // { email: "okoseme234@gmail.com", plusOne: false, total: 1 },
  // { email: "oladoyin24@hotmail.co.uk", plusOne: false, total: 1 },
  // { email: "Ruchilyon@icloud.com", plusOne: false, total: 1 },
  // { email: "osonia687@gmail.com", plusOne: false, total: 1 },
  // { email: "Sholasleek@gmail.com", plusOne: false, total: 1 },
  // { email: "gracemacbruce@gmail.com", plusOne: false, total: 1 },
  // { email: "Gwanezaniquese@gmail.com", plusOne: false, total: 1 },
  // { email: "Agbamu@stillwaterschools.org", plusOne: false, total: 1 },
  // { email: "Ekis50@yahoo.com", plusOne: true, total: 3 },
  // { email: "margaretakpedeye@gmail.com", plusOne: false, total: 1 },
  // { email: "olamideibuoye@gmail.com", plusOne: false, total: 1 },
  // { email: "olatunbosunadesoye@yahoo.com", plusOne: false, total: 1 },
  // { email: "manelubs@gmail.com", plusOne: false, total: 1 },
];

async function sendInvitations() {
  console.log("\n");
  console.log("═══════════════════════════════════════════════════");
  console.log("  💍  Timi & Sylvia Wedding Invitation Sender  💍");
  console.log("═══════════════════════════════════════════════════");
  console.log("\n");
  console.log(`📧 Sending invitations to ${RECIPIENTS.length} recipients...`);
  console.log("─────────────────────────────────────────────────");
  
  RECIPIENTS.forEach((item, i) => {
    const email = typeof item === 'string' ? item : item.email;
    const total = typeof item === 'string' ? 1 : (item.total || 1);
    console.log(`   ${i + 1}. ${email} (Total: ${total})`);
  });
  
  console.log("─────────────────────────────────────────────────\n");

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ recipients: RECIPIENTS }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`Server responded with ${response.status}: ${errorData}`);
    }

    const data = await response.json();

    console.log("\n📋 Results:");
    console.log("─────────────────────────────────────────────────");
    
    if (data.results) {
      for (const result of data.results) {
        const icon = result.status === "sent" ? "✅" : "❌";
        console.log(`   ${icon} ${result.email} — ${result.status}`);
        if (result.error) {
          console.log(`      └─ Error: ${result.error}`);
        }
      }
    }

    console.log("─────────────────────────────────────────────────");
    console.log(`\n🎉 ${data.message}`);
    console.log("\n═══════════════════════════════════════════════════\n");

  } catch (error) {
    console.error("\n❌ Failed to send invitations:");
    console.error(`   ${error instanceof Error ? error.message : error}`);
    console.error("\n💡 Make sure the dev server is running: npm run dev\n");
    process.exit(1);
  }
}

sendInvitations();
