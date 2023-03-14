const numberOfQuotes = document.querySelector('input');
const generateButton = document.querySelector('button');
const quotesContainer = document.querySelector('.container');


const getQuotes = (quantity = 0) => {
  return fetch('https://type.fit/api/quotes', {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(response => response.json())
    .then(quotes => {

      let template = '';
      for (let i = 0; i < quantity; i++) {
        const quote = quotes[i];
        template += `
          <div class="quote">
            <p>${i + 1}</p>
            <blockquote>
              ${quote.text} \n
              <li>${quote.author}</li>
            </blockquote>
            <hr>
          </div>
        `
      }
      quotesContainer.innerHTML = template;
    });
};


generateButton.addEventListener('click', () => {
  if (numberOfQuotes.value > 0) {
    getQuotes(numberOfQuotes.value);
  }
});