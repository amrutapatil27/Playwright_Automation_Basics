import { test,expect } from "@playwright/test";
test("locators getByRole", async ({ page }) => {

await page.goto("https://app.vwo.com/#login");

let pwdText=page.getByRole('textbox', { name: 'Password' });
let userNameTxt= page.getByRole('textbox', { name: 'Email address' });
let savePwdCheck= page.locator('.checkbox-radio-icon > use').first();
let loginBtn= page.getByRole('button', { name: 'Sign in', exact: true });
let errorMsg= page.getByText('Your email, password, IP');
let ErrorMessage="Your email, password, IP address or location did not match";
await userNameTxt.fill("invalid");
await pwdText.fill("Invalid");
await savePwdCheck.check();
await loginBtn.click();
await errorMsg.isVisible();
const actualText = await errorMsg.textContent(); 
expect(actualText).toBe(ErrorMessage);
page.close();

});