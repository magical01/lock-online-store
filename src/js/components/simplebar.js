import SimpleBar from 'simplebar';

if (document.querySelector(`[data-bar]`)) {
  new SimpleBar(document.querySelector('.addition__list'));
}

if (document.querySelector(`[data-cart]`)) {
  new SimpleBar(document.querySelector('.popup__list'));
}

