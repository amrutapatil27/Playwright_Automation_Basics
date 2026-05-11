# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Projects\Project_TTA_Bank\check_Balance.spec.ts >> Banking Transfer Test
- Location: tests\Projects\Project_TTA_Bank\check_Balance.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.innerText: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('h3.text-3xl')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e4]:
    - complementary [ref=e5]:
      - generic [ref=e6]:
        - img [ref=e7]
        - generic [ref=e10]: TTA Bank
      - navigation [ref=e12]:
        - button "Dashboard" [ref=e13] [cursor=pointer]:
          - img [ref=e14]
          - text: Dashboard
        - button "Transfer Funds" [active] [ref=e19] [cursor=pointer]:
          - img [ref=e20]
          - text: Transfer Funds
        - button "Expense Tracker" [ref=e23] [cursor=pointer]:
          - img [ref=e24]
          - text: Expense Tracker
        - button "Transactions" [ref=e27] [cursor=pointer]:
          - img [ref=e28]
          - text: Transactions
        - button "AI Support" [ref=e32] [cursor=pointer]:
          - img [ref=e33]
          - text: AI Support
        - button "Settings" [ref=e35] [cursor=pointer]:
          - img [ref=e36]
          - text: Settings
      - generic [ref=e39]:
        - generic [ref=e40]:
          - img "User" [ref=e41]
          - generic [ref=e42]:
            - generic [ref=e43]: Promod
            - generic [ref=e44]: test@example.com
        - button "Sign Out" [ref=e45] [cursor=pointer]:
          - img [ref=e46]
          - text: Sign Out
    - main [ref=e49]:
      - generic [ref=e50]:
        - heading "Transfer Funds" [level=1] [ref=e51]
        - button [ref=e53] [cursor=pointer]:
          - img [ref=e54]
      - generic [ref=e59]:
        - generic [ref=e60]:
          - button "Transfer Money" [ref=e61] [cursor=pointer]
          - button "Manage Beneficiaries" [ref=e62] [cursor=pointer]
        - generic [ref=e64]:
          - generic [ref=e65]:
            - generic [ref=e66]: From Account
            - combobox [ref=e67]:
              - 'option "Savings Account - 9938 (Available: $35,000)" [selected]'
              - 'option "Current Account - 8821 (Available: $15,000)"'
          - img [ref=e70]
          - generic [ref=e72]:
            - generic [ref=e73]: To Beneficiary
            - generic [ref=e74]:
              - combobox [ref=e75]:
                - option "Sarah Smith (Chase) - 1234567890" [selected]
                - option "Landlord (Wells Fargo) - 0987654321"
              - button "Add New Beneficiary" [ref=e76] [cursor=pointer]:
                - img [ref=e77]
          - generic [ref=e78]:
            - generic [ref=e79]: Amount
            - generic [ref=e80]:
              - generic:
                - generic: $
              - spinbutton [ref=e81]: "5000"
            - paragraph [ref=e82]: "Max available: $35,000"
          - generic [ref=e83]:
            - generic [ref=e84]: Note (Optional)
            - textbox "e.g. Rent for October" [ref=e85]: Rent for May 2026
          - button "Continue" [ref=e86] [cursor=pointer]
  - generic [ref=e87]: $0k
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Banking Transfer Test', async ({ page }) => {
  4  |   // 1. Setup and Login
  5  |   await page.goto('https://tta-bank-digital-973242068062.us-west1.run.app/');
  6  |   await page.getByRole('button', { name: 'Sign Up' }).click();
  7  |   await page.getByPlaceholder('John Doe').fill('Promod');
  8  |   await page.getByPlaceholder('you@example.com').fill('test@example.com');
  9  |   await page.getByPlaceholder('••••••••').fill('admin');
  10 |   await page.getByRole("button", { name: "Create Account" }).click();
  11 | 
  12 |   // 2. CAPTURE INITIAL BALANCE
  13 |   // We use the 'text-3xl' class to target the main balance heading specifically
  14 |   const rawAmount = await page.locator('h3.text-3xl').innerText();
  15 |   const initialAmount: number = parseFloat(rawAmount.replace(/[$,]/g, ""));
  16 |   
  17 |   console.log("Initial Balance captured:", initialAmount);
  18 | 
  19 |   // 3. PERFORM TRANSFER
  20 |   await page.getByRole("button", { name: "Transfer Funds" }).click();
  21 |   await page.getByPlaceholder('0.00').fill('5000');
  22 |   await page.getByPlaceholder('e.g. Rent for October').fill('Rent for May 2026');
  23 |   
  24 |   // Clicking the 'Transfer' button inside the form to submit
  25 |   // Adjust the name if the button text is 'Send' or 'Confirm'
  26 |   await page.getByRole("button", {name:"Transfer Funds"}).click();
  27 | 
  28 |   // Calculate what the balance SHOULD be
  29 |   const expectedBalance: number = initialAmount - 5000;
  30 |   console.log("Expected Balance should be:", expectedBalance);
  31 | 
  32 |   // 4. CAPTURE NEW BALANCE & COMPARE
  33 |   // We re-locate the same 3xl heading to get the updated UI value
> 34 |   const newRawAmount = await page.locator('h3.text-3xl').innerText();
     |                                                          ^ Error: locator.innerText: Test timeout of 30000ms exceeded.
  35 |   const actualNewBalance: number = parseFloat(rawAmount.replace(/[$,]/g, ""));
  36 | 
  37 |   console.log("Actual Balance in UI after transfer:", actualNewBalance);
  38 | 
  39 |   // Verification
  40 |   expect(actualNewBalance).toBe(expectedBalance);
  41 | });
```