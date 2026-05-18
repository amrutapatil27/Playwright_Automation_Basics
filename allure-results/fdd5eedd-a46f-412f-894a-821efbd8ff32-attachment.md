# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: BASICS\LOCATORS\DropDown_From_Practice_Page.spec.ts >> Select options from Drop Down Box
- Location: tests\BASICS\LOCATORS\DropDown_From_Practice_Page.spec.ts:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('option', { name: 'Mid-level(4-6 years)' })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - complementary "Practice navigation" [ref=e3]:
    - generic [ref=e4]:
      - link "T The Testing Academy" [ref=e5] [cursor=pointer]:
        - /url: ../index.html
        - generic [ref=e6]: T
        - strong [ref=e8]: The Testing Academy
      - button "Toggle sidebar" [ref=e9] [cursor=pointer]:
        - img [ref=e10]
    - generic [ref=e13]:
      - img [ref=e14]
      - searchbox / [ref=e17]
      - generic [ref=e18]: /
    - navigation [ref=e19]:
      - generic [ref=e20]:
        - paragraph [ref=e21]:
          - img [ref=e22]
          - generic [ref=e24]: Get started
        - list [ref=e25]:
          - listitem [ref=e26]:
            - link "Overview" [ref=e27] [cursor=pointer]:
              - /url: ../index.html
              - img [ref=e29]
              - generic [ref=e32]: Overview
      - generic [ref=e33]:
        - paragraph [ref=e34]:
          - img [ref=e35]
          - generic [ref=e37]: Selectors & Locators
        - list [ref=e38]:
          - listitem [ref=e39]:
            - link "Multiple Element Filter" [ref=e40] [cursor=pointer]:
              - /url: ../multiple_element_filter.html
              - img [ref=e42]
              - generic [ref=e45]: Multiple Element Filter
          - listitem [ref=e46]:
            - link "Web Table Directory" [ref=e47] [cursor=pointer]:
              - /url: ../webtable.html
              - img [ref=e49]
              - generic [ref=e54]: Web Table Directory
      - generic [ref=e55]:
        - paragraph [ref=e56]:
          - img [ref=e57]
          - generic [ref=e60]: Tables & Forms
        - list [ref=e61]:
          - listitem [ref=e62]:
            - link "QA Profile Form" [ref=e63] [cursor=pointer]:
              - /url: ./practice.html
              - img [ref=e65]
              - generic [ref=e68]: QA Profile Form
          - listitem [ref=e69]:
            - link "Companies Table" [ref=e70] [cursor=pointer]:
              - /url: ./webtable.html
              - img [ref=e72]
              - generic [ref=e75]: Companies Table
          - listitem [ref=e76]:
            - link "Tall Buildings Table" [ref=e77] [cursor=pointer]:
              - /url: ./webtable1.html
              - img [ref=e79]
              - generic [ref=e81]: Tall Buildings Table
          - listitem [ref=e82]:
            - link "Custom Dropdowns" [ref=e83] [cursor=pointer]:
              - /url: ./dropdowns.html
              - img [ref=e85]
              - generic [ref=e88]: Custom Dropdowns
          - listitem [ref=e89]:
            - link "Select Box Variants" [ref=e90] [cursor=pointer]:
              - /url: ./select-boxes.html
              - img [ref=e92]
              - generic [ref=e95]: Select Box Variants
          - listitem [ref=e96]:
            - link "Sortable Admin Table" [ref=e97] [cursor=pointer]:
              - /url: ./sortable.html
              - generic [ref=e99]: Sortable Admin Table
          - listitem [ref=e100]:
            - link "Cricket Scorecard" [ref=e101] [cursor=pointer]:
              - /url: ./scorecard.html
              - generic [ref=e103]: Cricket Scorecard
      - generic [ref=e104]:
        - paragraph [ref=e105]:
          - img [ref=e106]
          - generic [ref=e111]: Frames
        - list [ref=e112]:
          - listitem [ref=e113]:
            - link "Frames overview" [ref=e114] [cursor=pointer]:
              - /url: ../frames/index.html
              - img [ref=e116]
              - generic [ref=e118]: Frames overview
          - listitem [ref=e119]:
            - link "Multi-frame frameset" [ref=e120] [cursor=pointer]:
              - /url: ../frames/multi-frames.html
              - img [ref=e122]
              - generic [ref=e127]: Multi-frame frameset
          - listitem [ref=e128]:
            - link "Nested iframes" [ref=e129] [cursor=pointer]:
              - /url: ../frames/nested-iframes.html
              - img [ref=e131]
              - generic [ref=e135]: Nested iframes
          - listitem [ref=e136]:
            - link "Courses frameset" [ref=e137] [cursor=pointer]:
              - /url: ../frames/courses-frameset.html
              - generic [ref=e139]: Courses frameset
      - generic [ref=e140]:
        - paragraph [ref=e141]:
          - img [ref=e142]
          - generic [ref=e145]: Widgets
        - list [ref=e146]:
          - listitem [ref=e147]:
            - link "SVG locators" [ref=e148] [cursor=pointer]:
              - /url: ../widgets/svg.html
              - generic [ref=e150]: SVG locators
          - listitem [ref=e151]:
            - link "Shadow DOM" [ref=e152] [cursor=pointer]:
              - /url: ../widgets/shadow-dom.html
              - generic [ref=e154]: Shadow DOM
          - listitem [ref=e155]:
            - link "Calendar / date picker" [ref=e156] [cursor=pointer]:
              - /url: ../widgets/calendar.html
              - generic [ref=e158]: Calendar / date picker
          - listitem [ref=e159]:
            - link "Drag & drop Kanban" [ref=e160] [cursor=pointer]:
              - /url: ../widgets/dnd.html
              - generic [ref=e162]: Drag & drop Kanban
          - listitem [ref=e163]:
            - link "Toasts & notifications" [ref=e164] [cursor=pointer]:
              - /url: ../widgets/toasts.html
              - generic [ref=e166]: Toasts & notifications
          - listitem [ref=e167]:
            - link "Native dialogs" [ref=e168] [cursor=pointer]:
              - /url: ../widgets/dialogs.html
              - generic [ref=e170]: Native dialogs
          - listitem [ref=e171]:
            - link "Hover menus" [ref=e172] [cursor=pointer]:
              - /url: ../widgets/hover-menu.html
              - generic [ref=e174]: Hover menus
          - listitem [ref=e175]:
            - link "Right-click menu" [ref=e176] [cursor=pointer]:
              - /url: ../widgets/context-menu.html
              - generic [ref=e178]: Right-click menu
          - listitem [ref=e179]:
            - link "Keyboard navigation" [ref=e180] [cursor=pointer]:
              - /url: ../widgets/keyboard-form.html
              - generic [ref=e182]: Keyboard navigation
      - generic [ref=e183]:
        - paragraph [ref=e184]:
          - img [ref=e185]
          - generic [ref=e188]: Network
        - list [ref=e189]:
          - listitem [ref=e190]:
            - link "Network interception" [ref=e191] [cursor=pointer]:
              - /url: ../network/intercept.html
              - generic [ref=e193]: Network interception
      - generic [ref=e194]:
        - paragraph [ref=e195]:
          - img [ref=e196]
          - generic [ref=e198]: Coming next
        - list [ref=e199]:
          - listitem [ref=e200]:
            - link "Windows & Tabs Soon":
              - /url: "#"
              - generic:
                - img
              - generic: Windows & Tabs
              - generic: Soon
          - listitem [ref=e201]:
            - link "Upload & Download Soon":
              - /url: "#"
              - generic:
                - img
              - generic: Upload & Download
              - generic: Soon
    - generic [ref=e202]:
      - generic [ref=e203]: © The Testing Academy · 2026
      - button "Toggle dark mode" [ref=e204] [cursor=pointer]:
        - img [ref=e205]
  - generic [ref=e207]:
    - banner [ref=e208]:
      - button "Open sidebar" [ref=e209] [cursor=pointer]:
        - img [ref=e210]
      - generic [ref=e212]:
        - link "Practice" [ref=e213] [cursor=pointer]:
          - /url: ../index.html
        - img [ref=e214]
        - generic [ref=e216]: Tables & Forms
        - img [ref=e217]
        - strong [ref=e219]: Custom Dropdowns
      - generic [ref=e220]:
        - generic [ref=e221] [cursor=pointer]:
          - checkbox "Locator markers" [checked] [ref=e222]
          - generic [ref=e223]: Locator markers
        - generic [ref=e224]: 3 dropdowns
        - button "Toggle dark mode" [ref=e225] [cursor=pointer]:
          - img [ref=e226]
          - img [ref=e228]
    - main [ref=e231]:
      - region "Custom dropdown practice" [ref=e232]:
        - generic [ref=e233]: Form practice · Custom dropdowns
        - heading "Custom dropdown practice" [level=1] [ref=e235]:
          - text: Custom
          - emphasis [ref=e236]: dropdown
          - text: practice
        - paragraph [ref=e237]:
          - text: Three custom-built dropdowns — not native
          - code [ref=e238]: <select>
          - text: elements. Each opens on click of a
          - code [ref=e239]: .select-trigger
          - text: ", shows options in a floating panel, and writes the chosen value back into the trigger. Build a reusable Playwright helper that handles all three before peeking at the solution."
      - region "Custom dropdowns workspace" [ref=e240]:
        - generic [ref=e241]:
          - generic [ref=e242]:
            - generic [ref=e243]: Programming language
            - button "Programming language" [ref=e245] [cursor=pointer]:
              - generic [ref=e246]: Python
              - img [ref=e247]
            - generic [ref=e249]:
              - generic [ref=e250]:
                - generic [ref=e251]: id
                - text: =lang-trigger
              - generic [ref=e252]:
                - generic [ref=e253]: data-testid
                - text: =dropdown-language · lang-trigger
              - generic [ref=e254]:
                - generic [ref=e255]: class
                - text: =select-trigger
              - generic [ref=e256]:
                - generic [ref=e257]: option
                - text: role=option · data-value=Java/Python/…
          - generic [ref=e258]:
            - generic [ref=e259]: Web framework
            - button "Web framework" [ref=e261] [cursor=pointer]:
              - generic [ref=e262]: React
              - img [ref=e263]
            - generic [ref=e265]:
              - generic [ref=e266]:
                - generic [ref=e267]: id
                - text: =framework-trigger
              - generic [ref=e268]:
                - generic [ref=e269]: data-testid
                - text: =dropdown-framework · framework-trigger
          - generic [ref=e270]:
            - generic [ref=e271]: Experience level
            - generic [ref=e272]:
              - button "Experience level" [expanded] [active] [ref=e273] [cursor=pointer]:
                - generic [ref=e274]: Select your experience level
                - img [ref=e275]
              - listbox [ref=e277]:
                - option "Junior (0-3 years)" [ref=e278] [cursor=pointer]:
                  - text: Junior (0-3 years)
                  - img [ref=e279]
                - option "Mid-level (4-6 years)" [ref=e281] [cursor=pointer]:
                  - text: Mid-level (4-6 years)
                  - img [ref=e282]
                - option "Senior (7+ years)" [ref=e284] [cursor=pointer]:
                  - text: Senior (7+ years)
                  - img [ref=e285]
                - option "Principal (10+ years)" [ref=e287] [cursor=pointer]:
                  - text: Principal (10+ years)
                  - img [ref=e288]
            - generic [ref=e290]:
              - generic [ref=e291]:
                - generic [ref=e292]: id
                - text: =experience-trigger
              - generic [ref=e293]:
                - generic [ref=e294]: data-testid
                - text: =dropdown-experience · experience-trigger
          - generic [ref=e295]:
            - button "Save selection" [ref=e296] [cursor=pointer]
            - button "Reset" [ref=e297] [cursor=pointer]
          - generic [ref=e298]: No selection yet — pick from the three dropdowns above.
        - complementary [ref=e299]:
          - generic [ref=e300]:
            - heading "What students should practise" [level=3] [ref=e301]
            - list [ref=e302]:
              - listitem [ref=e303]:
                - text: Click the
                - code [ref=e304]: .select-trigger
                - text: matching a placeholder, then click an
                - code [ref=e305]: option
                - text: by visible text.
              - listitem [ref=e306]:
                - text: "Write a reusable helper:"
                - code [ref=e307]: selectValue(page, label, value)
                - text: .
              - listitem [ref=e308]: Assert the trigger's visible text equals the chosen value after selection.
              - listitem [ref=e309]:
                - text: Confirm only one option is marked
                - code [ref=e310]: .is-selected
                - text: per dropdown.
          - group [ref=e311]:
            - generic "Playwright solution Helper-based pattern — reusable across all three dropdowns. Show solution" [ref=e312] [cursor=pointer]:
              - img [ref=e314]
              - generic [ref=e316]:
                - strong [ref=e317]: Playwright solution
                - generic [ref=e318]: Helper-based pattern — reusable across all three dropdowns.
              - generic [ref=e319]: Show solution
