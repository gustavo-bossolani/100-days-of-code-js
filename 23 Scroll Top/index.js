const button = document.querySelector('button');
const rootElement = document.documentElement;

const scrollOffset = rootElement.scrollHeight - rootElement.clientHeight;

button.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

document.addEventListener('scroll', () => {
  if (rootElement.scrollTop / scrollOffset > 0.3) {
    button.classList.remove('hidden');
  } else {
    button.classList.add('hidden');
  }
});