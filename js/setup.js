'use strict';

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = document.querySelector('.setup-close');
var similarListElement = setup.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');


var wizards = [
  {
    name: 'Иван',
    surName: 'да Марья',
    coatColor: 'rgb(101, 137, 164)',
    eyesColor: 'black'
  },
  {
    name: 'Хуан Себастьян',
    surName: 'Верон',
    coatColor: 'rgb(241, 43, 107)',
    eyesColor: 'red'
  },
  {
    name: 'Мария',
    surName: 'Мирабелла',
    coatColor: 'rgb(146, 100, 161)',
    eyesColor: ''
  },
  {
    name: 'Мария',
    surName: 'Вальц',
    coatColor: 'rgb(56, 159, 117)',
    eyesColor: 'blue'
  },
  {
    name: 'Мария',
    surName: 'Онопко',
    coatColor: 'rgb(215, 210, 55)',
    eyesColor: 'yellow'
  },
  {
    name: 'Юлия',
    surName: 'Топольницкая',
    coatColor: 'rgb(0, 0, 0)',
    eyesColor: 'green'
  },
  {
    name: 'Люпита',
    surName: 'Нионго',
    coatColor: '',
    eyesColor: ''
  },
  {
    name: 'Вашингтон',
    surName: 'Ирвинг',
    coatColor: '',
    eyesColor: ''
  }
];

/* for (var k = wizards.length - 1; k > 0; k--) {
  var j;
  var temp;
  j = Math.floor(Math.random() * (k + 1));
  temp = wizards[j];
  wizards[j] = wizards[k];
  wizards[k] = temp;
}
*/

var nameResults = wizards.map(function (a) {
  for (var k = wizards.length - 1; k > 0; k--) {
    var j;
    var temp;
    j = Math.floor(Math.random() * (k + 1));
    temp = wizards[j];
    wizards[j] = wizards[k];
    wizards[k] = temp;
  }
  return a.name;
});

var surNameResults = wizards.map(function (a) {
  for (var k = wizards.length - 1; k > 0; k--) {
    var j;
    var temp;
    j = Math.floor(Math.random() * (k + 1));
    temp = wizards[j];
    wizards[j] = wizards[k];
    wizards[k] = temp;
  }
  return a.surName;
});

var coatColorResults = wizards.map(function (a) {
  for (var k = wizards.length - 1; k > 0; k--) {
    var j;
    var temp;
    j = Math.floor(Math.random() * (k + 1));
    temp = wizards[j];
    wizards[j] = wizards[k];
    wizards[k] = temp;
  }
  return a.coatColor;
});

console.log(coatColorResults);

var eyesColorResults = wizards.map(function (a) {
  for (var k = wizards.length - 1; k > 0; k--) {
    var j;
    var temp;
    j = Math.floor(Math.random() * (k + 1));
    temp = wizards[j];
    wizards[j] = wizards[k];
    wizards[k] = temp;
  }
  return a.eyesColor;
});

var renderWizard = function (wizardName, wizardSurName, wizardCoat, wizardEyes) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizardName + ' ' + wizardSurName;
  wizardElement.querySelector('.wizard-coat').style.fill = wizardCoat;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardEyes;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard(nameResults[i], surNameResults[i], coatColorResults[i], eyesColorResults[i]));
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
