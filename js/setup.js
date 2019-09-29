'use strict';

var WIZARDS_COUNT = 4;
var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var similarListElement = setup.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Мария', 'Мария', 'Юлия', 'Люпита', 'Вашингтон'];
var SUR_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var userNameInput = setup.querySelector('.setup-user-name');
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;


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

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});

var setupWizard = document.querySelector('.setup-wizard');
var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
var inputWizardCoat = document.querySelector('.setup-wizard-appearance input[name="coat-color"]');
var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
var inputWizardEyes = document.querySelector('.setup-wizard-appearance input[name="eyes-color"]');
var setupWizardFireballClicker = document.querySelector('.setup-fireball');
var setupWizardFireball = document.querySelector('.setup-fireball-wrap');
var inputWizardFireball = document.querySelector('.setup-fireball-wrap input[name="fireball-color"]');

setupWizardCoat.addEventListener('click', function (evt) {
  evt.preventDefault();
  var coat = getRandomArrayElement(COAT_COLORS);
  setupWizardCoat.style.fill = coat;
  inputWizardCoat.value = coat;
});

setupWizardEyes.addEventListener('click', function (evt) {
  evt.preventDefault();
  var eyes = getRandomArrayElement(EYES_COLORS);
  setupWizardEyes.style.fill = eyes;
  inputWizardEyes.value = eyes;
});

setupWizardFireballClicker.addEventListener('click', function (evt) {
  evt.preventDefault();
  var fireball = getRandomArrayElement(FIREBALL_COLORS);
  setupWizardFireball.style.background = fireball;
  inputWizardFireball.value = fireball;
});

