const { test, expect } = require("@playwright/test");

test("Navigation: click More information link", async ({ page }) => {
  await page.goto("https://example.com/");
  await page.getByRole("link", { name: "More information..." }).click();
  await expect(page).toHaveURL(/iana\.org/);
});
