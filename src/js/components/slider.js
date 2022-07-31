import Swiper, { Navigation, Pagination } from 'swiper';

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
