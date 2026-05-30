//17 May
import { test, expect} from '@playwright/test';

test.describe('URL & title Assertions - TestingAcademy', () => {

    test('URL & title assertions', async ({ page }) => {

await page.goto('https://app.thetestingacademy.com/playwright/widgets/calendar');
await page.getByTestId('trigger-depart').click();
await expect(page).toHaveTitle('Calendar Date Picker — The Testing Academy');
await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/widgets/calendar');
await expect(page).toHaveTitle(/Calendar/); //partial string match
const appUrl = page.url();
expect(appUrl).toContain('thetestingacademy');

});
test('Visible . enabled . disabled checked', async ({ page }) => {

await page.goto('https://app.thetestingacademy.com/playwright/tables/practice');

const agreeCheckbox = page.getByRole('checkbox', { name: /UFT/ });
const submitBtn = page.getByTestId('profile-submit');
await expect (agreeCheckbox).not.toBeChecked();
await expect(submitBtn).toBeVisible();
await expect(submitBtn).toBeEnabled();
await agreeCheckbox.check();
await expect(agreeCheckbox).toBeChecked();
await page.waitForTimeout(5000);

});

});