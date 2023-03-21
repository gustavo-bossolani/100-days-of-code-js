const title = document.querySelector('h1.date');
let promoTime = 180 * 60;

const countdown = (callback) => {
  return setInterval(callback, 1000);
};

const formatTime = (time) => time > 10 ? time : `0${time}`;
  

const timer = countdown(() => {
  if (promoTime <= 0) {
    clearInterval(timer);
    title.innerHTML = 'The sale is ended!';
  } else {
    promoTime--;
    const days = Math.floor(promoTime / 3600 / 24);
    const hours = Math.floor(promoTime / 3600) % 24;
    const minutes = Math.floor(promoTime / 60) % 60;
    const seconds = Math.floor(promoTime) % 60;

    title.innerHTML = `${formatTime(days)} Days : ${formatTime(hours)} Hours : ${formatTime(minutes)} Minutes : ${formatTime(seconds)} Seconds`;
  }
});

