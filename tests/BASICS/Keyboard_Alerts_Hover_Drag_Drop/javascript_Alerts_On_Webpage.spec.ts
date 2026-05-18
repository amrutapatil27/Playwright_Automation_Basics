// 10 May 2026
import { test, expect } from '@playwright/test';

test.describe('Javascript Alerts', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  });

  test('JS Alert accept 1', async ({ page }) => { 
    page.once('dialog', async dialog => {
        console.log('Alert Type:', dialog.type());
        console.log('Alert Message: ' + dialog.message());
        expect(dialog.message()).toBe('I am a JS Confirm');
        await dialog.accept();
    });
    
    // Using filter correctly here
    await page.locator('button').filter({ hasText: 'Click for JS Confirm' }).click();
  });

  test('JS Alert accept 2', async ({ page }) => {
    page.once('dialog', async dialog => {
        console.log('Alert type:', dialog.type());
        expect(dialog.type()).toBe('confirm');
        console.log('Alert message:', dialog.message());
        expect(dialog.message()).toBe('I am a JS Confirm'); 
        await dialog.accept(); 
    });

    // ✅ FIXED: Changed to valid filter syntax
    await page.locator('button').filter({ hasText: 'Click for JS Confirm' }).click();

    await expect(page.locator('#result')).toHaveText('You clicked: Ok');
  });

  test('JS Alert accept 3', async ({ page }) => {
    const inputText = "Welcome to playwright";
    
    page.once('dialog', async dialog => {
        console.log('Alert type:', dialog.type());
        expect(dialog.type()).toBe('prompt');
        expect(dialog.defaultValue()).toBe('');
        await dialog.accept(inputText);
    });

    // ✅ FIXED: Moved these lines OUTSIDE the page.on block
    await page.locator('button').filter({ hasText: 'Click for JS Prompt' }).click();

    await expect(page.locator('#result')).toHaveText(`You entered: ${inputText}`);
  });
});