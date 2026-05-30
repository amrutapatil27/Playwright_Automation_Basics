//16 May 2026
import { test, expect, Download } from '@playwright/test';
import fs from 'fs';
test.describe('File Upload Demo - TestingAcademy', () => {
    test.beforeEach (async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/upload-download');
});

test('demo: Download file using setInputFiles', async ({ page }) =>{
const [download]  = await Promise.all([
        page.waitForEvent('download'),
        page.getByTestId('download-text').click()
    ]); 

    expect(download.suggestedFilename()).toContain ('tta-notes');
    await download.saveAs('./download/tta-notes.txt');
 });
});         