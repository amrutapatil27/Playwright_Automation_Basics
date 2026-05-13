# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: BASICS\Practice_Page_Assignments\QA_Profile.spec.ts >> Enter data in QA Form
- Location: tests\BASICS\Practice_Page_Assignments\QA_Profile.spec.ts:3:5

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('heading', { name: 'QA Profile Form' }).getByRole('link', { name: 'Open Page' })

```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test";
  2  | import { link } from "node:fs";
  3  | test("Enter data in QA Form",async({page})=>{
  4  |     await page.goto("https://app.thetestingacademy.com/playwright/");
  5  |     const qaForm=page.getByRole('heading', { name: 'QA Profile Form' })
> 6  |     const openLinkQAForm= qaForm.getByRole('link',{name:'Open Page'}).click();
     |                                                                       ^ Error: locator.click: Test ended.
  7  |     //await page.getByRole("link", {name:"Open Page"}).click();
  8  |     // ✅ Best Practice (User-Centric)
  9  | const heading = page.getByRole('heading', { name: /QA.*Profile Form/i });
  10 | expect (heading).toHaveText("QA Profile Form");
  11 | 
  12 | });
  13 | 
```