//16 May
import { test, expect } from '@playwright/test';

import path from 'path';

test.describe('Scroll to element Demo', () => {

test.beforeEach (async ({ page }) => {

await page.goto('https://app.thetestingacademy.com/playwright/widgets/scroll');

});

test('scroll to view', async ({ page }) =>{

await page.getByTestId('deep-anchor').scrollIntoViewIfNeeded();

await page.getByTestId('deep-anchor').click();

await page.waitForTimeout(5000);

// 2) scrollBy 1000 px
await page.evaluate(() => window.scrollBy (0, 1000));
await page.waitForTimeout(500);

// 3) jump to bottom
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await expect(page.getByTestId('cta-button')).toBeEnabled();

// 4) jump back to top
      await page.evaluate(() => window.scrollTo(0, 0));
 // 5) lazy list grows past 10 once visible

        await page.getByTestId('section-lazy').scrollIntoViewIfNeeded();
        await page.getByTestId('lazy-list').scrollIntoViewIfNeeded();


        const list = page.getByTestId('lazy-list').locator('li');

        const initialCount = await list.count();

        await list.last().scrollIntoViewIfNeeded();
        // poll until new items appended
        await expect.poll(async () => list.count(), {
            message: 'expected lazy list to load more items',
            timeout: 10_000,
        }).toBeGreaterThan(initialCount);

        const finalCount = await list.count();
        console.log(finalCount);


        await page.waitForTimeout(5000);

});

});

/*
Scroll to Element Notes: 
playwright does scrolling for you while finding element
Auto-scroll applies to: click, double click, tap,
 hover, fill, check, uncheck, selectOption, 
 setInputFiles focus, dragTo, press, 
 scrollIntoViewIfNeeded.

Skips auto-scroll: locator.evaluate, 
locator.boundingBox, locator.textContent, locator.innerText (read-only ops).

Force manual scroll only when:

Lazy-load triggers needed before 
click (rare - auto-scroll handles most)

Need to test scroll behavior itself

Use await locator.scrollIntoViewIfNeeded() explicitly 
*/