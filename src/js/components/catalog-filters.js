const filtersTop = document?.querySelectorAll('.filters__top');
const reset = document?.querySelector('.reset-filters');

filtersTop?.forEach(elem => {
  elem?.addEventListener('click', (e) => {
    e.currentTarget.closest('.filters__content').classList.toggle('filters__content--open')
  });
});

reset?.addEventListener('click', (e) => {
  document.querySelectorAll('.filters__content').forEach(elem => {
    elem.classList.remove('filters__content--open')
  });
});
