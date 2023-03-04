const button = document.querySelector('button');
const input = document.querySelector('input');
const small = document.querySelector('small');


button.addEventListener('click', () => {
  let totalOfVowels = 0;
  const word = input.value;
  
  word.split('').forEach(vowel => {
    if (vowel.toLowerCase().match(/['a','e','i','o','u','y']/)) {
      totalOfVowels++;
    }
  });

  small.innerText = `${word} has total of ${totalOfVowels} vowels`

});