document.addEventListener('DOMContentLoaded', function() {
   // This is where you do stuff to grab, listen, and react to your elements in the settings
   // page/tab
   //
   // e.g. click listeners on button elements
   //
   // You can also do stuff with getting & setting from the Chrome storage

   chrome.storage.sync.get('keyName', function(data) { });

   chrome.storage.sync.set({ keyName: value }, function() { });
});
