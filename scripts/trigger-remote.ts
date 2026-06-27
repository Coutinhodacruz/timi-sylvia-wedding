async function triggerRemote() {
  const url = "https://www.ireemediaagency.com/api/send-reminders?type=1-week&secret=timi-sylvia-wedding-2026-secure-invite-key&source=cron";
  console.log(`Hitting ${url}...`);
  try {
    const response = await fetch(url);
    const data = await response.text();
    console.log(`Status: ${response.status}`);
    console.log(`Response: ${data}`);
  } catch (error) {
    console.error("Failed to hit API", error);
  }
}
triggerRemote();
