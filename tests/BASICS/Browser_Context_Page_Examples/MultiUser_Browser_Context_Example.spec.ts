import { chromium, Browser, BrowserContext, Page } from '@playwright/test'; // Use @playwright/test
async function multiUser(){
    let browser:Browser= await chromium.launch({headless:false});
    let adminContext= await browser.newContext();
    let adminPage=await adminContext.newPage();
    await adminPage.goto("https://app.vwo.com/login");
    console.log("Admin: on Login Page");

    let viewerContext= await browser.newContext();
    let viewerPage=await viewerContext.newPage();
    await viewerPage.goto("https://app.vwo.com/login");
    console.log("Viewer: On Login Page");
}
multiUser();
// *Note: 
/*
Since this is a .ts file, you cannot run it
 with standard node. You must use a 
 TypeScript executor.

 npx tsx tests/BASICS/Browse_Context_Pages.spec.ts
*/