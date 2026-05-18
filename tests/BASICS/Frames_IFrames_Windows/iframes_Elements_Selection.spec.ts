//9 th may 2026 class
//When there is frame you need to work with framelocator
//  to access elements inside frame
import {test,expect} from "@playwright/test";

test('Handling frames and its inside elements', async ({ page }) => {

await page.goto('https://app.thetestingacademy.com/playwright/frames/'); 
let vehicleFrame = await page.frameLocator('#frame-one');
//use page.framelocator NOT page.locator
await vehicleFrame.locator('#RESULT_TextField-1').fill('Tata Punch');
await vehicleFrame.locator('#RESULT_TextField-2').fill('Amruta');
await vehicleFrame.locator('#RESULT_TextField-3').fill('MH-09-5599');
await vehicleFrame.locator('#RESULT_RadioButton-1').selectOption('Electric',);
await vehicleFrame.locator('#RESULT_TextField-4').fill('2015');
await vehicleFrame.locator('#RESULT_TextArea-1').fill('Amazing car!');
await vehicleFrame.getByRole('button',{name:'Submit Registration'}).click();
const output= await vehicleFrame.locator('#vehicle-output');
await expect(output).toBeVisible();
  await expect(output).toContainText('Tata Punch');
  await expect(output).toContainText('Amruta');
});



