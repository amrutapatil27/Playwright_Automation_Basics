import { test, expect, Locator } from '@playwright/test';
test.describe('FileUpload handling', () => {
//First test case
test('locate FileUpload and upload', async ({ page }) => {
    await page.goto('https://awesomeqa.com/practice.html');
    await page.locator("#photo").setInputFiles(['D:/Playwright_Automation_Basics/tests/BASICS/File Upload Examples/myTestFileUpload.txt']);
    await page.waitForTimeout(5000);

});

//another test for file upload:
test('Test file upload on web page',async({page})=>{
  await page.goto('https://the-internet.herokuapp.com/upload');   
  await page.waitForTimeout(3000);
  await page.locator("#file-upload").setInputFiles(['D:/Playwright_Automation_Basics/tests/BASICS/File Upload Examples/myTestFileUpload.txt']);
  await page.getByRole("button", { name: "Upload" }).click();
  await expect(page.locator('#uploaded-files')).toContainText('myTestFileUpload.txt');
  await page.waitForTimeout(3000);
});

});