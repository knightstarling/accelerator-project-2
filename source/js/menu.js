const nav = document.querySelector('.header__navigation');
const navToggle = document.querySelector('.header__button');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('header__navigation--open');
});
