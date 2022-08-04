const checkboxItem = document?.querySelectorAll('.descr-top__item');
const filtersItem = document?.querySelectorAll('.filters__item');

checkboxItem?.forEach(elem => {
  elem.querySelector('input').addEventListener('change', () => {
    let checked = elem.querySelector('input').checked;

    if (checked) {
      elem.querySelector('.custom-checkbox').classList.add('custom-checkbox--active');
    } else {
      elem.querySelector('.custom-checkbox').classList.remove('custom-checkbox--active');
    }
  });
});

filtersItem?.forEach(elem => {
  elem.querySelector('input').addEventListener('change', () => {
    let checked = elem.querySelector('input').checked;

    if (checked) {
      elem.querySelector('.custom-checkbox').classList.add('custom-checkbox--active');
    } else {
      elem.querySelector('.custom-checkbox').classList.remove('custom-checkbox--active');
    }
  });
});


