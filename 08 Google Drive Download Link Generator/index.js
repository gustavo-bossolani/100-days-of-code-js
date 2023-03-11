const buttonVideo = document.querySelector('#button-video');
const buttonLink = document.querySelector('#button-link');
const buttonAudio = document.querySelector('#button-audio');

const sectionVideo = document.querySelector('#section-video');
const sectionLink = document.querySelector('#section-link');
const sectionAudio = document.querySelector('#section-audio');

// link section declarations
const linkInput = document.querySelector('#section-link input');
const linkButton = document.querySelector('#section-link button');
const linkTextarea = document.querySelector('#section-link div.generated-area textarea');
const linkCopyButton = document.querySelector('#section-link div.generated-area button');

// audio section declarations
const audioTextarea = document.querySelector('#section-audio div.generated-area textarea');
const audioCopyButton = document.querySelector('#section-audio div.generated-area button');
const audioPreview = document.querySelector('#section-audio #preview');

// video section declarations
const videoTextarea = document.querySelector('#section-video div.generated-area textarea');
const videoCopyButton = document.querySelector('#section-video div.generated-area button');
const videoPreview = document.querySelector('#section-video #preview');

const showVideoContent = () => {
  sectionVideo.classList.remove('hidden');
  sectionLink.classList.add('hidden');
  sectionAudio.classList.add('hidden');

  buttonVideo.classList.add('active');
  buttonLink.classList = '';
  buttonAudio.classList = '';
};

const showAudioContent = () => {
  sectionVideo.classList.add('hidden');
  sectionLink.classList.add('hidden');
  sectionAudio.classList.remove('hidden');

  buttonVideo.classList = '';
  buttonLink.classList = '';
  buttonAudio.classList.add('active');
};

const showLinkContent = () => {
  sectionVideo.classList.add('hidden');
  sectionLink.classList.remove('hidden');
  sectionAudio.classList.add('hidden');

  buttonVideo.classList = '';
  buttonLink.classList.add('active');
  buttonAudio.classList = '';
};

const copyToClipboard = async (value) => {
  if (!value) return;
  await navigator.clipboard.read();

  const data = [
    new ClipboardItem(
      { 'text/plain': new Blob([value], { type: 'text/plain' }) }
    )
  ];
  await navigator.clipboard.write(data);

  alert('Copied!');
};

const generateDirectLink = () => {
  const confirmLink = linkInput.value.includes('https://drive.google.com/file/d');
  if (confirmLink) {
    const getDownloadLink = linkInput.value
      .replace(
        'https://drive.google.com/file/d/',
        'https://drive.google.com/uc?export=download&id='
      )
      .replace('/view?usp=share_link', '');

    linkTextarea.value = getDownloadLink;
  }
};

const generateEmbedAudioLink = () => {
  const audioTag = `<audio width="300" height="32" controls="controls" src="${linkTextarea.value}" type="audio/mp3"></audio>`
  audioTextarea.value = audioTag;
  audioPreview.innerHTML = `<p>Preview</p> \n${audioTag}`;
};

const generateEmbedVideoLink = () => {
  const videoLink = linkInput.value
    .replace('/view?usp=share_link', '');

  const embedVideoLink = `<iframe src="${videoLink}/preview" width="560" height="315"></iframe>`
  videoTextarea.value = embedVideoLink;
  videoPreview.innerHTML = `<p>Preview</p> \n${embedVideoLink}`;
};

// section buttons
buttonVideo.addEventListener('click', () => {
  showVideoContent();
});

buttonLink.addEventListener('click', () => {
  showLinkContent();
});

buttonAudio.addEventListener('click', () => {
  showAudioContent();
});

// link section methods
linkButton.addEventListener('click', () => {
  generateDirectLink();
  generateEmbedAudioLink();
  generateEmbedVideoLink();
});
linkCopyButton.addEventListener('click', () => copyToClipboard(linkTextarea.value));

// audio section methods
audioCopyButton.addEventListener('click', () => copyToClipboard(audioTextarea.value));

// video section methods
videoCopyButton.addEventListener('click', () => copyToClipboard(videoTextarea.value));
