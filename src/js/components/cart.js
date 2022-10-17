import vars from "../_vars";

document.addEventListener('DOMContentLoaded', () => {

  let randomId = 0;
  let price = 0;

  const priceWithoutSpaces = (str) => {
    return str.replace(/\s/g, '');
  };

  const normalPrice = (str) => {
    return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  };

  const plusFullPrice = (currentPrice) => {
    return price += currentPrice;
  };

  const minusFullPrice = (currentPrice) => {
    return price -= currentPrice;
  };

  const printFullPrice = () => {
    vars.fullPrice.textContent = `${normalPrice(price)}`
  };

  const printCount = () => {
    let length = vars.cartList.querySelector('.simplebar-content').children.length;
    vars.basketCount.textContent = length;

    if (length > 0) {
      vars.basket.classList.add('basket--active');
      document.querySelector('.popup__product').classList.remove('popup__product-empty--show');
      document.querySelector('.popup__link').classList.remove('popup__link--disabled');
    } else {
      vars.basket.classList.remove('basket--active');
      vars.fullPrice.textContent = '0';
      document.querySelector('.popup__product').classList.add('popup__product-empty--show');
      document.querySelector('.popup__link').classList.add('popup__link--disabled');
    }
  };

  const generateCartProduct = (img, title, price, id) => {
    return `
    <li class="cart__item" data-id="${id}">
          <div class="cart__left">
            <picture class="cart__picture">
              <source srcset="${img}.avif" type="image/avif">
              <source srcset="${img}.webp" type="image/webp">
              <img loading="lazy" src="${img}.png" class="image" width="136" height="120" alt="${title}">
            </picture>
          </div>
          <div class="cart__right">
            <div class="cart__right-top">
              <span class="cart__title">${title}</span>
              <button class="cart__delete btn-reset cart-main__btn" aria-label="Удалить товар">
                <svg class="cart__delete-svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 6H20L18.42 20.22C18.3658 20.7094 18.1331 21.1616 17.7663 21.49C17.3994 21.8184 16.9244 22 16.432 22H7.568C7.07564 22 6.60056 21.8184 6.23375 21.49C5.86693 21.1616 5.63416 20.7094 5.58 20.22L4 6Z"
                    stroke="#4295E4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M7.345 3.147C7.50675 2.80397 7.76271 2.514 8.083 2.31091C8.4033 2.10782 8.77474 2 9.154 2H14.846C15.2254 1.99981 15.5971 2.10755 15.9176 2.31064C16.2381 2.51374 16.4942 2.80381 16.656 3.147L18 6H6L7.345 3.147Z"
                    stroke="#4295E4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M2 6H22" stroke="#4295E4" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M10 11V16" stroke="#4295E4" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M14 11V16" stroke="#4295E4" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
                <span class="cart__delete-span">Удалить</span>
              </button>
            </div>
            <p class="cart__gift">+ Подарок: <a class="cart__gift-link focus-offset" href="#">“Приложение к замкам
                Golden
                Service”</a>
            </p>
            <div class="cart__right-bottom">
              <div class="cart__stepper stepper">
                <button class="stepper__btn stepper__btn--minus btn-reset focus-offset" aria-label="Минус">-</button>
                <input class="stepper__input input-reset focus-offset" type="text" min="1" max="10" maxlength="2"
                  value="1">
                <button class="stepper__btn stepper__btn--plus btn-reset focus-offset" aria-label="Плюс">+</button>
              </div>
              <span class="cart__price price-symbol">${normalPrice(price)}</span>
            </div>
          </div>
      </li>

    `
  };

  const deleteProducts = (productParent) => {
    let id = productParent.dataset.id;
    document.querySelector(`.product[data-id="${id}"]`).querySelector('.to-cart').disabled = false;

    let currentPrice = +priceWithoutSpaces(productParent.querySelector('.cart__price').textContent);
    minusFullPrice(currentPrice);
    productParent.remove();
    printFullPrice();

    printCount();

    updateStorage();
  }

  vars.productsBtn.forEach(elem => {
    elem.closest('.product').setAttribute('data-id', randomId++);

    elem?.addEventListener('click', (e) => {
      e.preventDefault();
      let self = e.currentTarget;
      let parent = self.closest('.product');
      let id = parent.dataset.id;
      let img = parent.querySelector('.product__img').getAttribute('src');
      let title = parent.querySelector('.product__title').textContent;
      let priceNum = +priceWithoutSpaces(parent.querySelector('.product__newprice').textContent);

      const pathImage = (img) => {
        let index = img.indexOf('.');
        return img.substring(0, index);
      }

      plusFullPrice(priceNum);

      printFullPrice();

      vars.cartList.querySelector('.simplebar-content').insertAdjacentHTML('afterbegin', generateCartProduct(pathImage(img), title, priceNum, id))
      printCount();

      updateStorage();

      self.disabled = true;
    });
  });

  vars.cartList?.addEventListener('click', (e) => {
    if (e.target.classList.contains('cart__delete')) {
      deleteProducts(e.target.closest('.cart__item'));
    }

    else if (e.target.classList.contains('cart__delete-svg')) {
      deleteProducts(e.target.closest('.cart__item'));
    }

    else if (e.target.classList.contains('cart__delete-span')) {
      deleteProducts(e.target.closest('.cart__item'));
    }

  });

  const countSum = () => {
    document.querySelectorAll('.cart__price').forEach(elem => {
      price += +priceWithoutSpaces(elem.textContent);
    });
  }

  const initialState = () => {
    if (localStorage.getItem('products') !== null) {
      vars.cartList.querySelector('.simplebar-content').innerHTML = localStorage.getItem('products');
      printCount();
      countSum();
      printFullPrice();

      document.querySelectorAll('.cart__item').forEach(elem => {
        let id = elem.dataset.id;
        document.querySelector(`.product[data-id="${id}"]`).querySelector('.to-cart').disabled = true;
      })
    }
  };

  initialState();

  const updateStorage = () => {
    let parent = vars.cartList.querySelector('.simplebar-content');
    let html = parent.innerHTML;
    html = html.trim();
    localStorage.setItem('products', html);

    if (html.length) {
      localStorage.setItem('products', html);
    } else {
      localStorage.removeItem('products');
    }
  }

  document.querySelectorAll('.stepper').forEach(elem => {
    if (elem.querySelector('.stepper__input').value == 1) {
      elem.querySelector('.stepper__btn--minus').classList.add('stepper__btn--disabled');
    } else {
      elem.querySelector('.stepper__btn--minus').classList.remove('stepper__btn--disabled');
    }
  });

//  stepper
  vars.cartList?.addEventListener('click', (e) => {

    if (e.target.classList.contains('stepper__btn--plus')) {
      const parent = e.target.closest('.cart__item');
      let currentValue = parent.querySelector('.stepper__input').value;
      currentValue++;
      parent.querySelector('.stepper__input').value = currentValue;

      parent.querySelector('.stepper__btn--minus').classList.remove('stepper__btn--disabled');

      plusFullPrice(+priceWithoutSpaces(parent.querySelector('.cart__price').textContent))
      printFullPrice();

      if (parent.querySelector('.stepper__input').value > 9) {
        parent.querySelector('.stepper__input').value = 10;
        parent.querySelector('.stepper__btn--plus').classList.add('stepper__btn--disabled');

      } else {
        parent.querySelector('.stepper__btn--plus').classList.remove('stepper__btn--disabled');

      }
    }

    if (e.target.classList.contains('stepper__btn--minus')) {
      const parent = e.target.closest('.cart__item');
      let currentValue = parent.querySelector('.stepper__input').value;
      currentValue--;
      parent.querySelector('.stepper__input').value = currentValue;

      parent.querySelector('.stepper__btn--plus').classList.remove('stepper__btn--disabled');

      minusFullPrice(+priceWithoutSpaces(parent.querySelector('.cart__price').textContent))
      printFullPrice();

      if (parent.querySelector('.stepper__input').value <= 1) {
        parent.querySelector('.stepper__input').value = 1;
        parent.querySelector('.stepper__btn--minus').classList.add('stepper__btn--disabled');
      } else {
        parent.querySelector('.stepper__btn--minus').classList.remove('stepper__btn--disabled');
      }
    }

  });

  vars.basket?.addEventListener('click', () => {
    document.querySelectorAll('.stepper').forEach(elem => {
      if (elem.querySelector('.stepper__input').value == 1) {
        elem.querySelector('.stepper__btn--minus').classList.add('stepper__btn--disabled');
      } else {
        elem.querySelector('.stepper__btn--minus').classList.remove('stepper__btn--disabled');
      }
    });
  })
});
