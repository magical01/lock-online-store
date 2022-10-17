import { validateForms } from '../functions/validate-forms';

const rulesCallback = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
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

const rulesOrder = [
  {
    ruleSelector: '.input-firstname',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.input-lastname',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните фамилию!'
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

const rulesWholesale = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.input-company',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните название компании!'
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
    ruleSelector: '.input-product',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните Email!'
      },
    ]
  },
  {
    ruleSelector: '.input-count',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Укажите количество товара!'
      },
    ]
  },
];

const afterForm = () => {
  console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.callback__form', rulesCallback, afterForm);
validateForms('.order__form', rulesOrder, afterForm);
validateForms('.tabs-content__form', rulesCallback, afterForm);
validateForms('.application__form', rulesWholesale, afterForm);


