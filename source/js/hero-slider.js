import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';
import 'swiper/css';

const initHeroSwiper = () => {
  new Swiper('.swiper__hero', {
    modules: [ Pagination ],
    spaceBetween: 30,
    simulateTouch: true,
    loop: true,
    breakpoints: {
      768: {
        simulateTouch: false
      },
      1366: {
        simulateTouch: false
      }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
};

export {initHeroSwiper};
