chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ numbers: [], index: 0, interval: 1 }); // Default interval of 1 second
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "generate") {
    let numbers = Array.from({ length: 99 }, (_, i) => i + 1);
    numbers = shuffleArray(numbers); // Shuffle the numbers
    chrome.storage.local.set({ numbers, index: 0, interval: request.interval });
    sendResponse({ status: "Numbers generated" });
  }
});
