'use strict';

(function () {

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
    var coat = window.getRandomArrayElement(window.color.COAT);
    setupWizardCoat.style.fill = coat;
    inputWizardCoat.value = coat;
  });

  setupWizardEyes.addEventListener('click', function (evt) {
    evt.preventDefault();
    var eyes = window.getRandomArrayElement(window.color.EYES);
    setupWizardEyes.style.fill = eyes;
    inputWizardEyes.value = eyes;
  });

  setupWizardFireballClicker.addEventListener('click', function (evt) {
    evt.preventDefault();
    var fireball = window.getRandomArrayElement(window.color.FIREBALL);
    setupWizardFireball.style.background = fireball;
    inputWizardFireball.value = fireball;
  });
})();
