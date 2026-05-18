// 7 MAy 2026
import { test, expect } from '@playwright/test';

test('Select and Verify Employee name', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/");
    
    const empCard = page.locator('article.index-card').filter({ hasText: 'Web Table Employee Directory' });
    await empCard.getByRole('link', { name: 'Open page' }).click();
    
    const myUser = "Rohan.Mehta";
    // Locate the specific row for Rohan
    const myRow = page.locator('tr').filter({ hasText: myUser });
    
    // Use .check() instead of .click() for checkboxes—it's safer!
    await myRow.getByRole('checkbox').check();

    // Locate the element, don't extract the text yet
    const myOutput = page.locator('#selected-output');
    
    await expect(myOutput).toContainText(myUser);

    // Logging the actual value for your own visibility
    console.log(await myOutput.textContent());
});