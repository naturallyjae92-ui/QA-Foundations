# UI Automation — Playwright (Beginner)

This folder contains beginner UI automation tests written with Playwright.

## Prerequisites
- Node.js (LTS recommended)
- npm
- Playwright browsers installed

## Install
From the `automation/` folder:

```bash
npm install
npx playwright install


---

## Step 2 (10–15 min) — Create `automation/Test_Run_Evidence.md`
Create:

**`automation/Test_Run_Evidence.md`**

Paste this:

```md
# Test Run Evidence — Module 3

## Environment
- OS: Windows
- Browser: Chromium (Playwright-managed)
- Runner: Playwright Test

## Test Commands Used
- Run all tests:
  - `npx playwright test`
- Run TodoMVC tests:
  - `npx playwright test tests/todo.spec.js`
- Open HTML report:
  - `npx playwright show-report`

## Results Summary
- Baseline run: All tests passing (Hello + Navigation + TodoMVC).
- Intentional failure introduced (changed expected text in TodoMVC) to validate evidence capture.
- Evidence captured in `test-results/` (trace/screenshot/video generated on failure).
- Change reverted and tests returned to passing state.

## Notes
- Stable locators were preferred (e.g., href-based locator for navigation test).
- Avoided brittle text matching when punctuation/ellipsis could vary.