const input = document.querySelector('input');
const button = document.querySelector('button');
const label = document.querySelector('label');

const reverse = (word = '') => {
  const letters = word.split('');

  reversedWord = '';
  letters.reverse()
    .map(letter => reversedWord += letter);
  return reversedWord;
};

const isPalindrome = (inputWord = '', word = '') => {
  if (inputWord === '') return false;
  return inputWord === word;
};

button.addEventListener('click', () => {
  const inputValue = input.value;
  const reversedWord = reverse(inputValue);

  if (isPalindrome(reversedWord,inputValue)) {
    label.innerText = 'Is palindrome!';
  } else {
    label.innerText = 'Not palindrome!';
  }
});


input.addEventListener('focus', () => {
  label.innerText = '';
});