const API_URL = "http://localhost:3000/api/send-reminders?type=1-week&secret=timi-sylvia-wedding-2026-secure-invite-key";

async function sendTestReminder() {
  console.log("Sending test reminder to coutinhodacruz10@gmail.com...");
  
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`Server responded with ${response.status}: ${errorData}`);
    }

    const data = await response.json();
    console.log("Response:", JSON.stringify(data, null, 2));

  } catch (error) {
    console.error("Failed to send test reminder:");
    console.error(error);
  }
}

sendTestReminder();

export {};
