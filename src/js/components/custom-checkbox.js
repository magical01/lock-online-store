import vars from '../_vars';

const changeCheckbox = (elem) => {
  let checked = elem.querySelector('input').checked;

  if (checked) {
    elem.querySelector('.custom-checkbox').classList.add('custom-checkbox--active');
  } else {
    elem.querySelector('.custom-checkbox').classList.remove('custom-checkbox--active');
  }
}

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

  vars.checkboxItem?.forEach(elem => {
    elem.querySelector('input').addEventListener('change', () => {
      changeCheckbox(elem)
    });
  });

  vars.equipmentCheckbox?.forEach(elem => {
    elem.querySelector('input').addEventListener('change', () => {
      changeCheckbox(elem)
    });
  });

  vars.applicationCheckbox?.forEach(elem => {
    elem.querySelector('input').addEventListener('change', () => {
      changeCheckbox(elem)
    });
  });

  vars.projectsCheckbox?.forEach(elem => {
    elem.querySelector('input').addEventListener('change', () => {
      changeCheckbox(elem)
    });
  });

  vars.shippingCheckbox?.forEach(elem => {
    elem.querySelector('input').addEventListener('change', () => {
      changeCheckbox(elem)
    });
  });

});



