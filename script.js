let timer;
let seconds = 0;
let isRunning = false;
let lapCount = 0;

const display = document.getElementById('display');
const lapList = document.getElementById('lapList');

function formatTime(sec) {
  const hrs = String(Math.floor(sec / 3600)).padStart(2, '0');
  const mins = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
  const secs = String(sec % 60).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

function updateDisplay() {
  display.textContent = formatTime(seconds);
}

document.getElementById('start').addEventListener('click', () => {
  if (!isRunning) {
    timer = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
    isRunning = true;
  }
});

document.getElementById('pause').addEventListener('click', () => {
  clearInterval(timer);
  isRunning = false;
});

document.getElementById('reset').addEventListener('click', () => {
  clearInterval(timer);
  seconds = 0;
  isRunning = false;
  lapCount = 0;
  updateDisplay();
  lapList.innerHTML = '';
});

document.getElementById('lap').addEventListener('click', () => {
  if (isRunning) {
    lapCount++;
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCount}: ${formatTime(seconds)}`;
    lapList.appendChild(lapItem);
  }
});

updateDisplay();
