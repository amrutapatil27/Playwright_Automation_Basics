import { chromium, Browser, BrowserContext, Page } from '@playwright/test'; // Use @playwright/test

async function run() {
    // LEVEL 1: Launch browser
    let browser: Browser = await chromium.launch({ headless: false });
    console.log("Browser Launched");

    // LEVEL 2: Create context - REMOVED the '-' before the comment
    let context: BrowserContext = await browser.newContext();
    console.log("Context created");

    // LEVEL 3: Open page
    let page: Page = await context.newPage();
    await page.goto('https://google.com');
    console.log("Page Title is: " + await page.title());
    //clean up in reverse order
    await page.close();
    await context.close();
    await browser.close();
}
run();
// **IMP NOTES:
/* 
1. What the code does (The Layers)
Think of Playwright like a Russian Nesting Doll.
 Each layer exists inside the other, 
 and this code sets them up one by one.

Layer 1: The Browser (chromium.launch)
What it is: This starts the actual physical browser
 process (like chrome.exe).

Performance: This is the most "expensive" 
part of your code. It takes time and RAM to launch.

The Code: let browser = await chromium.
launch({ headless: false });

Layer 2: The Browser Context (browser.newContext)
What it is: This is like an Incognito Window. 
It’s a completely fresh session.

Privacy: It has its own cookies, local storage,
 and cache. If you open two contexts, they cannot see each other's data.

The Code: let context = await browser.newContext();

Layer 3: The Page (context.newPage)
What it is: This is a single Tab inside
 that context.

The Code: let page = await context.newPage();

2. Why is this used? (The Benefits)
You might wonder: "Why not just use 
page = await chromium.launch().newPage()?" 
Professional automation uses the 3-layer
 approach for two main reasons:

Speed: You can launch the browser once 
at the start of your test suite, and then 
create a new Context for every single test.
 Creating a context takes milliseconds,
  while launching a browser takes seconds.

Parallelization: You can run 5 different 
tests at the same time in 5 different Contexts.
 Because they are isolated, one test won't 
 accidentally log out the user in another test.

Mobile Emulation: Contexts allow you to 
pretend to be a mobile device. You can tell 
the Context to have a specific screen size or
 GPS location, and every Page inside it will 
 follow those rules.

3. When should you use this specific code?
You use this "manual" setup when you are 
writing scripts, scrapers, or utility tools.

Data Scraping: When you need to log into 
a site once and open 20 different tabs 
to pull data.

Non-Test Frameworks: When you aren't using 
the standard Playwright Test runner
 (@playwright/test) and are just writing a
  raw TypeScript or JavaScript file 
  to perform an action.

Session Reuse: When you want to save a 
"Login State" (cookies) from one context
 and load it into another to skip the login 
 screen in future runs.*/