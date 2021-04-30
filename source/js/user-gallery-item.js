'use strict';

(function () {

  document.querySelectorAll('.user-gallery-item__comment-like-button')
    .forEach((btn) => btn.addEventListener('click', clickLikeBtn));

  function clickLikeBtn(evt) {

    evt.preventDefault();

    this.querySelector('.user-gallery-item__comment-like')
      .classList.toggle('user-gallery-item__comment-like--liked');
  }
})();
