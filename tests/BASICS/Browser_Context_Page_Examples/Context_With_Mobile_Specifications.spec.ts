import { test, expect } from "@playwright/test";
 import { chromium,Browser, BrowserContext } from "playwright";
test('mobile context', async ({ browser }) => {

const iPhone = {
viewport: { width: 375, height: 667},
userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)',
deviceScaleFactor: 2,
isMobile: true,
hasTouch: true,
};

const context = await browser.newContext (iPhone);
const page = await context.newPage();

await page.goto("https://app.vwo.com/login#");
await page.pause();
await context.close();

});

