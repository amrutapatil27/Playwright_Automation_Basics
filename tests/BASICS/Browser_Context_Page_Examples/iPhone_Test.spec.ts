/* Playwright already has a "phonebook" of all
 mobile device settings? Instead of typing out 
 the userAgent and viewport manually, 
 you can just use the built-in devices list.
 
The "Pro" version of your test:*/
import { test, devices } from "@playwright/test";

test('mobile context with built-in settings', async ({ browser }) => {
    // This pulls all the correct settings for an iPhone 11 automatically!
    const context = await browser.newContext({
        ...devices['iPhone 11'],
    });

    const page = await context.newPage();
    await page.goto("https://app.vwo.com/login#");
    await page.pause();
});