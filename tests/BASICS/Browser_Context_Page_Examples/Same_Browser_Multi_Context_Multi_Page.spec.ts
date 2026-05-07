import { test, expect } from "@playwright/test";

test("Two users interact", async ({ browser }) => {
// instead of page we use async({browser})
//We use it to create multiple context(windows) from same browser
let adminContext = await browser.newContext();
let adminPage = await adminContext.newPage();
let guestContext = await browser.newContext();
let guestPage = await guestContext.newPage();
await adminPage.goto("https://app.vwo.com/#login");
await guestPage.goto("https://app.vwo.com/#dashboard/home");
await adminPage.pause();
await guestPage.pause();
});