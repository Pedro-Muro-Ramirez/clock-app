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
    expandColor.classList.remove('bg-black');
    expandColor.classList.add('bg-white');
    morning.classList.remove('bg-evening');
    morning.classList.add('bg-morning');
  }
  if (t > 5 && t < 12) {
    timeMessage.textContent = `good morning, it's currently`;
  } else if (t > 12 && t < 18) {
    timeMessage.textContent = `good afternoon, it's currently`;
  } else {
    timeMessage.textContent = `good evening, it's currently`;
  }
};
backgroundChange();
setInterval(backgroundChange, 1000);

///Button functionality
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
let dayOfWeek = moment().isoWeekday();
document.querySelector('.day-week-text').innerHTML = dayOfWeek;

let dayOfYear = moment().dayOfYear();
document.querySelector('.day-year-text').innerHTML = dayOfYear;

// let dayOfWeek = new Date();
// let day = dayOfWeek.getDay();
// document.querySelector('.day-week-text').innerHTML = day;

// let now = new Date();
// let start = new Date(now.getFullYear(), 0, 0);
// let diff =
//   now -
//   start +
//   (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
// let oneDay = 1000 * 60 * 60 * 24;
// let dayOfYear = Math.floor(diff / oneDay);
// document.querySelector('.day-year-text').innerHTML = dayOfYear;

let timeZone2 = Intl.DateTimeFormat().resolvedOptions().timeZone;
document.querySelector('.tz-text').innerHTML = timeZone2;

//Week of Year
let week = moment().format('W');
document.querySelector('.week-year').innerHTML = week;
