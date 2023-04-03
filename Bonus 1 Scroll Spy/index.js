const nav = document.querySelector('header nav.nav');

const sectionOne = document.querySelector('section#one');
const sectionTwo = document.querySelector('section#two');
const sectionThree = document.querySelector('section#three');
const sectionFour = document.querySelector('section#four');
const sectionFive = document.querySelector('section#five');

const anchorOne = document.querySelector('a[href="#one"]');
const anchorTwo = document.querySelector('a[href="#two"]');
const anchorThree = document.querySelector('a[href="#three"]');
const anchorFour = document.querySelector('a[href="#four"]');
const anchorFive = document.querySelector('a[href="#five"]');

const toggleNav = () => nav.classList.toggle('fluid-nav', window.scrollY > 0);
const spyCurrentSection = () => {
  const navPosition = window.scrollY + nav.offsetHeight;

  //  recuperando a distância da section selecionada com pai (nav) e somando com a altura em px da section
  const sectionOnePosition = sectionOne.offsetTop + sectionOne.offsetHeight;
  const sectionTwoPosition = sectionTwo.offsetTop + sectionTwo.offsetHeight;
  const sectionThreePosition = sectionThree.offsetTop + sectionThree.offsetHeight;
  const sectionFourPosition = sectionFour.offsetTop + sectionFour.offsetHeight;
  const sectionFivePosition = sectionFive.offsetTop + sectionFive.offsetHeight;
  
  const distanceSectionOne = sectionOnePosition - navPosition;
  const distanceSectionTwo = sectionTwoPosition - navPosition;
  const distanceSectionThree = sectionThreePosition - navPosition;
  const distanceSectionFour = sectionFourPosition - navPosition;
  const distanceSectionFive = sectionFivePosition - navPosition;

  const distances = [
    distanceSectionOne,
    distanceSectionTwo,
    distanceSectionThree,
    distanceSectionFour,
    distanceSectionFive
  ]
    .filter(distance => distance > 0);

  const min = Math.min(...distances);
  document.querySelectorAll('a').forEach(section => section.classList.remove('active'));
  
  if (min === distanceSectionOne) {
    anchorOne.classList.add('active');
  }
  
  if (min === distanceSectionTwo) {
    anchorTwo.classList.add('active');
  }
  
  if (min === distanceSectionThree) {
    anchorThree.classList.add('active');
  }
  
  if (min === distanceSectionFour) {
    anchorFour.classList.add('active');
  }
  
  if (min === distanceSectionFive) {
    anchorFive.classList.add('active');
  }
};

document.addEventListener('scroll', () => {
  toggleNav();
  spyCurrentSection();
});