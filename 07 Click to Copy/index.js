const button = document.querySelector('button');
const input = document.querySelector('input');
const h1 = document.querySelector('h1');

const fetchRandomData = () => {
  const uri = 'https://random-data-api.com/api/name/random_name';

  return fetch(uri, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(response => response.json())
    .then(data => input.value = data.name)
    .catch(_ => input.value = 'Hello world!');
};

const copyToClipboard = async () => {
  await navigator.clipboard.read();

  const data = [
    new ClipboardItem(
      { 'text/plain': new Blob([input.value], { type: 'text/plain' }) }
    )
  ];
  await navigator.clipboard.write(data);
};

const disableButton = (text = 'Copied!') => {
  button.disabled = true;
  button.style.backgroundColor = 'grey';
  button.style.cursor = 'no-drop';
  button.innerText = text;
};

const ableButton = (text = 'Copy') => {
  button.disabled = false;
  button.style.backgroundColor = 'black';
  button.style.cursor = 'pointer';
  button.innerText = 'Copy';
}

button.addEventListener('click', async () => {
  try {
    await copyToClipboard();
    disableButton();
    setTimeout(ableButton, 5000);
  }
  catch (error) {
    console.log(error);
    h1.innerText = 'You need to approve the clip permission! :(';
    input.disabled = true;
    disableButton(':(');
  }
});

fetchRandomData();
  