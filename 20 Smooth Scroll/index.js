const links = document.querySelectorAll('header nav li a');

const smoothScroll = (event) => {
  event.preventDefault();

  const href = event.target.getAttribute('href');

  document.querySelector(href).scrollIntoView({
    behavior: 'smooth'
  });
};

links.forEach(link => link.addEventListener('click', smoothScroll));
