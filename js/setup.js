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


var wizardsRandom = function (random) {
  var rand = random[Math.floor(Math.random() * random.length)];
  return rand;
};

var wizard = function (wizardName, wizardSurName, wizardCoat, wizardEyes) {
  return {
    name: wizardsRandom(wizardName),
    surName: wizardsRandom(wizardSurName),
    coatColor: wizardsRandom(wizardCoat),
    eyesColor: wizardsRandom(wizardEyes)
  };
};

var wizards = [];
for (var k = 0; k < WIZARDS_COUNT; k++) {
  wizards.push(wizard(NAMES, SUR_NAMES, COAT_COLORS, EYES_COLORS));
}

var renderWizard = function (lizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = lizard.name + ' ' + lizard.surName;
  wizardElement.querySelector('.wizard-coat').style.fill = lizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = lizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < WIZARDS_COUNT; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
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
