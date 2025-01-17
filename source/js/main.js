// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import './menu.js';
import { initHeroSwiper } from './hero-slider.js';
import { initToursSwiper } from './tours-slider.js';
import { initReviewsSwiper } from './reviews-slider.js';
import { initGallerySwiper } from './gallery-slider.js';
import { initFormValidation } from './form-validation.js';

initHeroSwiper();
initToursSwiper();
initReviewsSwiper();
initGallerySwiper();
initFormValidation();
