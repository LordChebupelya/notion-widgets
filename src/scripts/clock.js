let dateElem = document.querySelector('#date');
let clockElem = document.querySelector('#clock');

function updateTime(date, clock) {
  // important base variables
  let d = new Date();
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // date and time variables
  let year = d.getFullYear();
  let month = months[d.getMonth()];
  let day = d.getDate();
  let weekday = weekdays[d.getDay()];
  let hours = d.getHours();
  let mins = d.getMinutes();
  let secs = d.getSeconds();

  // format the time
  hours = hours < 10 ? '0' + hours : hours;
  mins = mins < 10 ? '0' + mins : mins;
  secs = secs < 10 ? '0' + secs : secs;

  // let time = hours + ':' + mins + ':' + secs;
  let time = hours + ':' + mins;
  let dateVar = weekday + ', ' + day + ' ' + month + ' ' + year;

  clock.innerHTML = time;
  date.innerHTML = dateVar;
}

setInterval(() => {
  updateTime(dateElem, clockElem);
}, 1000);
