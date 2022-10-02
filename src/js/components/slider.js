import Swiper, { Navigation, Pagination } from 'swiper';
import vars from "../_vars";


Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.hero__slider', {
  loop: true,
  slidesPerView: 'auto',
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.hero-btn-next',
    prevEl: '.hero-btn-prev'
  }
});

const verticalSlider = new Swiper('.slider-block', {
  loop: true,
  slidesPerView: '1',
  speed: 500,
});

vars.sliderNavItems.forEach((elem, index) => {
  elem.setAttribute('data-index', index);
  elem.addEventListener('click', (e) => {
    const index = +e.currentTarget.dataset.index;
    verticalSlider.slideTo(index);
  })
})
