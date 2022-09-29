export default {
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  catalog: document?.querySelector('.nav__link-catalog'),
  modal: document?.querySelector('.modals-catalog'),
  checkboxItem: document?.querySelectorAll('.descr-top__item'),
  filtersItem: document?.querySelectorAll('.filters__item'),
  filtersContent: document?.querySelectorAll('.filters__content'),
  filtersTop: document?.querySelectorAll('.filters__top'),
  reset: document?.querySelector('.reset-filters'),
  customSelect: document?.querySelectorAll('.custom-select'),
}
