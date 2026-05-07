import { test, expect } from '@playwright/test';
//Referer concept was used mostly in banking applications or old days applications
//rarely used. referer parameter is optional
test("navigate with custom referer", async ({ page }) => {

// Tell the server "user came from Google"

await page.goto("https://app.com/landing", {

referer: "https://google.com/search?q=testing+academy"

});

console.log("Page loaded with Google as referer");

console.log("URL:", page.url());

});