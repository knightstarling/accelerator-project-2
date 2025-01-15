import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const initToursSwiper = () => {
  new Swiper('.tours__swiper', {
    modules: [ Navigation ],
    slidesPerView: 1,
    spaceBetween: 15,
    simulateTouch: true,
    loop: false,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
        simulateTouch: false
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
        simulateTouch: false
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

export {initToursSwiper};
