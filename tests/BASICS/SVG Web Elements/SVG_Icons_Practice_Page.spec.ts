//12 May 2026
import {test,expect,Locator} from "@playwright/test";

const URL = 'https://app.thetestingacademy.com/playwright/widgets/svg'; // replace with t

test.describe('SVG handling', () => {

test.beforeEach (async ({ page }) => {

await page.goto (URL);

});

test('locate SVG root and assert visible', async ({ page }) => {

//await page.getByTitle('Search for products, brands and more').fill('macmini');
const circleShape: Locator = page.locator('#circle-blue');
await circleShape.click();
await page.getByRole('button', { name: /Q3 bar/ }).click();
// /Q3 bar/ means buttom which contains text Q3 bar
await page.getByRole('radio', { name: '4 stars' }).click();
await page.waitForTimeout(5000);

let allBars = await page.locator('.bar').all();

for (const bar of allBars) {

        const q = await bar.getAttribute('data-quarter');
    //.if.loop logic if there is any condition...
        await bar.click();
        console.log(q);

    }
});

});