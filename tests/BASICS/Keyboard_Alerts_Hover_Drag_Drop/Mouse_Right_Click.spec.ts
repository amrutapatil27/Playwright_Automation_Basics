import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Right Click', async ({ page }) => {

await page.goto('https://app.thetestingacademy.com/playwright/widgets/context-menu'); 
//await page.locator('span.context-menu-one').first().click({ button: 'right' });
await page.getByTestId('ctx-target').click({button:'right'});
//To fetch all the item in right click menu:
const allOptions: string[] = await page.locator('ul.context-menu-list span').allInnerTexts();

console.log(allOptions);
//await page.getByText('Copy', { exact: true }).first().click();
await page.getByRole('button',{name:'copy'}).click();

await page.waitForTimeout(5000); 

//second frame:
await page.getByTestId('ctx-target-2').click({button:'right'});
await page.getByRole('button',{name:'edit'}).click();
await page.waitForTimeout(5000); 
//third frame:
await page.getByTestId('ctx-target-3').click({button:'right'});
await page.getByRole('button',{name:'copy'}).click();
await page.waitForTimeout(5000); 

});