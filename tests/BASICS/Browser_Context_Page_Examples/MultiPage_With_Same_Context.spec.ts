//same context used to open multiple pages.
//pages->tab. new page, new tab.in Same Context->same Browser
    import { chromium,Browser, BrowserContext } from "playwright";

async function multiTabTest() {

let browser:Browser = await chromium.launch({ headless: false });

let context:BrowserContext = await browser.newContext();

// Tab 1 (new Page is new tab)

let page1 = await context.newPage();

await page1.goto("https://app.vwo.com/#login");

console.log("Tab 1: Dashboard");

// Tab 2 - same context, shares cookies with Tab 1

let page2 =await context.newPage();

await page2.goto("https://app.vwo.com/#dashboard");

console.log("Tab 2: Settings");

}

multiTabTest();
// To run this: Go to Terminal
//Run this command: 
// npx tsx .\tests\BASICS\MultiPage_With_Same_Context.spec.ts 

//Output: Same browser two tabs will open for login and dashboard
 
/* IMP Note: In Playwright Test Framework - It's Automatic

When you write Playwright tests using @playwright/test,
 you DON'T manually create browser/context/page. 
 The framework does it for you via fixtures
*/