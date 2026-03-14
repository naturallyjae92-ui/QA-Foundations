const { test, expect } = require("@playwright/test");

test("Hello Test: homepage loads and has a title", async ({ page }) => {
  await page.goto("https://example.com/");
  await expect(page).toHaveTitle(/Example Domain/);
  await expect(page.getByRole("heading", { name: "Example Domain" })).toBeVisible();
});
