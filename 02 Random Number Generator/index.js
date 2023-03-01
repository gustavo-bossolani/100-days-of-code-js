const buttonGenerator = document.querySelector('button');
const spanWithRandomNumber = document.querySelector('#random');


buttonGenerator.addEventListener('click', () => {
  // number btn -10 and 10
  const random = Math.random() > 0.5 ? Math.floor(Math.random() * 10) + 1 : parseInt(Math.random() * -10) - 1;

  if (random > 0) spanWithRandomNumber.style.color = 'green';
  else if (random === 0) spanWithRandomNumber.style.color = 'black';
  else spanWithRandomNumber.style.color = 'red';

  spanWithRandomNumber.innerHTML = random;
});