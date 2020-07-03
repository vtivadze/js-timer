let timerSelector = '#timer',
    hoursSelector = '.hours',
    minutesSelector = '.minutes',
    secondsSelector = '.seconds',
    deadline = '2020-07-06';

timerInit(timerSelector, hoursSelector, minutesSelector, secondsSelector, deadline);

function timerInit(timerSelector, hoursSelector, minutesSelector, secondsSelector, deadline) {
    let timerContainer = document.querySelector(timerSelector);
    let hoursElement = timerContainer.querySelector(hoursSelector);
    let minutesElement = timerContainer.querySelector(minutesSelector);
    let secondsElement = timerContainer.querySelector(secondsSelector);

    let timerIntervalId = setInterval(updateTimer, 1000, deadline);

    function updateTimer(deadline) {
        let timeData = getRemainingTimeData(deadline);

        setTime(timeData);

        if (timeData.totalMilliseconds <= 0) {
            clearInterval(timerIntervalId);
        }
    }

    function setTime(timeData) {
        hoursElement.textContent = timeData.hours;
        minutesElement.textContent = timeData.minutes;
        secondsElement.textContent = timeData.seconds;
    }

    function getRemainingTimeData(deadline) {
        let seconds = '00';
        let minutes = '00';
        let hours = '00';

        let totalMilliseconds = Date.parse(deadline) - Date.parse(new Date());

        if (totalMilliseconds > 0) {
            seconds = Math.floor(totalMilliseconds / 1000) % 60;
            minutes = Math.floor(totalMilliseconds / 1000 / 60) % 60;
            hours = Math.floor(totalMilliseconds / 1000 / 60 / 60);

            seconds = seconds < 10 ? '0' + seconds : seconds;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            hours = hours < 10 ? '0' + hours : hours;
        }

        return {
            totalMilliseconds,
            seconds,
            minutes,
            hours,
        };
    }
}
