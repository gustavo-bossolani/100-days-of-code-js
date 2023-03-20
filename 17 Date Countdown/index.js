const title = document.querySelector('h1.date');
const newYear = `01/01/${new Date().getFullYear() + 1}`;

setInterval(() => {
  const now = new Date();
  const endDate = new Date(newYear);

  const totalSeconds = (endDate - now) / 1000;

  const days = Math.floor(totalSeconds / 3600  / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  title.innerHTML = `${days} days : ${hours} hours : ${minutes} minutes : ${seconds} seconds`;

}, 1000);

