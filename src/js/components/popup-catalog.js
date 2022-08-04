const catalog = document?.querySelector('.nav__link-catalog');
const modal = document?.querySelector('.modals-catalog');


catalog?.addEventListener('click', (e) => {
  catalog.classList.toggle('nav__link-catalog--open')
  document.querySelector('.modals-catalog').classList.toggle('modals-catalog--open');

});

