import vars from "../_vars";

document.addEventListener('DOMContentLoaded', () => {

  const createChoiceItem = (text) => {
    return (
      `
      <button class="catalog-props__btn btn-reset focus-offset" data-choice-text="${text}">
        ${text}
        <svg aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 1L1 9M9 9L1 1L9 9Z" stroke="#E44286" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      `
    )
  }

  vars.filtersItem?.forEach(elem => {
    elem.querySelector('input').addEventListener('change', () => {
      let checked = elem.querySelector('input').checked;

      if (checked) {
        elem.querySelector('.custom-checkbox').classList.add('custom-checkbox--active');
        let text = elem.querySelector('.custom-checkbox__text').textContent;
        vars.catalogPropsLeft.insertAdjacentHTML('afterbegin', createChoiceItem(text));
      } else {
        elem.querySelector('.custom-checkbox').classList.remove('custom-checkbox--active');
        let text = elem.querySelector('.custom-checkbox__text').textContent;
        document.querySelector(`[data-choice-text="${text}"]`).remove();
      }
    });
  });

  vars.catalogPropsLeft?.addEventListener('click', (e) => {

    if (e.target.classList.contains('catalog-props__btn')) {
      e.target.remove();
      let text = e.target.textContent.trimLeft().trimRight();
      document.querySelector(`[data-text="${text}"]`).querySelector('input').checked = false;
      document.querySelector(`[data-text="${text}"]`).classList.remove('custom-checkbox--active');
    }
  });


});
