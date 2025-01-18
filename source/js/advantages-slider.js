import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const initAdvantagesSwiper = () => {
  new Swiper('.advantages__swiper', {
    modules: [ Navigation ],
    breakpoints: {
      320: {
        enabled: false
      },
      768: {
        enabled: false
      },
      1440: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        initialSlide: 2,
        centeredSlides: true,
        loopAddBlankSlides: false,
        simulateTouch: false,
        enabled: true
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

export { initAdvantagesSwiper };
