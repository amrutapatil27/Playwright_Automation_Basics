// 21 May 2026
import { test, expect } from '@playwright/test';
import path from 'path'; // ✅ Added native module for platform-agnostic file paths

test.describe('FileUpload handling', () => {

  // Create a relative path anchor to bypass hardcoded 'D:/...' drives
  // This looks for 'myTestFileUpload.txt' inside a folder called 'fixtures' at your project root
  const uploadFilePath = path.resolve(__dirname, '../../fixtures/myTestFileUpload.txt');

  test('locate FileUpload and upload', async ({ page }) => {
    await page.goto('https://awesomeqa.com/practice.html');
    
    // ✅ Uses a portable path reference instead of an absolute local system drive
    await page.locator("#photo").setInputFiles([uploadFilePath]);
    
    // Explicit assertion verifying the input successfully registered the file stream
    await expect(page.locator("#photo")).toHaveValue(/myTestFileUpload.txt/);
  });

  test('Test file upload on web page', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/upload');   
    
    // ✅ Eliminated early hardcoded sleep block (Playwright auto-waits natively)
    await page.locator("#file-upload").setInputFiles([uploadFilePath]);
    await page.getByRole("button", { name: "Upload" }).click();
    
    // Standard validation
    await expect(page.locator('#uploaded-files')).toContainText('myTestFileUpload.txt');
  });

});