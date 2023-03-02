const generatorButton = document.querySelector('button');
const hexColorSpan = document.querySelector('span');
const container = document.querySelector('.main-container');

const setColor = (color) => {
  hexColorSpan.innerHTML = color;
  container.style.background = color;
};

const generateColor = () => {
  const color = Math.random().toString(16).substring(2, 8);
  return `#${color}`;
}; 

generatorButton.addEventListener('click', () => {
  setColor(generateColor());
});

setColor(generateColor());