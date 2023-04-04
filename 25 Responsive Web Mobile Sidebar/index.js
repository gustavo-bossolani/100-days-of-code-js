const body = document.querySelector('body');
const genericNav = document.querySelectorAll('nav');

const navMobile = document.querySelector('nav.nav-mobile');
const mobileSectionList = navMobile.querySelector('div.section-list');

const openMenuMobile = document.querySelector('i.open-menu');
const closeMenuMobile = document.querySelector('i.close-menu');
const overlayMobile = navMobile.querySelector('div.overlay');


const showMenu = () => {
  mobileSectionList.style.transform = 'translatex(0rem)';
  overlayMobile.style.display = 'block';
  openMenuMobile.style.display = 'none';
  closeMenuMobile.style.display = 'block';
  body.style.overflow = 'hidden';
};

const hideMenu = () => {
  mobileSectionList.style.transform = 'translatex(-100rem)';
  overlayMobile.style.display = 'none';
  openMenuMobile.style.display = 'block';
  closeMenuMobile.style.display = 'none';
  body.style.overflow = 'auto';
};

const applyFluidNav = () => {
  genericNav.forEach(nav => nav.classList.toggle('fluid-nav', window.scrollY > 0))
};

openMenuMobile.addEventListener('click', showMenu);
closeMenuMobile.addEventListener('click', hideMenu);
overlayMobile.addEventListener('click', hideMenu);
window.addEventListener('scroll', applyFluidNav);
