import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const popularSlider = new Swiper('.popular__slider', {
  loop: true,
  slidesPerView: '4',
  spaceBetween: 30,
  navigation: {
    nextEl: '.popular-btn-next',
    prevEl: '.popular-btn-prev'
  },
  speed: 500,
});
