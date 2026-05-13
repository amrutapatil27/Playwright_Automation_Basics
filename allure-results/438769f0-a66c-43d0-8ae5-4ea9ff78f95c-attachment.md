# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: BASICS\Practice_Page_Assignments\QA_Profile.spec.ts >> Enter data in QA Form
- Location: tests\BASICS\Practice_Page_Assignments\QA_Profile.spec.ts:4:5

# Error details

```
Error: locator.fill: Error: Element is not an <input>, <textarea> or [contenteditable] element
Call log:
  - waiting for getByTestId('years-experience')
    - locator resolved to <select id="years-experience" name="yearsExperience" data-testid="years-experience">…</select>
    - fill("4")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

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
        - generic [ref=e216]: Tables
        - img [ref=e217]
        - strong [ref=e219]: QA Profile Form
      - generic [ref=e220]:
        - generic [ref=e221] [cursor=pointer]:
          - checkbox "Locator markers" [checked] [ref=e222]
          - generic [ref=e223]: Locator markers
        - generic [ref=e224]: Form practice
        - button "Toggle dark mode" [ref=e225] [cursor=pointer]:
          - img [ref=e226]
          - img [ref=e228]
    - main [ref=e231]:
      - region "QA Profile Form practice" [ref=e232]:
        - generic [ref=e233]: Form practice · Inputs & widgets
        - heading "QA Profile Form practice" [level=1] [ref=e235]:
          - text: QA
          - emphasis [ref=e236]: Profile Form
          - text: practice
        - paragraph [ref=e237]: "A focused form for practising every input type Playwright tests cover: text fields, radio groups, dropdowns, dates, checkboxes, tabs, file upload, and downloads. Build out your locator strategy before you reveal the solution."
      - tablist "Page sections" [ref=e238]:
        - tab "Page" [selected] [ref=e239] [cursor=pointer]
        - tab "Practice 10" [ref=e240] [cursor=pointer]:
          - text: Practice
          - generic [ref=e241]: "10"
        - tab "Solution" [ref=e242] [cursor=pointer]
      - tabpanel "Page" [ref=e243]:
        - generic [ref=e244]:
          - generic [ref=e245]:
            - heading "Personal information" [level=2] [ref=e246]
            - generic [ref=e247]:
              - generic [ref=e248]:
                - generic [ref=e249]: First name
                - textbox "First name" [ref=e250]:
                  - /placeholder: Aarav
                  - text: Amruta
                - generic [ref=e251]:
                  - generic [ref=e252]:
                    - generic [ref=e253]: id
                    - text: =first-name
                  - generic [ref=e254]:
                    - generic [ref=e255]: name
                    - text: =firstName
                  - generic [ref=e256]:
                    - generic [ref=e257]: data-testid
                    - text: =first-name
              - generic [ref=e258]:
                - generic [ref=e259]: Last name
                - textbox "Last name" [ref=e260]:
                  - /placeholder: Sharma
                  - text: Patil
                - generic [ref=e261]:
                  - generic [ref=e262]:
                    - generic [ref=e263]: id
                    - text: =last-name
                  - generic [ref=e264]:
                    - generic [ref=e265]: name
                    - text: =lastName
                  - generic [ref=e266]:
                    - generic [ref=e267]: data-testid
                    - text: =last-name
            - generic [ref=e268]:
              - generic [ref=e269]: Gender
              - radiogroup "Gender" [ref=e270]:
                - generic [ref=e271] [cursor=pointer]:
                  - radio "Male" [ref=e272]
                  - text: Male
                - generic [ref=e273] [cursor=pointer]:
                  - radio "Female" [checked] [active] [ref=e274]
                  - text: Female
              - generic [ref=e275]:
                - generic [ref=e276]:
                  - generic [ref=e277]: name
                  - text: =gender
                - generic [ref=e278]:
                  - generic [ref=e279]: data-testid
                  - text: =gender-male / gender-female
          - generic [ref=e280]:
            - heading "Professional details" [level=2] [ref=e281]
            - generic [ref=e282]:
              - generic [ref=e283]:
                - generic [ref=e284]: Years of experience
                - combobox "Years of experience" [ref=e285]:
                  - option "Select years" [selected]
                  - option "1"
                  - option "2"
                  - option "3"
                  - option "4"
                  - option "5"
                  - option "6"
                  - option "7"
                - generic [ref=e286]:
                  - generic [ref=e287]:
                    - generic [ref=e288]: id
                    - text: =years-experience
                  - generic [ref=e289]:
                    - generic [ref=e290]: name
                    - text: =yearsExperience
                  - generic [ref=e291]:
                    - generic [ref=e292]: data-testid
                    - text: =years-experience
              - generic [ref=e293]:
                - generic [ref=e294]: Date
                - textbox "Date" [ref=e295]
                - generic [ref=e296]:
                  - generic [ref=e297]:
                    - generic [ref=e298]: id
                    - text: =profile-date
                  - generic [ref=e299]:
                    - generic [ref=e300]: name
                    - text: =date
                  - generic [ref=e301]:
                    - generic [ref=e302]: data-testid
                    - text: =profile-date
            - generic [ref=e303]:
              - generic [ref=e304]: Profession
              - radiogroup "Profession" [ref=e305]:
                - generic [ref=e306] [cursor=pointer]:
                  - radio "Manual Tester" [ref=e307]
                  - text: Manual Tester
                - generic [ref=e308] [cursor=pointer]:
                  - radio "Automation Tester" [ref=e309]
                  - text: Automation Tester
              - generic [ref=e310]:
                - generic [ref=e311]:
                  - generic [ref=e312]: name
                  - text: =profession
                - generic [ref=e313]:
                  - generic [ref=e314]: data-testid
                  - text: =profession-manual / profession-automation
          - generic [ref=e315]:
            - heading "Technical skills" [level=2] [ref=e316]
            - generic [ref=e317]:
              - generic [ref=e318]: Automation tools
              - generic "Automation tools" [ref=e319]:
                - generic [ref=e320] [cursor=pointer]:
                  - checkbox "UFT" [ref=e321]
                  - text: UFT
                - generic [ref=e322] [cursor=pointer]:
                  - checkbox "Protractor" [ref=e323]
                  - text: Protractor
                - generic [ref=e324] [cursor=pointer]:
                  - checkbox "Selenium Webdriver" [ref=e325]
                  - text: Selenium Webdriver
              - generic [ref=e326]:
                - generic [ref=e327]:
                  - generic [ref=e328]: name
                  - text: =tools
                - generic [ref=e329]:
                  - generic [ref=e330]: data-testid
                  - text: =tool-uft / tool-protractor / tool-selenium
            - generic [ref=e331]:
              - generic [ref=e332]: Continents you have worked from
              - generic "Continents" [ref=e333]:
                - generic [ref=e334] [cursor=pointer]:
                  - checkbox "Asia" [ref=e335]
                  - text: Asia
                - generic [ref=e336] [cursor=pointer]:
                  - checkbox "Europe" [ref=e337]
                  - text: Europe
                - generic [ref=e338] [cursor=pointer]:
                  - checkbox "Africa" [ref=e339]
                  - text: Africa
                - generic [ref=e340] [cursor=pointer]:
                  - checkbox "Australia" [ref=e341]
                  - text: Australia
                - generic [ref=e342] [cursor=pointer]:
                  - checkbox "South America" [ref=e343]
                  - text: South America
                - generic [ref=e344] [cursor=pointer]:
                  - checkbox "North America" [ref=e345]
                  - text: North America
                - generic [ref=e346] [cursor=pointer]:
                  - checkbox "Antarctica" [ref=e347]
                  - text: Antarctica
              - generic [ref=e348]:
                - generic [ref=e349]:
                  - generic [ref=e350]: name
                  - text: =continents
                - generic [ref=e351]:
                  - generic [ref=e352]: data-testid
                  - text: "=continent-{name}"
          - generic [ref=e353]:
            - heading "Selenium commands" [level=2] [ref=e354]
            - tablist [ref=e355]:
              - tab "Browser Commands" [ref=e356] [cursor=pointer]
              - tab "Navigation Commands" [ref=e357] [cursor=pointer]
              - tab "Switch Commands" [ref=e358] [cursor=pointer]
              - tab "Wait Commands" [ref=e359] [cursor=pointer]
              - tab "WebElement Commands" [ref=e360] [cursor=pointer]
            - generic [ref=e361]:
              - strong [ref=e362]: Browser commands
              - text: — open and close the browser, get titles and URLs, manage windows.
              - code [ref=e363]: driver.getTitle(); driver.getCurrentUrl(); driver.close();
            - generic [ref=e364]:
              - generic [ref=e365]:
                - generic [ref=e366]: id
                - text: =selenium-tabs · selenium-tab-panel
              - generic [ref=e367]:
                - generic [ref=e368]: data-testid
                - text: =tab-browser / tab-navigation / tab-switch / tab-wait / tab-webelement
              - generic [ref=e369]:
                - generic [ref=e370]: role
                - text: =tab
          - generic [ref=e371]:
            - heading "File operations" [level=2] [ref=e372]
            - generic [ref=e373]:
              - generic [ref=e374] [cursor=pointer]:
                - img [ref=e375]
                - text: Upload Image
                - button "Upload Image" [ref=e377]
              - generic [ref=e378]: No file chosen
              - link "Download file" [ref=e379] [cursor=pointer]:
                - /url: /playwright/sample-download.txt
                - text: Download file
                - img [ref=e380]
            - generic [ref=e382]:
              - generic [ref=e383]:
                - generic [ref=e384]: id
                - text: =upload-image · download-file
              - generic [ref=e385]:
                - generic [ref=e386]: data-testid
                - text: =upload-image · download-file
          - generic [ref=e387]:
            - button "Save profile" [ref=e388] [cursor=pointer]
            - button "Reset" [ref=e389] [cursor=pointer]
            - button "Button" [ref=e390] [cursor=pointer]
          - generic [ref=e391]:
            - generic [ref=e392]:
              - generic [ref=e393]: id
              - text: =profile-submit · profile-button
            - generic [ref=e394]:
              - generic [ref=e395]: data-testid
              - text: =profile-submit / profile-reset / profile-button
            - generic [ref=e396]:
              - generic [ref=e397]: role
              - text: =button
          - generic [ref=e398]: Submitted profile JSON will appear here.
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test";
  2  | import { link } from "node:fs";
  3  | import dayjs from 'dayjs';
  4  | test("Enter data in QA Form",async({page})=>{
  5  |     await page.goto("https://app.thetestingacademy.com/playwright/");
  6  |     // 1. Locate the card container first
  7  | const qaCard = page.locator('article.index-card').filter({ hasText: 'QA Profile Form' });
  8  | 
  9  | // 2. Click the link within that specific card
  10 | await qaCard.getByRole('link', { name: 'Open page' }).click();
  11 |     // ✅ Best Practice (User-Centric)
  12 | const heading = page.getByRole('heading', { name: /QA.*Profile Form/i });
  13 | expect (heading).toHaveText("QA Profile Form practice");
  14 | 
  15 | await page.getByTestId('first-name').fill("Amruta");
  16 | await page.getByTestId('last-name').fill("Patil");
  17 | await page.getByTestId('gender-female').check();
> 18 | await page.getByTestId('years-experience').fill('4');
     |                                            ^ Error: locator.fill: Error: Element is not an <input>, <textarea> or [contenteditable] element
  19 | // 1. Create the date object
  20 | const date = new Date();
  21 | 
  22 | // 2. Format to YYYY-MM-DD
  23 | // .toISOString() gives: "2026-05-13T14:59:06.000Z"
  24 | // .split('T')[0] gives: "2026-05-13"
  25 | const todayString = date.toISOString().split('T')[0];
  26 | //Date can be selected using dayjs also. its easier
  27 | //const today = dayjs().format('YYYY-MM-DD'); 
  28 | //await page.getByTestId('profile-date').fill(today);
  29 | 
  30 | // 3. Now fill it (This will work!)
  31 | await page.getByTestId('profile-date').fill(todayString);
  32 | await page.getByTestId('profile-date').fill(todayString);
  33 | });
  34 | 
```