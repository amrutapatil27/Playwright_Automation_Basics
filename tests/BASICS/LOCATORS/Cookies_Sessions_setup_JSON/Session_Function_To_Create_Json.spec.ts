import { test } from '@playwright/test';
import path from 'path';

test("Save Session JSON", async ({ page, context }) => {
    console.log("Starting Login...");
    await page.goto("https://app.vwo.com/#login");

    await page.fill("#login-username", "opg73@singleuseemail.site");
    await page.fill("#login-password", "Wingify@4321");
    await page.click("#js-login-btn");

    console.log("Waiting for Dashboard...");
    // This will wait up to 30 seconds automatically
    await page.waitForURL("**/dashboard"); 

    const filePath = path.resolve("./user-session.json");
    await context.storageState({ path: filePath });

    console.log("✅ Session saved to:", filePath);
});