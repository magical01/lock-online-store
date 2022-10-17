import vars from "../_vars";
import {changeCheckbox} from "./catalog-filters-toggle";


document.addEventListener('DOMContentLoaded', () => {

  const tabsHandler = (path) => {
    vars.tabsBtn.forEach(elem => {elem.classList.remove('product-tabs__btn--active')});
    document.querySelector(`[data-tabs-path="${path}"]`).classList.add('product-tabs__btn--active');

    vars.tabsContent.forEach(elem => {elem.classList.remove('product-tabs__content--active')});
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('product-tabs__content--active');
  }


  // choice only one color
  vars.productColor?.addEventListener('click', (e) => {
    if (e.target.classList.contains('color__button')) {
      vars.productColorBtns.forEach(elem => elem.classList.remove('color__button--active'));

      e.target.classList.add('color__button--active');
    }
  })

  document.querySelectorAll('.accordion--active').forEach(elem => {
    elem.children[1].style.maxHeight = elem.children[1].scrollHeight + 'px';
  });

  // accordion
  vars.accordions.forEach(elem => {
    elem?.addEventListener('click', (e) => {
      const self = e.currentTarget;
			const control = self.querySelector('.accordion__control');
			const content = self.querySelector('.accordion__content');

			self.classList.toggle('accordion--active');

			if (self.classList.contains('accordion--active')) {
				control.setAttribute('aria-expanded', true);
				content.setAttribute('aria-hidden', false);
				content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
				content.style.maxHeight = null;
			}
    });
  });

  // tabs

  vars.tabs?.addEventListener('click', (e) => {
    if (e.target.classList.contains('product-tabs__btn')) {
      const path = e.target.dataset.tabsPath;
      tabsHandler(path)
    }
  });
});


