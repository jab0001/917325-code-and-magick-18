'use strict';


var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_HEIGHT = -150;
var BAR_Y = 260;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_WIDTH / 2 + GAP, CLOUD_Y + BAR_WIDTH - GAP);
  ctx.fillText('Список результатов:', CLOUD_WIDTH / 2 + GAP, CLOUD_Y + BAR_WIDTH + GAP);

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  var getPlayerColor = function (playerName) {
    return (playerName === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'hsl(235, 97%, 27%,  ' + Math.random() + ')';
  };

  var maxTime = getMaxElement(times);

  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = getPlayerColor(players[i]);
    ctx.fillText(players[i], CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, BAR_Y);
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, BAR_Y - CLOUD_Y - GAP, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + BAR_GAP + GAP + CLOUD_Y);
  }
};

