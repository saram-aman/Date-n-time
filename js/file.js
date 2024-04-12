const timeElement = document.querySelector('.time');
const dateElement = document.querySelector('.date');
const dayElement = document.querySelector('.day');
const format = new Date();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const padZero = (num) => (num < 10 ? `0${num}` : num);
let hour = format.getHours();
const isAM = hour < 12;
const zone = isAM ? 'AM' : 'PM';
hour = hour % 12 || 12; // Convert 0 to 12 for 12-hour format
const minute = padZero(format.getMinutes());
const day = format.getDate();
const month = months[format.getMonth()];
const year = format.getFullYear();
const todayDate = format.toLocaleString('default', { weekday: 'long' });
timeElement.textContent = `${hour}:${minute} ${zone}`;
dateElement.textContent = `${day}-${month}-${year}`;
dayElement.textContent = todayDate;
