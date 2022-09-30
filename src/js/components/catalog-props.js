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

  });
});
