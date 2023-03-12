const title = document.querySelector('h1');

const handleLocaton = (location) => {
  const { latitude, longitude } = location.coords;
  title.innerText = `Latitude: ${latitude} \n Longitude: ${longitude}`;
}

const handleErrorLocation = (error) => {
  if (error.code === 1) {
    title.innerText = 'You need to give location permission.';
  }
}

const getLocation = () => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  
  navigator.geolocation.getCurrentPosition(
    handleLocaton,
    handleErrorLocation,
    options
  );

};

getLocation();