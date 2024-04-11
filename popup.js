document.getElementById('start').addEventListener('click', () => {
    const interval = document.getElementById('interval').value || 1; // Default to 1 second if empty
    chrome.runtime.sendMessage({ action: "generate", interval: parseInt(interval, 10) }, response => {
      window.open(chrome.extension.getURL('display.html'), 'Display', 'fullscreen=yes');
    });
  });
  