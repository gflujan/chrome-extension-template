// This file is kind of like the "backend" for your extension, it will receive the request from the
// UI/client side and then do the "heavy lifting" that you want it to do and return a response

/* ========================================================================== */
// Add your helper methods here
/* ========================================================================== */

const someHelperFunc = () => { };

const anotherHelperFunc = () => { };

/* ========================================================================== */
//
/* ========================================================================== */

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
   // do stuff here to react to the `request.action` and then read, scrape, or work with the DOM
   // then send back a response for the UI/client side to react to or display
   // it's probably good to use to a `try/catch` block in here
});
