//9 may
//If there are no ids to frames then
//  to locate them you can use names.e.g:('frame[name="main"]')
import { test, expect } from '@playwright/test';

test('Interacting with old school frameset layout', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/frames/');

    // 1. Define your frame pointers using the name attribute
    const topFrame = page.frameLocator('frame[name="main"]');
    const navbarFrame = page.frameLocator('frame[name="navbar"]');
    const contentFrame = page.frameLocator('frame[name="content"]');

    // 2. Interact with a link inside the Navigation Bar frame
    // (e.g., clicking a menu link)
    await navbarFrame.getByRole('link', { name: 'Courses' }).click();

    // 3. Extract text or interact with fields inside the Main Content frame
    const welcomeText = await contentFrame.locator('h1').innerText();
    console.log('Main Content Header:', welcomeText);

    // 4. Extract something from the Top Banner frame
    const bannerText = await topFrame.locator('.banner-title').textContent();
});