const { test, expect } = require("@playwright/test");

test("Navigation: open IANA link from Example Domain", async ({ page }) => {
  await page.goto("https://example.com/");
  await page.locator("a[href*='iana.org']").click();
  await expect(page).toHaveURL(/iana\.org/);
});
