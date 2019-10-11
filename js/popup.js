'use strict';

(function () {
  var userNameInput = window.setup.querySelector('.setup-user-name');
  var setupClose = window.setup.querySelector('.setup-close');
  var setupOpen = document.querySelector('.setup-open');
  var setupForm = window.setup.querySelector('.setup-wizard-form');
  var keycode = {
    ENTER: 13,
    ESC: 27
  };

  userNameInput.addEventListener('keydown', function (evt) {
    if (evt.keyCode === keycode.ESC) {
      evt.stopPropagation();
    }
  });

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === keycode.ESC) {
      closePopup();
    }
  };

  var openPopup = function () {
    window.setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress, false);
  };

  var closePopup = function () {
    window.setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress, false);
    window.setup.style.top = '';
    window.setup.style.left = '';
  };

  setupOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === keycode.ENTER) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === keycode.ENTER) {
      closePopup();
    }
  });

  userNameInput.addEventListener('input', function (evt) {
    var target = evt.target;
    if (target.value.length === 0) {
      target.setCustomValidity('это поле должно содержать символы');
    } else if (target.value.length < 2) {
      target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (target.value.length > 25) {
      target.setCustomValidity('Имя должно состоять максимум из 25 символов');
    } else {
      target.setCustomValidity('');
    }
  });

  setupForm.addEventListener('submit', function (evt) {
    window.save(new FormData(setupForm), function () {
      window.setup.classList.add('hidden');
    });
    evt.preventDefault();
  });
})();
