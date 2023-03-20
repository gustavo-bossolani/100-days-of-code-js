const input = document.querySelector('input');
const list = document.querySelector('ul');
const companies = [
  'Microsoft',
  'Nubank',
  'Apple',
  'Xp Investimentos',
  'Amazon',
  'Mercado Livre',
  'Natura',
  'Redragon',
  'Gugabyte',
  'Asus',
  'Samsung',
  'Sony',
  'LG',
  'Riot',
  'Corsair',
  'Hyper X',
  'Lenovo',
  'Motorola',
  'Facebook',
  'Instagram',
  'Meta',
  'Discord',
  'Atlassian',
  'Udemy',
  'Oracle',
];

const debounce = (callback, time = 500) => {
  let timer = null;
  return (...args) => {
    window.clearTimeout(timer);

    timer = setTimeout(() => {
      callback.apply(null, args);
    }, time);
  }
};

const filterCompanies = (value) =>
  companies.filter(
    company => company
      .normalize('NFD')
      .toLocaleLowerCase()
      .includes(
        value
          .normalize('NFD')
          .toLocaleLowerCase()
      )
  );

const listCompanies = (e) => {
  console.log('argument binded by function.apply', e);
  const filteredCompanies = filterCompanies(input.value);

  let template = '';

  if (filteredCompanies.length > 0) {
    filteredCompanies.forEach(item => {
      template += `<li>${item}</li>`
    });
  } else {
    template = `<p>Company not found</p>`;
  }
  list.innerHTML = template;
}

const handleFilterCompanies = debounce(listCompanies, 300);

input.addEventListener('keyup', (event) => handleFilterCompanies(event));

listCompanies();