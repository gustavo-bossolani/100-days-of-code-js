const h2 = document.querySelector('h2');
const icon = document.querySelector('i');

const onlineText = "You're ONLINE!! Connection looks good.";
const offlineText = 'OOPS!! Your Internet Connection is Down.';

const setOnline = () => {
  h2.innerText = onlineText;
  document.body.style.backgroundColor = 'orange';
  icon.classList = '';
  icon.classList.add('fas', 'fa-wifi');
};

const setOffline = () => {
  h2.innerText = offlineText;
  document.body.style.backgroundColor = 'brown';
  icon.classList = '';
  icon.classList.add('fa-solid', 'fa-plane-up');
};

window.addEventListener('online', setOnline);
window.addEventListener('offline', setOffline);

window.navigator.onLine ? setOnline() : setOffline();