Handling Frames/Iframes and Windows

What is an iframe?

An iframe (<iframe> ) embeds another HTML page inside the current page. It has its own DOM, its own CSS, its own JavaScript, completely isolated from the parent page.
Example:
 1. //Locate the frame first (using its ID, Name, or Selector)
>const myFrame = page.frameLocator('#login-iframe');

2. //Now you can find elements INSIDE that frame
>await myFrame.getByRole('button', { name: 'Submit' }).click();

Common iframe examples: payment forms (Stripe, Razorpay), embedded YouTube videos, Google Maps, reCAPTCHA social media widgets, and third-party chat widgets
Summary Checklist for your Script:
Check the DevTools: Right-click the element. If you see #document or <iframe> in the hierarchy above your element, you are in a frame.

Check the URL: Does clicking the button change the URL in a new tab? If yes, you are handling a new window.

Don't forget the focus: In automation, you can only be in one "context" at a time. Always "switch" to the frame or "capture" the new page before trying to click elements inside them.

**Difference between frame and iframe.:
frame is older version compatible with HTML4
iframe is new version comapatible HTML5 onwards
<iframe> </iframe>
________________________________________________
Example: 
← <!- Main page

<h1>Payment Page</h1>

<p>Enter your card details below:</p>

<!- iframe another page embedded inside

→

<iframe src="https://payment-provider.com/form" id="payment-frame">

<!- Inside this iframe is a SEPARATE page with its own elements →

<!- <input id="card-number" placeholder="Card Number" />→

<!- <button>Pay Now</button> →

</iframe>

__________________________________________________
Windows:
A new Window (or Tab) is a completely separate browser context. This usually happens when you click a link with target="_blank" or a "Login with Google" button.

// Start waiting for the new tab before you click
> const pagePromise = context.waitForEvent('page');

> await page.getByText('Open New Tab').click();

// This 'newTab' is now your second window
// Start waiting for the new tab before you click
> const pagePromise = context.waitForEvent('page');

> await page.getByText('Open New Tab').click();

// This 'newTab' is now your second window
> const newTab = await pagePromise;

// Now interact with the new tab
> await newTab.getByRole('heading').textContent();