function showNumber() {
    chrome.storage.local.get(['numbers', 'index', 'interval'], (result) => {
      let numbers = result.numbers;
      let interval = result.interval; // Convert seconds to milliseconds
      index = result.index;
      if (index < numbers.length) {
        document.getElementById('number').textContent = numbers[index];
        chrome.storage.local.set({ index: index + 1 });
        setTimeout(showNumber, interval);
      } else {
        document.getElementById('number').innerHTML = "<span class='complete'>You've finished the test!! Congrats 😜😝😋👏🙌💪👍👉";
        document.getElementById('number').style.fontSize="48px"
      }
    });
  }
  
  showNumber();
  