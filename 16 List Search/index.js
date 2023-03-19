const input = document.querySelector('input');
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

input.addEventListener('input', () => {

  

});

const debounce = (callback, time = 500) => {
  let timer;

  clearTimeout(timer);
  timer = setTimeout(() => { callback() }, time);
};

const test = () => console.log('oi')

input.addEventListener('keyup', () => debounce(
  test, 1000
));