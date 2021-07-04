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
// setInterval(today, 1000);

//Change Background
const timeMessage = document.querySelector('.day-or-night');
const morning = document.getElementById('bg');
const backgroundChange = function () {
  let t = new Date().getHours();
  if (t <= 7 || t > 20) {
    timeMessage.textContent = `good evening, it's currently`;
    morning.classList.add('bg-evening');
    morning.classList.remove('bg-morning');
  } else {
    timeMessage.textContent = `good morning, it's currently`;
    morning.classList.remove('bg-evening');
    morning.classList.add('bg-morning');
  }
};
backgroundChange();
// setInterval(backgroundChange, 1000);

const btnLogic = function () {
  const btn = document.querySelector('.btn-more');
  const btnText = document.querySelector('.btn-text');
  const btnArrow = document.querySelector('.btn-arrow');
  const expandSection = document.querySelector('.expand-box');

  btn.addEventListener('click', function () {
    // expandSection.classList.toggle('expand-appear');
    // expandSection.scrollIntoView();
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
