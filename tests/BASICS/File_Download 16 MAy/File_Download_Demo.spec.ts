//16 MAy 2026
import { test, expect } from '@playwright/test';
import fs from 'fs';

test.describe('File Upload Demo - TestingAcademy', () => {

test.beforeEach (async ({ page }) => {

  await page.goto('https://app.thetestingacademy.com/playwright/widgets/upload-download');

});

test('demo: upload file using setInputFiles', async ({ page }) =>{

   const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByTestId('download-text').click()
]);
    expect(download.suggestedFilename()).toContain('tta-notes');
    await download.saveAs('./download/tta-notes.txt');
// static download
  /*  const [staticDownload] = await Promise.all([
    page.waitForEvent('download'),
    page.getByTestId('download-static').click()
    ]);
     await staticDownload.saveAs('out/' + staticDownload.suggestedFilename());
     */
     });
 

});