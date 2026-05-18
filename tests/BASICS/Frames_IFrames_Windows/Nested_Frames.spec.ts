//9 may 2026
//https://app.thetestingacademy.com/playwright/frames/nested-iframes
import {test,expect,FrameLocator} from "@playwright/test";
test ('Handling nested frame elements',async ({page})=> {
    await page.goto("https://app.thetestingacademy.com/playwright/frames/nested-iframes");
    const framePact1:FrameLocator= page.frameLocator('#pact1');
    const framePact2:FrameLocator= framePact1.frameLocator('#pact2');
    const framePact3:FrameLocator= framePact2.frameLocator('#pact3');

    //Elements from frame
    framePact1.locator('#inp_val').fill('Automation testing');
    framePact2.locator('#jex').fill('Playwright');
    framePact3.locator('#glaf').fill('Typescript, Python');
    
});
