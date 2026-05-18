JavaScript Alerts

Use `page.once()` not `page.on()` when handling a single expected dialog. `on()` keeps the listener active for the rest of the test, which causes problems if another dialog fires later. `once()` removes itself after firing, much safer.

Register before the click, always. Same pattern as the Windows test. If you click first, the dialog auto-dismisses before your handler attaches.

`Idialog.type()` returns 'alert', 'beforeunload', 'confirm', or 'prompt' shared handlers that branch on type. Useful for

Don't try to assert on dialog presence with locators. Native browser dialogs aren't part of the DOM; there's no element to find. The dialog event is the only way to interact with them. This is a common mistake when porting from Selenium, since some people try `page.locator('alert')` and wonder why it fails