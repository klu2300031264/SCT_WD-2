let timer;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let isRunning = false;

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTime, 10);
    }
}

function pauseStopwatch() {
    isRunning = false;
    clearInterval(timer);
}

function resetStopwatch() {
    isRunning = false;
    clearInterval(timer);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    updateDisplay();
    document.getElementById('laps').innerHTML = '';
}

function updateTime() {
    milliseconds += 10;
    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('milliseconds').innerText = formatTime(milliseconds / 10);
    document.getElementById('seconds').innerText = formatTime(seconds);
    document.getElementById('minutes').innerText = formatTime(minutes);
}

function formatTime(value) {
    return value < 10 ? `0${Math.floor(value)}` : Math.floor(value);
}

function recordLap() {
    if (isRunning) {
        const lapTime = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds / 10)}`;
        const lapItem = document.createElement('li');
        lapItem.innerText = `Lap: ${lapTime}`;
        document.getElementById('laps').appendChild(lapItem);
    }
}
