async (page) => {
  // Go to the url passed to the command line (see below)
  await page.goto("", { waitUntil: "networkidle0" });
  await page.waitForTimeout(5000); // Wait for 3 seconds

  await page.waitForNetworkIdle(); // Wait for every request to be answered - like a normal user would do
};
