To skip the login screen, you use a feature called storageState. Instead of manually adding cookies one by one, Playwright allows you to "record" the entire authenticated state (cookies, local storage, and session data) into a JSON file and then "inject" it into your future tests.

This is the industry standard for testing large applications because it saves 5–10 seconds per test.

Phase 1: The Setup (Save the Cookies)
First, you create a "setup" test that actually performs the login once.

TypeScript
import { test as setup } from '@playwright/test';

setup('authenticate', async ({ page }) => {
  await page.goto('https://app.vwo.com/#login');
  
  // Perform actual login steps
  await page.getByLabel('Email address').fill('your-email@example.com');
  await page.getByLabel('Password').fill('your-password');
  await page.getByRole('button', { name: 'Log in' }).click();

  // Wait for the dashboard to load so we know the cookies are set
  await page.waitForURL('**/dashboard');

  // SAVE THE STATE: This captures all cookies and local storage
  await page.context().storageState({ path: 'playwright/.auth/user.json' });
});
Phase 2: Using the State (Skip the Login)
Now, in your real tests, you tell Playwright to use that JSON file. The browser will open already logged in.

TypeScript
import { test, expect } from '@playwright/test';

// Tell this file to use the saved session
test.use({ storageState: 'playwright/.auth/user.json' });

test('Check Dashboard Stats', async ({ page }) => {
  // When you go to this URL, you are ALREADY logged in!
  await page.goto('https://app.vwo.com/#/dashboard');

  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  
  // No need to fill username/password anymore.
});
Why this is the "Professional" way:
Speed: If you have 100 tests, and login takes 5 seconds, you just saved 8 minutes of execution time.

Less Flakiness: The login screen is a common point of failure. By skipping it, your tests are more focused on the actual features.

Clean State: Every test gets a fresh browser context, but with the specific "auth" cookies injected automatically at the start.

Important Note on Security
When you use storageState, Playwright saves your real session tokens into that .json file.

Pro Tip: Always add the folder (e.g., playwright/.auth/) to your .gitignore file so you don't accidentally push your login credentials to GitHub!