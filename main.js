/* =======
VARIABLES
======= */
const newY = "1 Jan 2022";

const daysN = document.getElementById("days");
const hoursN = document.getElementById("hours");
const minsN = document.getElementById("mins");
const secondsN = document.getElementById("seconds");

function countdown() {
  const newYearDate = new Date(newY);
  const currentDate = new Date();

  const totalSeconds = (newYearDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  daysN.innerHTML = days;
  hoursN.innerHTML = hours;
  minsN.innerHTML = formatTimer(mins);
  secondsN.innerHTML = formatTimer(seconds);
  // console.log(days, hours, mins, seconds);
}

function formatTimer(time) {
  return time < 10 ? `0${time}` : time;
}
// Initial call
countdown();

setInterval(countdown, 1000);
