import {test,expect} from '@playwright/test';
test('Verify first Test Case', async({page})=>{
    await page.goto('https://app.vwo.com');
await expect(page).toHaveTitle('Login - VWO');
const img_vwo = page.locator('img');
await expect(img_vwo).toBeVisible();

});