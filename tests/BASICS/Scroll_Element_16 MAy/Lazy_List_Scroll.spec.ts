//16 MAy
// Lazy elements means as you scroll more elements 
// will be loading

import { test, expect } from '@playwright/test';
import path from 'path';

test('scroll to view loading more options', async ({ page }) =>{

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/scroll');
    await page.getByTestId('deep-anchor').scrollIntoViewIfNeeded();
    await page.getByTestId('deep-anchor').click();
    await page.waitForTimeout(5000);
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