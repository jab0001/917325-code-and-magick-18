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

var renderWizard = function (wizardName, wizardSurName, wizardCoat, wizardEyes) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizardName + ' ' + wizardSurName;
  wizardElement.querySelector('.wizard-coat').style.fill = wizardCoat;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardEyes;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 4; i > 0; i--) {
  fragment.appendChild(renderWizard(names[i], surNames[i], coatColors[i], eyesColors[i]));
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
