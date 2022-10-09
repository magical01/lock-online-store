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
  breakpoints: {
    // when window width is >= 320px
    1024: {
      slidesPerView: '4',
      spaceBetween: 30
    },
    695: {
      slidesPerView: '3',
      spaceBetween: 25
    },
    476: {
      slidesPerView: '2',
      spaceBetween: 25
    },
    320: {
      slidesPerView: '1',
    },

    200: {
      slidesPerView: '1',
    },
    // when window width is >= 480px
    // 480: {
    //   slidesPerView: 3,
    //   spaceBetween: 30
    // },
    // // when window width is >= 640px
    // 640: {
    //   slidesPerView: 4,
    //   spaceBetween: 40
    // }
  }
});
