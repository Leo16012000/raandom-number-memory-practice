document.addEventListener('DOMContentLoaded', function() {
  const startBtn = document.getElementById('startBtn');
  const stopBtn = document.getElementById('stopBtn');
  const numberDisplay = document.getElementById('numberDisplay');
  const intervalInput = document.getElementById('intervalInput');

  let numbers = Array.from({ length: 99 }, (_, i) => i + 1);
  let timerId = null;
  let index = 0;

  function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]]; // Swap elements
      }
  }

  startBtn.addEventListener('click', function() {
      shuffleArray(numbers);
      index = 0; // Reset index
      const interval = Math.max(1, parseInt(intervalInput.value) || 2); 
      startBtn.disabled = true;
      stopBtn.disabled = false;
      intervalInput.disabled = true; // Disable input to prevent changes during execution
      numberDisplay.textContent = "Generating numbers...";

      timerId = setInterval(() => {
          if (index < numbers.length) {
              numberDisplay.textContent = `Number: ${numbers[index++]}`;
          } else {
              clearInterval(timerId);
              numberDisplay.textContent = "Congrats!!! You've finished the game!!!";
              startBtn.disabled = false;
              stopBtn.disabled = true;
              intervalInput.disabled = false; // Re-enable input
          }
      }, interval);
  });

  stopBtn.addEventListener('click', function() {
      if (timerId) {
          clearInterval(timerId);
          timerId = null;
          numberDisplay.textContent = "Generation stopped. Press Start to generate numbers!";
          startBtn.disabled = false;
          stopBtn.disabled = true;
          intervalInput.disabled = false; // Re-enable input
      }
  });
});
