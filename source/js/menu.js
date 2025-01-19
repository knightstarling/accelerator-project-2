const body = document.querySelector('.page__body');
const nav = document.querySelector('.header__navigation');
const navToggle = document.querySelector('.header__button');
const overlay = document.querySelector('.page__overlay');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('header__navigation--open');
  body.classList.toggle('page__body--lock-scroll');

  if (nav.classList.contains('header__navigation--open')) {
    overlay.style.display = 'block';
  } else {
    overlay.style.display = 'none';
  }
});
