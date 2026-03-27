# AI Automation Candidates — Cart Persistence (H&M)

**Source:** AI-assisted ideas based on a real exploratory finding + bug report  
**Rule:** No requirements invented. Unknown expectations marked “Needs confirmation.”  
**Goal:** Identify stable automation candidates (smoke/regression) and flag risky/flaky ones.

## QA Selection

### Automate Now (3)
1. **Guest user can add an item to cart**  
   - **Why it matters:** Confirms the core shopping flow works before testing persistence.  
   - **Locator strategy:** `getByRole` for product links/buttons, selectors, and add-to-cart action  
   - **Stability rating:** High  
   - **Expectation:** Expected behavior

2. **Cart shows added item immediately after add-to-cart action**  
   - **Why it matters:** Verifies the item is actually present in the cart at the start of the flow.  
   - **Locator strategy:** `getByRole` for cart access; `data-testid` for cart line items if available  
   - **Stability rating:** High  
   - **Expectation:** Expected behavior

3. **Guest cart retains item after navigating away and returning during same session**  
   - **Why it matters:** Confirms cart state survives normal browsing behavior.  
   - **Locator strategy:** `getByRole` for navigation links and cart access  
   - **Stability rating:** High  
   - **Expectation:** Needs confirmation

### Automate Later (3)
1. **Guest cart retains item after page refresh during same session**  
   - **Why it matters:** Checks whether cart state survives a basic browser refresh.  
   - **Locator strategy:** `getByRole` or `href` for cart navigation; `data-testid` for line items  
   - **Stability rating:** High  
   - **Expectation:** Needs confirmation

2. **Guest cart state after ~45 minutes inactivity**  
   - **Why it matters:** Directly targets the reported issue.  
   - **Locator strategy:** `getByRole` for cart access and cart item assertions; `data-testid` if available  
   - **Stability rating:** Medium  
   - **Expectation:** Needs confirmation

3. **Guest cart behavior after inactivity followed by page refresh**  
   - **Why it matters:** Helps isolate whether the issue is timeout-related or refresh-related.  
   - **Locator strategy:** `getByRole` for cart and empty/cart item states; `data-testid` if available  
   - **Stability rating:** Medium  
   - **Expectation:** Needs confirmation

### Not a Good Automation Candidate (2)
1. **Guest cart behavior after inactivity followed by full browser reopen/session restore**  
   - **Why it matters:** Could help distinguish tab inactivity from broader session persistence.  
   - **Locator strategy:** `href` or `getByRole` for returning to site/cart; `data-testid` for cart contents  
   - **Stability rating:** Low  
   - **Expectation:** Needs confirmation

2. **User receives a clear cart-empty or session-expired message when cart is not retained**  
   - **Why it matters:** Useful only if cart loss is intended and messaging is part of the product behavior.  
   - **Locator strategy:** `getByRole` for alert/status text or empty-cart message; `data-testid` if available  
   - **Stability rating:** Medium  
   - **Expectation:** Needs confirmation

## Notes
- Any test marked “Needs confirmation” requires product clarification before becoming a reliable regression test.
- Prefer stable selectors and short flows for early automation.