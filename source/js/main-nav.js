'use strict';

(function () {
  const mainMenu = document.querySelector('.main-nav');
  const toggleButton = document.querySelector('.main-nav__menu-toggle');
  const pageHeader = document.querySelector('.page-header');

  if (pageHeader && mainMenu) {

    mainMenu.classList.remove('main-nav--nojs');
    mainMenu.classList.remove('main-nav--opened');
    pageHeader.classList.remove('page-header--opened');
    mainMenu.classList.add('main-nav--closed');
  }

  if (toggleButton) {
    toggleButton.addEventListener('click', clickToggleButton);
  }

  function clickToggleButton(evt) {

    evt.preventDefault();

    if (mainMenu) {
      mainMenu.classList.toggle('main-nav--opened');
      mainMenu.classList.toggle('main-nav--closed');
      pageHeader.classList.toggle('page-header--opened');
    }
  }
})();
