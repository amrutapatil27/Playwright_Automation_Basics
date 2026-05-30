// 14 May 2026
import { test, expect } from '@playwright/test';

const URL = 'https://www.patternfly.org/components/file-upload/multiple-file-upload/';

// ✅ Fixed: Added missing arrow syntax (=>)
test.describe('FileUpload handling', () => {

    test.beforeEach(async ({ page }) => { 
        await page.goto(URL); 
    });

    test('locate FileUpload and upload', async ({ page }) => {
        // ✅ Fixed: Removed '#' symbol from the 'div' tag selector
        const fileInputLocator = page.locator("div.pf-v6-c-multiple-file-upload input[type='file']");
        
        // Inject multiple file streams directly from runtime buffer memory
        await fileInputLocator.setInputFiles([
            {
                name: 'Test_File2.jpg', // Switched extension to match the mimeType layout
                mimeType: 'image/jpeg',
                buffer: Buffer.from('MOCK_IMAGE_DATA_STREAM')
            },
            {
                name: 'Test_File1.txt',
                mimeType: 'text/plain', // Normalized standard text mimeType mapping
                buffer: Buffer.from('this is test')
            }
        ]);

        // ✅ Fixed: Added a dot (.) instead of a space to properly chain compound classes
        // (Assuming this button submits or clears your upload form state)
        await page.locator(".pf-v6-c-button.pf-m-secondary").first().click();
        
        // Extra visual verification padding to let execution render updates
        await page.waitForTimeout(3000);
    });
});