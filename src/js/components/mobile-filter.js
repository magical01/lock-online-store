import vars from "../_vars";

document.addEventListener('DOMContentLoaded', () => {
  let openFilters = false;
  vars.catalogFiltersOpen.addEventListener('click', (e) => {
    if (!openFilters) {
      vars.catalogFiltersOpen.textContent = "Закрыть";
      vars.catalogProductLeft.classList.add('catalog-product__left--open');
      openFilters = true;
    } else {
      vars.catalogFiltersOpen.textContent = "Фильтр";
      vars.catalogProductLeft.classList.remove('catalog-product__left--open');
      openFilters = false;
    }
  });

});
