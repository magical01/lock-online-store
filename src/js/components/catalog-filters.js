import vars from '../_vars';

document.addEventListener('DOMContentLoaded', () => {
  // vars.filtersTop?.forEach(elem => {
  //   elem?.addEventListener('click', (e) => {
  //     e.currentTarget.closest('.filters__content').classList.toggle('filters__content--open');
  //   });
  // });

  document.querySelectorAll('.filters__content--open').forEach(elem => {
    elem.children[1].style.maxHeight = elem.children[1].scrollHeight + 'px';
  });

  vars.reset?.addEventListener('click', (e) => {
    vars.filtersContent.forEach(elem => {
      elem.classList.remove('filters__content--open');
    });
    document.querySelectorAll('.filters__bottom').forEach(elem => {
      elem.style.maxHeight = null;
    });

    Array.from(vars.catalogPropsLeft.children).forEach(elem => {
      elem.remove();
    });

    vars.filtersItem.forEach(elem => {
      elem.querySelector('input').checked = false;
      elem.querySelector('.custom-checkbox').classList.remove('custom-checkbox--active');
    })
  });

  vars.filtersTop.forEach(elem => {
    elem?.addEventListener('click', (e) => {
      const self = e.currentTarget.closest('.filters__content');
      const top = self.querySelector('.filters__top');
      const bottom = self.querySelector('.filters__bottom');

      self.classList.toggle('filters__content--open');

      if (self.classList.contains('filters__content--open')) {
				top.setAttribute('aria-expanded', true);
				top.setAttribute('aria-label', 'Закрыть фильтр');
				bottom.setAttribute('aria-hidden', false);
				bottom.style.maxHeight = bottom.scrollHeight + 'px';
			} else {
				top.setAttribute('aria-expanded', false);
				top.setAttribute('aria-label', 'Открыть фильтр');
				bottom.setAttribute('aria-hidden', true);
				bottom.style.maxHeight = null;
			}
    });
  });


});
