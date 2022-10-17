import vars from '../_vars';

const inputsFilled = (elem) => {
  if (elem.value.length > 0) {
    elem.classList.add('input-form--filled');
  } else {
    elem.classList.remove('input-form--filled');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const reviewsComment = document.querySelector('.tabs-form__comment');
  const orderComment = document.querySelector('.order__textarea');

  vars.inputForm.forEach(elem => {
    elem?.addEventListener('input', () => {
      inputsFilled(elem)
    });
  });

  reviewsComment?.addEventListener('input', () => {
    inputsFilled(reviewsComment);
  });

  orderComment?.addEventListener('input', () => {
    inputsFilled(orderComment);
  });

});
