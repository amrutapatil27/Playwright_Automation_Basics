import { test, expect, Locator } from '@playwright/test';

const URL = 'https://selectorshub.com/xpath-practice-page/';

test.describe('Shadow handling', () => {

    test.beforeEach (async ({ page }) => {

      await page.goto (URL);

    });

  test('Selector hub practice page shadow DOM assignment', async ({ page }) => {
       
       await page.getByTitle('user name field').fill('Test User');
       await page.getByPlaceholder('Enter pizza name').fill('Margarita');
       //await page.getByTitle('user password field').fill('pwd');
       //Password field (Inside a CLOSED shadow root -> Requires a workaround)
    
    // WORKAROUND A: Using Keyboard Navigation (Easiest if fields are consecutive)
    // Since we are already focused on the Username field, pressing 'Tab' moves focus into the password field!
    await page.press('input#kils', 'Tab'); 
    await page.keyboard.type('pwd');
       await page.waitForTimeout(5000);
  });
});