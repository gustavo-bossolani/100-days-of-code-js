const nav = document.querySelector('header nav.sticky-nav');
const scrollIndicator = document.querySelector('div.scroll-indicator');

document.addEventListener('scroll', () => {
  nav.classList.toggle('fluid-nav', window.scrollY > 0);
  
  // body.scrollTop = firefox
  // document.documentElement = outros navegadores
  const currentState = document.body.scrollTop || document.documentElement.scrollTop;

  const pageHeight = document.documentElement.
    scrollHeight - document.documentElement.clientHeight;

  const scrollPercentage = (currentState / pageHeight) * 100;

  scrollIndicator.style.width = `${scrollPercentage}%`

});