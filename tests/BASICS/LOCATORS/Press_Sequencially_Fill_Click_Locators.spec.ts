import { test, expect } from '@playwright/test';

test("Fill in locator using pressSequentially", async ({ page }) => {

await page.goto("https://awesomeqa.com/practice.html");
await page.locator('[name="firstname"]').pressSequentially("the testing academy", { delay: 200 });

await page.waitForTimeout(5000); 
await page.goto("https://app.vwo.com/login");

await page.goBack(); //to go back to previous page
//Simillarly there are:
//page.goBack()
//page.goForward()
//page.reload()

await page.waitForTimeout(5000); 
/*
locator('input[name="lastname"]')
locator('input[name="firstname"]')
getByText('Female')
getByText('Years of Experience 1 2 3 4 5 6')
locator('#exp-2')
locator('#datepicker')
locator('#profession-1')
locator('#tool-0')//automation tool
locator('#profession-1')//automation tester
locator('#continents')
*/

});