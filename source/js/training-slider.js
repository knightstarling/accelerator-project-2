import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const initTrainingSwiper = () => {
  new Swiper('.training__swiper', {
    modules: [ Navigation ],
    slidesPerView: 1,
    spaceBetween: 15,
    simulateTouch: true,
    loop: false,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        simulateTouch: false
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 20,
        simulateTouch: false
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

export { initTrainingSwiper };
