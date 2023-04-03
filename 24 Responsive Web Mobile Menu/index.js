const toggleMenu = document.querySelector('i.menu');
const closeMenu = document.querySelector('i.menu-close');
const sectionList = document.querySelector('div.section-list');

toggleMenu.addEventListener('click', () => {
  closeMenu.style.display = 'block';
  toggleMenu.style.display = 'none';
  sectionList.style.transform = 'translateY(0)';
});

closeMenu.addEventListener('click', () => {
  closeMenu.style.display = 'none';
  toggleMenu.style.display = 'block';
  sectionList.style.transform = 'translateY(-200%)';
});

window.addEventListener('resize', () => {
  if (document.documentElement.offsetWidth > 600) {
    sectionList.style.transform = null;
  }
});