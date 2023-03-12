const container = document.querySelector('.container');
const text = document.querySelector('p');

const generateProducts = (products) => {
  let itens = '';
  products.forEach(item => {
    itens += `
      <div class="product">
        <p>
          <b>Id:</b> ${item.id}
        </p>
        <p>
          <b>Name:</b> ${item.name}
        </p>
        <p>
          <b>Price:</b> ${item.price}
        </p>
      </div>
    `;
  });

  container.innerHTML = itens;
};

const getProducts = () => {
  return fetch('db.json', {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(response => response.json())
    .then(data => generateProducts(data))
    .catch(_ => text.innerText = 'Somenthing went wrong, try again later');
};



getProducts();