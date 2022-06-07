const MINUTES = 60;
const HOURS = MINUTES * 60;
const DAYS = HOURS * 24;

const countUntil = new Date("Dec 31 2022 23:59:59 GMT-0300");

const daysId = document.getElementById('countdown-days');
const hoursId = document.getElementById('countdown-hours');
const minutesId = document.getElementById('countdown-minutes');
const secondsId = document.getElementById('countdown-seconds');

const updateCountDown = () => {
  let days, hours, minutes, seconds = 0;
  const justNow = new Date();

  seconds = (countUntil - justNow) / 1000;

  if (seconds>0) {
    days = Math.floor(seconds / DAYS);
    seconds %= (days * DAYS);
    hours = Math.floor(seconds / HOURS);
    
    if (hours !== 0) seconds %= (hours * HOURS);
    
    minutes = Math.floor(seconds / MINUTES);
    
    if (minutes !== 0) seconds = Math.floor(seconds % (minutes * MINUTES));

    updateValues(days, hours, minutes, seconds);
  }

  setTimeout(updateCountDown, 1000);
}

const updateValues = (days, hours, minutes, seconds) => {
  updateElement(daysId, days, "dia");
  updateElement(hoursId, hours, "hora");
  updateElement(minutesId, minutes, "minuto");
  updateElement(secondsId, seconds, "segundo");
}

const updateElement = (element, value, label) => {
  const labelElement = element.parentElement.getElementsByTagName("small");
  element.textContent = value;
  labelElement[0].textContent = pluralize(value, label);
}

const pluralize = (value, word) => {
  return word + (value != 1 ? "s"  : "");
}

if (daysId && hoursId && minutesId && secondsId) updateCountDown()