```

# Test source

```ts
  1  | //7 may 2026 dropdown selection from practice page assignment
  2  | //press ESC button in test script
  3  | import { test, expect } from "@playwright/test"; // 1. Corrected package name
  4  | 
  5  | test("Select options from Drop Down Box", async ({ page }) => {
  6  |   await page.goto("https://app.thetestingacademy.com/playwright"); 
  7  |   await page.getByRole('link',{name:'Custom Dropdowns'}).click();
  8  |   const myPage=await page.locator('#page-title');
  9  |    await expect(myPage).toContainText('Custom dropdown practice');
  10 |    const myDropDown= page.locator('#lang-trigger');
  11 |    await myDropDown.click();
  12 |    await page.getByRole('option', { name: 'Python' }).click();
  13 |    //await myDropDown.click();
  14 |    await page.keyboard.press('Escape');
  15 |    await page.locator('#framework-trigger').click();
  16 |    await page.getByRole('option',{name:'React'}).click();
  17 |    await page.keyboard.press('Escape');
  18 |    await page.locator('#experience-trigger').click();
> 19 |    await page.getByRole('option',{name:'Mid-level (4-6 years)'}).click();
     |                                                                 ^ Error: locator.click: Test timeout of 30000ms exceeded.
  20 |    await page.locator('#dropdown-save').click();
  21 |   const output = page.locator('#dropdown-output');
  22 |   await expect(output).toBeVisible();
  23 |   await expect(output).toContainText('Python');
  24 |   await expect(output).toContainText('React');
  25 | 
  26 | 
  27 | 
  28 |    
  29 | });
```