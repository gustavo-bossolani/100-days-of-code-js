const buttonVideo = document.querySelector('#button-video');
const buttonLink = document.querySelector('#button-link');
const buttonAudio = document.querySelector('#button-audio');

const sectionVideo = document.querySelector('#section-video');
const sectionLink = document.querySelector('#section-link');
const sectionAudio = document.querySelector('#section-audio');


buttonVideo.addEventListener('click', () => {
  sectionVideo.classList.remove('hidden');
  sectionLink.classList.add('hidden');
  sectionAudio.classList.add('hidden');
});

buttonLink.addEventListener('click', () => {
  sectionVideo.classList.add('hidden');
  sectionLink.classList.remove('hidden');
  sectionAudio.classList.add('hidden');
});

buttonAudio.addEventListener('click', () => {
  sectionVideo.classList.add('hidden');
  sectionLink.classList.add('hidden');
  sectionAudio.classList.remove('hidden');
});