import {test,expect,Locator} from "@playwright/test";
test('Drag and Drop', async ({ page }) => {

await page.goto('https://app.thetestingacademy.com/playwright/widgets/dnd');

//await locator('#card-write-spec').dragTo(page.locator('[data-status="in-progress"]'));

await page.locator('#card-review-pr-21').dragTo (page.locator('[data-status="in-progress"]'));

await page.locator('#card-review-pr-21').dragTo(page.locator('[data-status="review"]'));
// Manual mouse path for finicky DnD libraries
//This is another way to hadle
/*
let source: Locator = page.locator('#card-review-pr-21');

const sBox = (await source.boundingBox())!; //not null check

let target: Locator = page.locator('[data-status="review"]');

const tBox = (await target.boundingBox())!;

await page.mouse.move(sBox.x + sBox.width / 2, sBox.y + sBox.height / 2);

await page.mouse.down();

~

await page.mouse.move(tBox.x + tBox.width / 2, tBox.y + tBox.height / 2, { steps: 10 });

await page.mouse.up();
*/
});

//drag and drops are always flaky. Very rarely used. 
//Prefered is dragto()