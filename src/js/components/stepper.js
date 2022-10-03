import vars from '../_vars';

  vars.stepper.forEach((elem, i) => {
    elem?.addEventListener('click', (e) => {
      const stepperInput = document.querySelectorAll('.stepper__input');
      const stepperMinus = document.querySelectorAll('.stepper__btn--minus');
      const stepperPlus = document.querySelectorAll('.stepper__btn--plus');

      if (e.target.classList.contains('stepper__btn--plus')) {
        let currentValue = parseInt(stepperInput[i].value);
        currentValue++;
        stepperInput[i].value = currentValue;

        stepperMinus[i].classList.remove('stepper__btn--disabled');

        if (stepperInput[i].value > 98) {
          stepperInput[i].value = 99;
          stepperPlus[i].classList.add('stepper__btn--disabled');
        } else {
          stepperPlus[i].classList.remove('stepper__btn--disabled');
        }
      }

      if (e.target.classList.contains('stepper__btn--minus')) {
        let currentValue = parseInt(stepperInput[i].value);
        currentValue--;
        stepperInput[i].value = currentValue;

        stepperPlus[i].classList.remove('stepper__btn--disabled');

        if (stepperInput[i].value <= 1) {
          stepperInput[i].value = 1;
          stepperMinus[i].classList.add('stepper__btn--disabled');
        } else {
          stepperMinus[i].classList.remove('stepper__btn--disabled');
        }
      }
    })

    elem?.addEventListener('keydown', (e) => {
      const stepperMinus = document.querySelectorAll('.stepper__btn--minus');
      const stepperPlus = document.querySelectorAll('.stepper__btn--plus');

      if (e.target.classList.contains('stepper__input')) {
        if (e.target.value <= 1) {
          stepperMinus[i].classList.add('stepper__btn--disabled');
          stepperPlus[i].classList.remove('stepper__btn--disabled');
        } else {
          stepperMinus[i].classList.remove('stepper__btn--disabled');
        }

        if (e.target.value > 98) {
          stepperMinus[i].classList.remove('stepper__btn--disabled');
          stepperPlus[i].classList.add('stepper__btn--disabled');
        } else {
          stepperPlus[i].classList.remove('stepper__btn--disabled');
        }
      }
    })
  });
