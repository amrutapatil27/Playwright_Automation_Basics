import { test, expect } from "@playwright/test"; // 1. Corrected package name

test("Handling Check box in Web Table", async ({ page }) => {
  await page.goto("https://app.thetestingacademy.com/playwright");
  // ✅ Most Recommended
await page.getByRole('link', { name: 'Web Table Directory' }).click();
  // 2. Exact match check: Ensure the space matches the HTML (Meera. Rao)
  const myUser = "Meera.Rao"; 

  // 3. CSS Syntax: Attribute values MUST be in quotes if they contain dots or spaces
  const row = page.locator(`tr[data-username="${myUser}"]`);

  await row.getByRole('checkbox').check();
  
  // 4. Always add an assertion for an SDET interview!
  await expect(row.getByRole('checkbox')).toBeChecked();
});