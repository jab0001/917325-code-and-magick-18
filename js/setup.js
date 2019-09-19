'use strict';

var WIZARDS_COUNT = 4;
var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = document.querySelector('.setup-close');
var similarListElement = setup.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Мария', 'Мария', 'Юлия', 'Люпита', 'Вашингтон'];
var SUR_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];


var getRandomArrayElement = function (array) {
  var random = array[Math.floor(Math.random() * array.length)];
  return random;
};

var getObjWizard = function (wizardName, wizardSurName, wizardCoat, wizardEyes) {
  return {
    name: getRandomArrayElement(wizardName),
    surName: getRandomArrayElement(wizardSurName),
    coatColor: getRandomArrayElement(wizardCoat),
    eyesColor: getRandomArrayElement(wizardEyes)
  };
};

var wizards = [];
for (var i = 0; i < WIZARDS_COUNT; i++) {
  wizards.push(getObjWizard(NAMES, SUR_NAMES, COAT_COLORS, EYES_COLORS));
}

var renderWizard = function (mage) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = mage.name + ' ' + mage.surName;
  wizardElement.querySelector('.wizard-coat').style.fill = mage.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = mage.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}
similarListElement.appendChild(fragment);

setup.querySelector('.setup-similar').classList.remove('hidden');

setupOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  setup.classList.remove('hidden');
});

setupClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  setup.classList.add('hidden');
});
