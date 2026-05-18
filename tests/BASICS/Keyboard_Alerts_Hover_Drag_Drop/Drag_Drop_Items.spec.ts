//10 may
import { test, expect } from '@playwright/test';

test('Drag and Drop', async ({ page }) => { 

await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

const columnA = page.locator('#column-a');

const columnB = page.locator('#column-b');

// Verify initial state

await expect(columnA).toHaveText('A');

await expect(columnB).toHaveText('B');

await columnA.dragTo(columnB);

//Expect result post dragging:
await expect(columnA).toHaveText('B');

await expect(columnB).toHaveText('A');

await page.waitForTimeout(5000);
});
/* 
  Notes: 
  dragTo() is the first thing to try. 
  Clean API, handles 85% of cases. 
  For straightforward HTML5 drag-and-drop 
  or libraries like react-dnd, this works.
   On the herokuapp site specifically, 
   it sometimes flakes because the page uses 
   raw HTML5 drag events that browsers handle 
   inconsistently in headless mode.
*/
