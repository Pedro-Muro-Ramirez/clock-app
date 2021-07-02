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
let today = moment().format('H:m');
document.querySelector('.time').innerHTML = today;
document.querySelector('.time-zone').innerHTML = zone;
