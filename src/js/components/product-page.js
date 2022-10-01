import vars from "../_vars";
import {changeCheckbox} from "./catalog-filters-toggle";

document.addEventListener('DOMContentLoaded', () => {

  vars.productCheckboxesItem?.forEach(elem => {
    elem.querySelector('input').addEventListener('change', () => {
      changeCheckbox(elem)
    });
  });

  vars.tabsСheckboxes?.forEach(elem => {
    elem.querySelector('input').addEventListener('change', () => {
      changeCheckbox(elem)
    });
  });

  document.querySelectorAll('.accordion--active').forEach(elem => {
    elem.children[1].style.maxHeight = elem.children[1].scrollHeight + 'px';
  });

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
});


