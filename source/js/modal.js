'use strict';

(function () {

  const modalSuccess = document.querySelector('.modal--success');
  const modalFailure = document.querySelector('.modal--failure');
  const checkBoxControls = document.querySelectorAll('input[type="checkbox"]');
  const submitBtn = document.querySelector('.button--success[type="submit"]');

  if (submitBtn) {
    submitBtn.addEventListener('click', clickSubmitButton);
  }

  function clickSubmitButton(evt) {

    evt.preventDefault();

    const uncheckedControls = [...checkBoxControls].filter((ctrl) => !ctrl.checked);

    const modal = uncheckedControls.length > 0 ? modalFailure : modalSuccess;

    modal.classList.add('modal--opened');

    document.querySelectorAll('.modal--opened .button--success')
      .forEach((successBtn) => {
        successBtn.addEventListener('click', clickModalSuccessButton);
      })
  }

  function clickModalSuccessButton(evt) {

    evt.preventDefault();

    document.querySelector('.modal--opened')
      .classList.remove('modal--opened');
  }
})();
