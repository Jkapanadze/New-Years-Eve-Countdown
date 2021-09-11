const dayEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")

const newYears = "1 Jan 2022"

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const secondsleft = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(secondsleft / 3600 / 24);
    const hours = Math.floor(secondsleft / 3600) % 24;
    const minutes = Math.floor(secondsleft / 60) % 60;
    const seconds = Math.floor(secondsleft) % 60;

    dayEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);;
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

// initial call
countdown()

setInterval(countdown, 1000);
