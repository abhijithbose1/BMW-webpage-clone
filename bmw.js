const button = document.querySelector('#search-open');
const div = document.querySelector('#ul-items');

button.addEventListener('click', () => {
  if (div.hasAttribute('hidden')) {
    div.removeAttribute('hidden');
  } else {
    div.setAttribute('hidden', '');
  }
});