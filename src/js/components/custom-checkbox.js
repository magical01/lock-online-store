import vars from '../_vars';

vars.checkboxItem?.forEach(elem => {
  elem.querySelector('input').addEventListener('change', () => {
    let checked = elem.querySelector('input').checked;

    if (checked) {
      elem.querySelector('.custom-checkbox').classList.add('custom-checkbox--active');
    } else {
      elem.querySelector('.custom-checkbox').classList.remove('custom-checkbox--active');
    }
  });
});

vars.filtersItem?.forEach(elem => {
  elem.querySelector('input').addEventListener('change', () => {
    let checked = elem.querySelector('input').checked;

    if (checked) {
      elem.querySelector('.custom-checkbox').classList.add('custom-checkbox--active');
    } else {
      elem.querySelector('.custom-checkbox').classList.remove('custom-checkbox--active');
    }
  });
});


