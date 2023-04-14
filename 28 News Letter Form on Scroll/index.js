const body = document.querySelector('body');
const genericNav = document.querySelectorAll('nav');

const navMobile = document.querySelector('nav.nav-mobile');
const mobileSectionList = navMobile.querySelector('div.section-list');

const openMenuMobile = document.querySelector('i.open-menu');
const closeMenuMobile = document.querySelector('i.close-menu');
const overlayMobile = navMobile.querySelector('div.overlay');

const subMenuItem = document.querySelectorAll('div.section-list div a'); 
const subMenuContainer = document.querySelectorAll('.sub-itens');
const arrow = document.querySelectorAll('img.arrow');

const mailContainer = document.querySelector('div.mail');
const closeMailContainer = mailContainer.querySelector('span.close');
const submitNewsletterButton = mailContainer.querySelector('form button');

const showMenu = () => {
  mobileSectionList.style.transform = 'translatex(0rem)';
  overlayMobile.style.display = 'block';
  openMenuMobile.style.display = 'none';
  closeMenuMobile.style.display = 'block';
  body.style.overflow = 'hidden';
};

const hideMenu = () => {
  mobileSectionList.style.transform = 'translateX(-100rem)';
  overlayMobile.style.display = 'none';
  openMenuMobile.style.display = 'block';
  closeMenuMobile.style.display = 'none';
  body.style.overflow = 'auto';
};

const applyFluidNav = () => {
  genericNav.forEach(nav => nav.classList.toggle('fluid-nav', window.scrollY > 0))
};

const expandSubMenu = () => {
  const [ desk, mobile ] = subMenuContainer;
  const [ arrowDesk, arrowMobile ] = arrow;

  if (window.innerWidth > 600) {
    desk.classList.toggle('hidden');

    if (!mobile.classList.contains('hidden')) {
      mobile.classList.add('hidden');
      arrowMobile.style.transform = 'rotateX(180deg)';
    }

    if (desk.classList.contains('hidden')) {
      arrowDesk.style.transform = 'rotateX(180deg)';
    } else {
      arrowDesk.style.transform = 'rotateX(0deg)';
    }
  } else {
    mobile.classList.toggle('hidden');

    if (!desk.classList.contains('hidden')) {
      desk.classList.add('hidden');
      arrowDesk.style.transform = 'rotateX(180deg)';
    }

    if (mobile.classList.contains('hidden')) {
      arrowMobile.style.transform = 'rotateX(180deg)';
    } else {
      arrowMobile.style.transform = 'rotateX(0deg)';
    }
  }
};

const showNewsletter = () => {

  const currentState = document.body.scrollTop || document.documentElement.scrollTop;

  const pageHeight = 
    document.documentElement.scrollHeight - document.documentElement.clientHeight;

  const scrollPercent = (currentState / pageHeight) * 100;


  if (scrollPercent > 80 && !mailContainer.classList.contains('dont-show-again')) {
    mailContainer.classList.remove('hidden');
  }
  else {
    mailContainer.classList.add('hidden');
  }
};

const hideNewsletter = () => {
  mailContainer.classList.add('hidden');
  mailContainer.classList.add('dont-show-again');
};

openMenuMobile.addEventListener('click', showMenu);
closeMenuMobile.addEventListener('click', hideMenu);
overlayMobile.addEventListener('click', hideMenu);

closeMailContainer.addEventListener('click', hideNewsletter)
submitNewsletterButton.addEventListener('click', (event) => event.preventDefault());

subMenuItem.forEach(item => 
    item.addEventListener('click', expandSubMenu));

window.addEventListener('scroll', applyFluidNav);
window.addEventListener('scroll', showNewsletter);