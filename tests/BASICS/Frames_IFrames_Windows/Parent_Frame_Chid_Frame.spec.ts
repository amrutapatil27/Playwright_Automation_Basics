//9 MAy 
//Main frame-> inner frame (parent ->child)
// child frame locator need to be accessed with parent frame locator only
import { test, expect, FrameLocator } from '@playwright/test';

test('Basic Web Test Verify Page Title', async ({ page }) => {

  await page.goto('https://selectorshub.com/iframe-scenario/');

  // 1. Correctly chain the nested frames (Parent -> Child -> Grandchild)
  let frame1: FrameLocator = page.frameLocator('#pact1').first();
  let frame2: FrameLocator = frame1.frameLocator('#pact2');
  let frame3: FrameLocator = frame2.frameLocator('#pact3');

  // 2. Interact with the corrected element IDs inside the frames
  // Input inside Frame 1 (First Name / Entity)
  await frame1.locator('#inp_val').fill('Aishwarya Rai');

  // Input inside Frame 2 (Work / Title)
  await frame2.locator('#jex').fill('Wife'); 

  // Input inside Frame 3 (Destiny / Tech)
  await frame3.locator('#glaf').fill('Playwright');

  // 3. Extracting the header text 
  // Note: The main h3 text on this practice page belongs to the root page, 
  // not inside 'frame1'.
  const headerText = await page.locator('h3').innerText(); 
  console.log('Main Page Header Text is:', headerText);
  
  // Clean Web Assertion check
  await expect(page.locator('h3')).toContainText('Memory Test');
});