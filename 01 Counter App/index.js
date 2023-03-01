

const subtractButton = document.querySelector('.btn-danger');
const resetButton = document.querySelector('.btn-secondary');
const addButton = document.querySelector('.btn-primary');
const valueText = document.querySelector('#value');

const changeColor = (h1Element) => {
  const value = parseInt(h1Element.innerHTML);

  if(value > 0) {
    h1Element.className = '';
    h1Element.classList.add('text-success');
  } else if(value === 0) {
    h1Element.className = '';
  } else {
    h1Element.className = '';
    h1Element.classList.add('text-danger');
  }
};

subtractButton.addEventListener('click', () => {
  let value = parseInt(valueText.innerHTML);

  value--;

  valueText.innerHTML = value;
  changeColor(valueText);
});

resetButton.addEventListener('click', () => {
  valueText.innerHTML = 0;
  changeColor(valueText);
});

addButton.addEventListener('click', () => {
  let value = parseInt(valueText.innerHTML);

  value++;

  valueText.innerHTML = value;
  changeColor(valueText);
});

