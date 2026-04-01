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
  "coutinhodacruz10@gmail.com",
  "dominicrotimi@gmail.com",
  "dehet28746@availors.com",
  // "sylviaokonofua@gmail.com",
  // "adepekun94@gmail.com",
  // "Boonspaceca@gmail.com",
];

async function sendInvitations() {
  console.log("\n");
  console.log("═══════════════════════════════════════════════════");
  console.log("  💍  Timi & Sylvia Wedding Invitation Sender  💍");
  console.log("═══════════════════════════════════════════════════");
  console.log("\n");
  console.log(`📧 Sending invitations to ${RECIPIENTS.length} recipients...`);
  console.log("─────────────────────────────────────────────────");
  
  RECIPIENTS.forEach((email, i) => {
    console.log(`   ${i + 1}. ${email}`);
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
