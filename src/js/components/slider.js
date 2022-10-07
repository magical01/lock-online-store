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
  },
  speed: 500,
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
  });

  elem.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
      const index = +e.currentTarget.dataset.index;
      verticalSlider.slideTo(index);
    }
  });
});

const projectSlider = new Swiper('.projects-swiper', {
  loop: true,
  slidesPerView: 'auto',
  pagination: {
    el: '.projects__pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.projects-btn-next',
    prevEl: '.projects-btn-prev'
  },
  speed: 500,
});
