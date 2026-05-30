Promise.all
When to use: 
> When there  is dialogue open event, File upload, File download at that time use Promise.all() as a safeguard. easy to handle and avoide misshappenings

Run multiple async operations in parallel.

Wait for all resolves.

Return an array of results in order
inside the Promise.all([]) array, we write the waitForEvent('popup') first, and the .click() second.

Why do we write it in reverse? Because of how JavaScript reads code.

The Secret: JavaScript Executes Arrays Left-to-Right
When JavaScript encounters an array [...] inside Promise.all(), it triggers the items inside that array from left to right instantly, without waiting for them to finish.

If we wrote it in the regular order inside Promise.all():
> When to Use?
You can decide whether or not to use Promise.all() by asking yourself one simple question about the action you are about to perform (like a .click() or a .fill()):

"Does this action cause the browser to instantly spawn something new in the background?"

If the answer is Yes, you need Promise.all(). If the answer is No, you write standard sequential lines of code.