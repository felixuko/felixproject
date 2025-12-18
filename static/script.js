// === CONFIGURA AQUÍ LA FECHA OBJETIVO ===
const targetDate = new Date('2025-12-19T22:00:00');


const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


function updateCountdown() {
const now = new Date();
const diff = targetDate - now;


if (diff <= 0) {
daysEl.textContent = '0';
hoursEl.textContent = '0';
minutesEl.textContent = '0';
secondsEl.textContent = '0';
return;
}


const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
const minutes = Math.floor((diff / (1000 * 60)) % 60);
const seconds = Math.floor((diff / 1000) % 60);


daysEl.textContent = days;
hoursEl.textContent = hours.toString().padStart(2, '0');
minutesEl.textContent = minutes.toString().padStart(2, '0');
secondsEl.textContent = seconds.toString().padStart(2, '0');
}


setInterval(updateCountdown, 1000);
updateCountdown();


document.getElementById('year').textContent = new Date().getFullYear();