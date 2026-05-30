//19 May
import { test, expect } from '@playwright/test';

test.describe('Expect Assertions TestingAcademy', () => {
    //First type: Value Assertions: 
    test ('Value assertions', async ({ page }) => {
    expect(1 + 2).toBe(3);
    // expect(1 + 2).toBe(4);
    expect(false).toBeFalsy(); 
    expect(true).toBeTruthy();
    expect(null).toBeNull();
    expect(34).toBeGreaterThan (11);
    expect([1, 2, 3]).toEqual([1, 2, 3]);
    expect({ role: 'admin' }).toEqual({ role: 'admin' });
    expect({ age: 20, role: 'admin' }).toEqual({ role: 'admin', age: 20 });
    //here key value is imp. sequence is not imp

  });
  test('2 Locator-based assertions', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter.html');

    const heading = page.getByText('multiple element filters', { exact: true });
    await expect(heading).toBeVisible(); 
    await expect(heading).toContainText('filter', { timeout: 10000 });
    const email = page.getByRole('textbox', { name: 'Email Address' });
    await expect(email).toHaveAttribute('id', 'email'); 
    await expect(email).toHaveAttribute('type', 'email'); 
});
//soft assertions
test('3 soft assertions and Negation', async ({ page }) => {

await page.goto('https://app.thetestingacademy.com/playwright/tables/practice#page');
const firstName = page.getByLabel('First name');
// Soft: each line records its own failure; test continues either way.
await expect.soft(firstName).toHaveAttribute('id','first-name');
await expect.soft(firstName).toBeVisible();
await expect.soft(firstName).toHaveValue('');

// Final hard assertion still runs after the soft block.
await expect(firstName).toBeEnabled();

//Negation
await page.goto('https://app.thetestingacademy.com/playwright/webtable.html');
await expect(page.locator('#error')).not.toBeVisible();
const title = await page.title();
expect(title).not.toContain('error');

});
});

/* 
String assertions (text content, containment)
Visibility and state checks
Element count assertions
URL and page title assertions
Attribute assertions
Value assertions for inputs
Inverse assertions (NOT)
Soft assertions (non-blocking) rarely used
*/