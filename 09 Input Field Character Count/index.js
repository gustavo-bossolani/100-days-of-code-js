const h1 = document.querySelector('h1');
const input = document.querySelector('input');

input.addEventListener('keyup', () => h1.innerHTML = input.value.length);