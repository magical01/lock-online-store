import vars from '../_vars';
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

});



