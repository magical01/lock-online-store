import {disableScroll} from '../functions/disable-scroll';
import {enableScroll} from '../functions/enable-scroll';
import vars from '../_vars';


vars.catalog?.addEventListener('click', (e) => {
  vars.catalog.classList.toggle('nav__link-catalog--open');
  vars.modal.classList.toggle('modals-catalog--open');

  if (document.querySelector('.modals-catalog--open')) {
    disableScroll();
  } else {
    enableScroll();
  }
});

document.querySelector('.modals-catalog__close')?.addEventListener('click', (e) => {
  vars.catalog.classList.remove('nav__link-catalog--open');
  vars.modal.classList.remove('modals-catalog--open');
  enableScroll();
});



