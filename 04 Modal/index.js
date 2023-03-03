const openModalButton = document.querySelector('button');

const modalButton = document.querySelector('.modal .content button');
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal-container');

const openModal = () => {
  modalContainer.classList.remove('hidden');
  modal.classList.add('open-modal');
};
const closeModal = () => {
  modal.classList.remove('open-modal');
  modal.classList.add('close-modal');

  setTimeout(() =>  {
    modalContainer.classList.add('hidden');
    modal.classList.remove('close-modal');
  }, 500);
};

const isModalShowing = () => modalContainer.classList.contains('hidden') ? false : true;

openModalButton.addEventListener('click', () => {
  isModalShowing() ? closeModal() : openModal();
});

modalButton.addEventListener('click', closeModal);
