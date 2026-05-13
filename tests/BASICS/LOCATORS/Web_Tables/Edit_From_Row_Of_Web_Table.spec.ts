//Imagine a table of "Users" where 
// you need to click "Edit" 
// for a user named "Alex".
import { test, expect } from '@playwright/test';

test('Handle dynamic web table', async ({ page }) => {
  await page.goto('https://example.com/admin/users');

  // 1. Define the unique anchor (The User's Name or Email)
  const targetUser = 'Alex Rivera';

  // 2. Create a scoped locator for that specific row
  // We use .filter() to narrow down all <tr> elements to the one containing our text
  const userRow = page.locator('tr').filter({ hasText: targetUser });

  // 3. Perform an action inside that row
  // Playwright only looks for this button INSIDE the userRow
  await userRow.getByRole('button', { name: 'Edit' }).click();

  // 4. Assertion: Verify we navigated to the correct edit page
  await expect(page).toHaveURL(/.*edit-user/);
});