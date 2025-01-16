import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const initReviewsSwiper = () => {
  new Swiper('.reviews__swiper', {
    modules: [ Navigation ],
    slidesPerView: 'auto',
    spaceBetween: 30,
    simulateTouch: true,
    breakpoints: {
      768: {
        slidesPerView: 'auto',
        simulateTouch: false
      },
      1440: {
        slidesPerView: 'auto',
        spaceBetween: 120,
        simulateTouch: false
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

export {initReviewsSwiper};
