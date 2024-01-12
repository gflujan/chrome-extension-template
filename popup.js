document.addEventListener('DOMContentLoaded', () => {
   // This is where you put the logic for the UI to react to things like button clicks
   // then send off a request to your "backend" (i.e. `content.js`) file to get a response

   const someButton = document.getElementById('someButton');

   someButton.addEventListener('click', async () => {
      // you can get info from the Chrome tabs
      const currentActiveTabs = await chrome.tabs.query({ acttive: true, currentWindow: true });
      const activeTab = currentActiveTabs[0];

      const response = await chrome.tabs.sendMessage(activeTab.id, { action: 'someAction' });

      if (!chrome.runtime.lastError) {
         if (response) {
            // Do stuff with your response here, like sending the output/data off to some external
            // destination, like a Google Script or something
         } else {
            console.warn('Log that you did not get a response...');
         }
      } else {
         console.error('Log your error here...');
      }
   });
});
