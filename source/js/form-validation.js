const form = document.querySelector('.form__form');
const phoneInput = form.querySelector('input[name="phone"]');
const nameInput = form.querySelector('input[name="email"]');
const phoneRegEx = /^\d+$/;
const emailRegEx = /^([a-z0-9_.-]+)@([\da-z.-]+)\.(рф)$/;

const validateInput = (input, regex) => {
  const isValid = regex.test(input.value);
  input.classList.toggle('form__input--error', !isValid);
  return isValid;
};

const initFormValidation = () => {
  form.addEventListener('submit', (event) => {
    const isPhoneValid = validateInput(phoneInput, phoneRegEx);
    const isEmailValid = validateInput(nameInput, emailRegEx);
    if (!isPhoneValid || !isEmailValid) {
      event.preventDefault();
    }
  });
};

export { initFormValidation };
