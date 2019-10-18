'use strict';

(function () {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


  window.renderWizard = function (mageFromServ) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = mageFromServ.name;
    wizardElement.querySelector('.wizard-coat').style.fill = mageFromServ.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = mageFromServ.colorEyes;

    return wizardElement;
  };

  var similar = document.querySelector('.setup-similar');
  var similarList = document.querySelector('.setup-similar-list');

  window.render = function (data) {
    similarList.innerHTML = '';
    for (var i = 0; i < window.WIZARDS_COUNT; i++) {
      similarList.appendChild(window.renderWizard(data[i]));
    }

    similar.classList.remove('hidden');
  };
})();
