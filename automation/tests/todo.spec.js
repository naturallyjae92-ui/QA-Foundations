const { test, expect } = require("@playwright/test");

test.describe("TodoMVC (Playwright Demo)", () => {
  test("TD-01: Add a todo item", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc/");

    const input = page.getByPlaceholder("What needs to be done?");
    await input.fill("Buy groceries");
    await input.press("Enter");

await expect(page.locator(".todo-list li")).toContainText("Buy groceries"); });

  test("TD-02: Complete a todo item", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc/");

    const input = page.getByPlaceholder("What needs to be done?");
    await input.fill("Call the clinic");
    await input.press("Enter");

    // toggle the first item complete
    await page.locator(".todo-list li").first().locator(".toggle").check();

    const todoItem = page.locator(".todo-list li").filter({ hasText: "Call the clinic" });
    await expect(todoItem).toHaveClass(/completed/);
  });

  test("TD-03: Negative - Empty todo should not be added", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc/");

    const input = page.getByPlaceholder("What needs to be done?");
    await input.focus();
    await input.press("Enter");

    await expect(page.locator(".todo-list li")).toHaveCount(0);
  });
});