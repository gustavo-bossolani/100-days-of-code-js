const section = document.querySelector('section');

// search section
const searchInput = document.querySelector('input');
const searchButton = document.querySelector('button');
const errorText = document.querySelector('.error');

// result section
const searchContent = document.querySelector('.search-content');
const imgWeather = document.querySelector('.search-content img');
const cityText = document.querySelector('.search-content p.city');
const dayText = document.querySelector('.search-content p.day');
const tempText = document.querySelector('.search-content p.temp');
const weatherText = document.querySelector('.search-content p.weather');
const tempRangeText = document.querySelector('.search-content p.temp-range');

const api = {
  key: 'f3659064c2cb250596dfae9f32db9b56',
  base: 'https://api.openweathermap.org/data/2.5/',
};


const getWeather = async (value) => {
  const response = await fetch(`${api.base}weather?q=${value}&units=metric&lang=pt_br&appid=${api.key}`,)
  return response.json();
};

const showData = (response) => {
  if (response.cod >= 400) {
    errorText.textContent = 'Please enter a valid city';
    searchInput.value = '';
  } else {
    searchContent.classList.remove('hidden');
    imgWeather.src = `http://openweathermap.org/img/w/${response.weather[0].icon}.png`
    cityText.textContent = `${response.name}, ${response.sys.country}`;
    dayText.textContent = new Date().toLocaleDateString('pt-br', { dateStyle: 'full' });
    tempText.textContent = `Temp ${Math.round(response.main.temp)}ºC`;
    weatherText.textContent = `Weather ${response.weather[0].description}`;
    tempRangeText.textContent = 
      `Temp Range ${Math.round(response.main.temp_min)}ºC / ${Math.round(response.main.temp_max)}ºC`;
  }
};

searchButton.addEventListener('click', async () => {

  if (searchInput.value) {
    const response = await getWeather(searchInput.value);
    showData(response);
  }

});


