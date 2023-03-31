const billValueInput = document.querySelector('.bill input');
const tipsSelect = document.querySelector('select');
const buttonCalculate = document.querySelector('button');
const errorMessage = document.querySelector('p.error');
const resultTip = document.querySelector('.result p.tip');
const resultTotalBill = document.querySelector('.result p.total-bill');


const showError = (message) => {
  setTimeout(() => {
    errorMessage.classList.add('hidden');
    errorMessage.textContent = '';
  }, 3000);
  errorMessage.textContent = message;
  errorMessage.classList.remove('hidden');
};

buttonCalculate.addEventListener('click', () => {

  const bill = billValueInput.value;
  const percentDiscont = tipsSelect.value;

  if (!bill) {
    showError('Enter the bill value and rate the service.');
    return;
  }

  if (!parseFloat(bill)) {
    showError('Enter a valid value for bill.');
    return;
  }

  resultTip.innerHTML = `Tip: $ ${bill * percentDiscont / 100}`;
  resultTotalBill.innerHTML = `Total bill: $ ${bill}`;
});