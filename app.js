//Generate Quote
const url = 'https://api.quotable.io/random';

function generateQuote() {
  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      document.querySelector('.quote').innerHTML = `"${data.content}"`;
      document.querySelector('.author').innerHTML = data.author;
    })
    .catch(function (err) {
      console.log(err);
    });
}
generateQuote();

// Location
fetch('https://extreme-ip-lookup.com/json/')
  .then(res => res.json())
  .then(response => {
    document.querySelector(
      '.location'
    ).innerHTML = `In ${response.city}, ${response.countryCode}`;
  })
  .catch((data, status) => {
    console.log('Request failed');
  });

//time and timezone
let zone = new Date()
  .toLocaleTimeString('en-us', { timeZoneName: 'short' })
  .split(' ')[2];
document.querySelector('.time-zone').innerHTML = zone;

let today = function () {
  const liveTime = moment().format('H:mm');
  document.querySelector('.time').innerHTML = liveTime;
};
today();
console.log(today);
setInterval(today, 1000);

//Change Background
const timeMessage = document.querySelector('.day-or-night');
const morning = document.getElementById('bg');
const expandColor = document.querySelector('.expanded-container ');
const backgroundChange = function () {
  let t = new Date().getHours();
  if (t <= 7 || t > 20) {
    timeMessage.textContent = `good evening, it's currently`;
    expandColor.classList.add('bg-black');
    morning.classList.add('bg-evening');
    morning.classList.remove('bg-morning');
  } else {
    timeMessage.textContent = `good morning, it's currently`;
    expandColor.classList.remove('bg-black');
    expandColor.classList.add('bg-white');
    morning.classList.remove('bg-evening');
    morning.classList.add('bg-morning');
  }
};
backgroundChange();
setInterval(backgroundChange, 1000);

const btnLogic = function () {
  const btn = document.querySelector('.btn-more');
  const btnText = document.querySelector('.btn-text');
  const btnArrow = document.querySelector('.btn-arrow');
  const expandSection = document.querySelector('.hidden');

  btn.addEventListener('click', function () {
    expandSection.classList.toggle('show');
    expandSection.scrollIntoView();
    if (btnText.innerHTML === 'LESS') {
      btnText.innerHTML = 'MORE';
      btnArrow.classList.remove('btn-arrow-up');
    } else {
      btnText.innerHTML = 'LESS';
      btnArrow.classList.add('btn-arrow-up');
    }
  });
};
btnLogic();

// Days information
let dayOfWeek = new Date();
let day = dayOfWeek.getDay();
document.querySelector('.day-week-text').innerHTML = day;

let now = new Date();
let start = new Date(now.getFullYear(), 0, 0);
let diff =
  now -
  start +
  (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
let oneDay = 1000 * 60 * 60 * 24;
let dayOfYear = Math.floor(diff / oneDay);
document.querySelector('.day-year-text').innerHTML = dayOfYear;

let timeZone2 = Intl.DateTimeFormat().resolvedOptions().timeZone;
document.querySelector('.tz-text').innerHTML = timeZone2;

//week of year
// Source: https://stackoverflow.com/questions/6117814/get-week-of-year-in-javascript-like-in-php
Date.prototype.getWeekNumber = function () {
  var d = new Date(
    Date.UTC(this.getFullYear(), this.getMonth(), this.getDate())
  );
  var dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
};

document.querySelector('.week-year').innerHTML = new Date().getWeekNumber();
