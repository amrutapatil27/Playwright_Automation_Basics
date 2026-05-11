import { test, expect } from '@playwright/test'
import * as allure from "allure-js-commons";//it comes with allure package


test('Verify that the login works', async ({ page }) => {
//need to add these lines so that tests are grouped accordingly. 
// Its a good practice but not mandatory

await allure.epic("VWO Login Test");
await allure.description("Verif that Login page works");
await allure.feature("Login Functionality");
await allure.story("Valid Login");
await page.goto("https://app.vwo.com/#login");

await page.waitForTimeout(2000);

await page.fill("#login-username", "opg73@singleuseemail.site");

await page.fill("#login-password", "Wingify@4321");

await page.waitForTimeout(1500);

await page.click("#js-login-btn");

// Wait for login to actually complete before snapshotting storage

// otherwise the auth cookie isn't set yet and the saved state is empty.

// Wait for login to actually complete before snapshotting storage

// otherwise the auth cookie isn't set yet and the saved state is empty.

//await page.waitForURL(/#\/(dashboard | home)/, { timeout: 15000 });

await page.waitForTimeout(3000);

await expect(page).toHaveTitle("Dashboard");

});