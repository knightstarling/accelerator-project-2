import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const initGallerySwiper = () => {
  new Swiper('.gallery__swiper', {
    modules: [ Navigation ],
    slidesPerView: 2,
    spaceBetween: 5,
    simulateTouch: true,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 3,
        simulateTouch: false
      },
      1440: {
        slidesPerView: 5,
        enabled: false
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

export { initGallerySwiper };
