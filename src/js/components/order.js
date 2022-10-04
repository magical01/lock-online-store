

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector('.order-confirm__add');
  const promocode = document.querySelector('.order-promocode');

  btn?.addEventListener('click', () => {

    promocode.classList.toggle('order-promocode--active');

    if (promocode.classList.contains('order-promocode--active')) {
      btn.setAttribute('aria-expanded', true);
      btn.setAttribute('aria-label', 'Закрыть промокод');
      promocode.setAttribute('aria-hidden', false);
      promocode.style.maxHeight = promocode.scrollHeight + 'px';
      btn.textContent = 'Закрыть';
    } else {
      btn.setAttribute('aria-expanded', false);
      btn.setAttribute('aria-label', 'Открыть промокод');
      promocode.setAttribute('aria-hidden', true);
      promocode.style.maxHeight = null;
      btn.textContent = 'Добавить';
    }
  })

});

