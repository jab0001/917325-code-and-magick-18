'use strict';

(function () {
  window.setup = document.querySelector('.setup');
  var coatColor;
  var eyesColor;
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    window.render(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  window.wizard.onEyesChange = window.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  window.wizard.onCoatChange = window.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  var onError = function (message) {
    var error = document.createElement('div');
    error.style = 'margin: 0 auto; text-align: center; margin-top: 250px; z-index: 1; background-color: white;';
    error.style.position = 'absolute';
    error.style.left = 0;
    error.style.right = 0;
    error.style.fontSize = '100px';
    error.textContent = message;
    window.setup.insertAdjacentElement('afterbegin', error);
  };

  var onSuccess = function (data) {
    wizards = data;
    updateWizards();
  };

  window.load(onSuccess, onError);

})();
