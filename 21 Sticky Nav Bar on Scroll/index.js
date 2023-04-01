const nav = document.querySelector('header nav.sticky-nav');

document.addEventListener('scroll', () => {
  nav.classList.toggle('fluid-nav', window.scrollY > 0);
});