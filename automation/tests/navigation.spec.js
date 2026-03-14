const { test, expect } = require("@playwright/test");

// Use href-based locator to avoid brittleness from punctuation/ellipsis changes in link text
test("Navigation: open IANA link from Example Domain", async ({ page }) => {
  await page.goto("https://example.com/");
  await page.locator("a[href*='iana.org']").click();
  await expect(page).toHaveURL(/iana\.org/);
});
