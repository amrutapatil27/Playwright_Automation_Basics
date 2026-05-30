page.on vs. page.once

Both register event listeners. Difference = how many times fire.

page.on

Fires EVERY time an event occurs. Stays registered until manually removed
>page.on('dialog', async dialog => {

>   await dialog.accept();

>});

// Handles all dialogs for the rest of the test.
Use when: multiple events are expected (many dialogs, many requests,many console logs).

>page.once (Used mostly with Alerts. )

>Fires only once. Auto-unregisters after first fire.

>page.once('dialog', async dialog => {

>   await dialog.accept();

>});

// Handles next dialog. Subsequent dialogs = unhandled.

Use when: single event expected (one alert, one popup, one download per action).

Rule of thumb                       

Scenario                      Use

1. One alert per test :         once

2. Loop clicking N buttons, :    on
   each = dialog

3. Log all console errors   :  on
    whole test

4. Wait for single popup    : once (or waitForEvent)

5. Track all network requests  : on