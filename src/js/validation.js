import { validateForms } from './functions/validate-forms';

const rules = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Имя должно быть больше 2-х символов'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
  {
    ruleSelector: '.input-email',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните Email!'
      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Введите корректный Email!'
      }
    ]
  },
];

const rules1 = [
  {
    ruleSelector: '.input-name1',
    rules: [
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Имя должно быть больше 2-х символов'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.input-tel1',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
  {
    ruleSelector: '.input-email1',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните Email!'
      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Введите корректный Email!'
      }
    ]
  },
];

const afterForm = () => {

}
// const submitBtn = document.querySelector('.contact-form__button');
//
// submitBtn.addEventListener('click', () => {
//   console.log(submitBtn)
//   const modals = document.querySelectorAll('.modal');
//   const modalOverlay =  document.querySelector('.modal-overlay');
//
//   modals.forEach(modal => {
//     if (modal.classList.contains('modal--visible')) {
//       console.log(123)
//       modal.classList.remove('modal--visible');
//       modalOverlay.classList.remove('modal-overlay--visible');
//     }
//   })
// })

const afterForm1 = () => {
  const modals = document.querySelectorAll('.modal');
  const modalOverlay =  document.querySelector('.modal-overlay');

  modals.forEach(modal => {
    if (modal.classList.contains('modal-visible')) {
      modal.classList.remove('modal--visible');
      modalOverlay.classList.remove('modal-overlay--visible');
    }
  })
};

validateForms('.contacts-form', rules, afterForm);
validateForms('.contact-form', rules1, afterForm1);
