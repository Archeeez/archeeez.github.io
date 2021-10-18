const forms = document.querySelectorAll('.js--form');

const mailMask = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
const mailInput = document.querySelector('.js--input-mail')
const phoneInputs = document.querySelectorAll("input[type='tel']");

const errors = {
  required: 'Поле обязательно для заполнения',
  mismatch: 'Поле заполнено неверно',
  agree: 'Требуется ваше согласие на обработку данных',
};

const succeses = {
  ready: 'Поле заполнено корректно!',
}

function createPhoneMask(input) {
  const phone = new Inputmask('+7 (999) 999-99-99', {
    showMaskOnHover: false,
    showMaskOnFocus: false,
  });
  phone.mask(input);
}
phoneInputs.forEach((input) => {
  createPhoneMask(input);
});

function addErrors(input, errorText = errors.required) {
  if (input.classList.contains('succes')) {
    input.classList.remove('succes');
  }
  const parent = input.closest('.js--input-wrap');
  const span = parent.querySelector('span');
  span.textContent = errorText;
  input.classList.add('error');
}
// Добавления класса успешной валидации
function addSucces(input, succesText = succeses.ready) {
  if (input.classList.contains('error')) {
    input.classList.remove('error');
  }
  const parent = input.closest('.js--input-wrap');
  const span = parent.querySelector('span');
  span.textContent = succesText;
  input.classList.add('succes');
}

function removeState(input) {
  input.classList.remove('succes');
  input.classList.remove('error');
}

// Проверка инпутов на блюр
function onTextInputBlur(e) {
  const {
    target
  } = e;
  const inputWrapper = target.closest('.js--input');

  if (inputWrapper) {
    if (target.validity.valid) {
      addSucces(inputWrapper);
    } else {
      addErrors(inputWrapper, errors.required)
    }
  }
}

function onTelInputBlur(e) {
  const {
    target
  } = e;
  const inputWrapper = target.closest('.js--input');
  const clearValue = target.value.replace(/_/g, '');

  if (clearValue.length < 18) {
    addErrors(inputWrapper);
  } else {
    addSucces(inputWrapper);
  }

  if (clearValue.length === 18) {
    addSucces(inputWrapper);
  }

  if (clearValue.length === 0 && !target.required) {
    removeState(inputWrapper);
  }
}

function checkErrors(form) {
  const errores = form.querySelectorAll('.error');
  return errores.length === 0;
}

function validateTextInput(input) {
  if (input.value.length === 0 && input.required) {
    addErrors(input);

  } else if (input.value.length >= 3) {
    addSucces(input);
  }
}

function validateEmailInput(input) {
  if (input.value.length === 0 && input.required) {
    addErrors(input);

  } else if (input.value.length > 0 && !mailMask.test(input.value)) {
    addErrors(input, errors.mismatch);

  } else {
    addSucces(input);
  }
}

function validateTelInput(input) {
  if (input.value.length === 0 && input.required) {
    addErrors(input);

  } else if (input.value.length > 0) {
    const clearValue = input.value.replace(/_/g, '');
    if (clearValue.length === 18) {
      addSucces(input);

    } else {
      addErrors(input, errors.mismatch);
    }

  } else {
    addSucces(input);
  }
}

function validateInput(input) {
  if (input.validity.valid) {
    addSucces(input);

  } else {
    addErrors(input);
  }
}

function onFocusInput(input) {
  removeState(input);
}

function addInputEvents(inputs) {
  inputs.forEach((input) => {
    switch (input.type) {
      case 'text':
        input.addEventListener('blur', () => {
          validateTextInput(input);
        });
        break;
      case 'email':
        input.addEventListener('blur', () => {
          validateEmailInput(input);
        });
        break;
      case 'tel':
        input.addEventListener('blur', () => {
          validateTelInput(input);
        });
        break;
      default:
        input.addEventListener('blur', () => {
          validateInput(input);
        });
    }

    input.addEventListener('focus', () => {
      onFocusInput(input);
    });
  });
}


// Валидация инпутов
function inputValidation(inputs) {
  inputs.forEach((input) => {
    switch (input.type) {
      case 'text':
        validateTextInput(input);
        break;
      case 'email':
        validateEmailInput(input);
        break;
      case 'tel':
        validateTelInput(input);
      
    }
  });
}

forms.forEach((form) => {
  const inputs = form.querySelectorAll('.js--input');
  addInputEvents(inputs, checkErrors(form));
  console.log(checkErrors(form));

  form.addEventListener('submit', (e) => {
    inputValidation(inputs);
    console.log(checkErrors(form));
    if (!checkErrors(form)) {
      e.preventDefault();
    }
    // removeState();
    // form.reset();
  });
})