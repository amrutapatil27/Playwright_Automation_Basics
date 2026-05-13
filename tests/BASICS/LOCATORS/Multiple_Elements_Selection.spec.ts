import { test, expect } from '@playwright/test';

test.describe('Multiple Elements Handling', () => {

test('Basic Test Verify page title', async ({ page }) => {

// Navigate to a sample page

await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

const rightPanelLinks: string[] = await page.locator('a.list-group-item').allInnerTexts();

console.log(rightPanelLinks.length);

for (const linkText of rightPanelLinks) {

     if (linkText === 'My Account') {

        await page.getByText(linkText).first().click();
        break;
        }
  }
  //for loop can be avoided using filter as follow:
  await page.locator('a.list-group-item').filter({ hasText: 'Address Book' }).click();
  console.log("Address book is clicked");
});

});
/*
Actually, in the professional world, using .first() is often considered a "Code Smell" (a lazy habit).

Why? Because "the first one" might not be the one you actually wanted. If you meant to click the one in the sidebar, but a new link was added to the header, your test will click the header link and potentially fail or go to the wrong page.

The "Elite" way to do it:
Instead of .first(), you should scope your locator to the specific area of the page you care about. */