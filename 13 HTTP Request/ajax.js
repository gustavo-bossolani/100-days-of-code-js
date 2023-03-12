const container = document.querySelector('.container');
const text = document.querySelector('p');

const getProducts = () => {
  const request = new XMLHttpRequest();

  request.open('GET', 'db.json', true);

  request.onload = () => {
    if (request.status === 200) {
      generateProducts(JSON.parse(request.responseText));
    } else {
      text.innerText = 'Somenthing went wrong, try again later';
    }
  }
  request.send();
};

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


getProducts();