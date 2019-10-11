'use strict';

(function () {
  var WIZARDS_COUNT = 4;
  window.setup = document.querySelector('.setup');
  var similarListElement = window.setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Мария', 'Мария', 'Юлия', 'Люпита', 'Вашингтон'];
  var SUR_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  window.color = {
    COAT: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES: ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  };

  var getObjWizard = function (wizardName, wizardSurName, wizardCoat, wizardEyes) {
    return {
      name: window.getRandomArrayElement(wizardName),
      surName: window.getRandomArrayElement(wizardSurName),
      coatColor: window.getRandomArrayElement(wizardCoat),
      eyesColor: window.getRandomArrayElement(wizardEyes)
    };
  };

  var wizards = [];
  for (var i = 0; i < WIZARDS_COUNT; i++) {
    wizards.push(getObjWizard(NAMES, SUR_NAMES, window.color.COAT, window.color.EYES));
  }

  var renderWizard = function (mageFromServ, mageFromMock) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = mageFromServ.name + ' ' + mageFromMock.surName;
    wizardElement.querySelector('.wizard-coat').style.fill = mageFromServ.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = mageFromServ.colorEyes;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();
  window.setup.querySelector('.setup-similar').classList.remove('hidden');

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
    for (var j = 0; j < WIZARDS_COUNT; j++) {
      fragment.appendChild(renderWizard(data[j], wizards[j]));
    }
    similarListElement.appendChild(fragment);
  };

  window.load(onSuccess, onError);

})();
