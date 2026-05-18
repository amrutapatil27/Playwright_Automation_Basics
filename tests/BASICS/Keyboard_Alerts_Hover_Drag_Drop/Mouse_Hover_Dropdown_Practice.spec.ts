import {test,expect} from "@playwright/test";
test('Handling mouse hover for option selection',async ({page})=>{
   await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');
  await page.getByTestId('nav-add-ons').hover();
 
const addons = await page .locator('[data-testid="nav-add-ons"] .submenu .submenu-item').allInnerTexts(); 

console.log(addons);
   await page.getByTestId('test-id-Taxi').click();
   //  Move mouse to the main body tag to clear the hover state
await page.locator('body').hover();
await page.waitForTimeout(5000);
   let myOutput=await page.getByTestId('hover-output');
   await expect(myOutput).toContainText('Taxi');
    //toContaionText will check match for Taxi
   //toHaveText will find for exact match
});