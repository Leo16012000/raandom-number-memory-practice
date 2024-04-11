chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ numbers: [], index: 0, interval: 1 }); // Default interval of 1 second
  });
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "generate") {
      let numbers = Array.from({ length: 99 }, (_, i) => i + 1)
                         .sort(() => Math.random() - 0.5);
      chrome.storage.local.set({ numbers, index: 0, interval: request.interval });
      sendResponse({ status: "Numbers generated" });
    }
  });
  