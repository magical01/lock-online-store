import vars from "../_vars"

document.addEventListener('DOMContentLoaded', () => {
  vars.customSelect.forEach(elem => {
    elem?.addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('custom-select--open');

      if (e.target.classList.contains('custom-select__item')) {
        let text = e.target.textContent;
        document.querySelector('.custom-select__top').textContent = text;
      }
    });

    elem?.addEventListener('focus', (e) => {
      e.currentTarget.classList.add('custom-select--open');
    });

    elem?.addEventListener('blur', (e) => {
      e.currentTarget.classList.remove('custom-select--open');
    });
  });
});
