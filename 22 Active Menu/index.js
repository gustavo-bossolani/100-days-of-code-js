const itemList = document.querySelectorAll('div.theme-list a');

const toggleActiveItem = (event) => {
  event.preventDefault();
  const selectedItem = event.target;

  selectedItem.classList.toggle(
    'active',
    !selectedItem.classList.contains('active')
  );

  itemList.forEach(item => {
    if (item !== selectedItem) {
      item.classList.remove('active');
    }
  });
};

itemList.forEach(item => item.addEventListener('click', toggleActiveItem));
