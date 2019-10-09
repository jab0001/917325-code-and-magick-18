'use strict';

(function () {
  window.getRandomArrayElement = function (array) {
    var random = array[Math.floor(Math.random() * array.length)];
    return random;
  };
})();
