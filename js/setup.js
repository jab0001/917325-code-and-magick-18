'use strict';

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = document.querySelector('.setup-close');
var similarListElement = setup.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');


var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Мария', 'Мария', 'Юлия', 'Люпита', 'Вашингтон'];
var surNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];


var wizardsRandom = function (random) {
  for (var k = random.length - 1; k > 0; k--) {
    var j;
    var temp;
    j = Math.floor(Math.random() * (k + 1));
    temp = random[j];
    random[j] = random[k];
    random[k] = temp;
  }
  return random;
};

wizardsRandom(names);
wizardsRandom(surNames);
wizardsRandom(coatColors);
wizardsRandom(eyesColors);

var wizards = [
  {
    name: names[0],
    surName: surNames[0],
    coatColor: coatColors[0],
    eyesColor: eyesColors[0]
  },
  {
    name: names[1],
    surName: surNames[1],
    coatColor: coatColors[1],
    eyesColor: eyesColors[1]
  },
  {
    name: names[2],
    surName: surNames[2],
    coatColor: coatColors[2],
    eyesColor: eyesColors[2]
  },
  {
    name: names[3],
    surName: surNames[3],
    coatColor: coatColors[3],
    eyesColor: eyesColors[3]
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surName;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
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
