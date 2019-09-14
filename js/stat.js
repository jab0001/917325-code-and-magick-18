'use strict';


var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var FONT_WIDTH = 16;
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
  ctx.fillText('Ура вы победили!', CLOUD_WIDTH / 2 + FONT_WIDTH, CLOUD_Y + FONT_WIDTH + GAP);
  ctx.font = '16px PT Mono';
  ctx.fillText('Список результатов:', CLOUD_WIDTH / 2 + FONT_WIDTH, CLOUD_Y + FONT_WIDTH * 2 + GAP);

  /*
  var playerIndex = 0;
  var playerName = 'Вы';

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillText(playerName, CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * playerIndex, BAR_NAME_Y);
  ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * playerIndex, BAR_WIDTH * 2, BAR_WIDTH, BAR_HEIGHT);

  playerIndex = 1;
  playerName = 'Кекс';

  ctx.fillStyle = '#000';
  ctx.fillText(playerName, CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * playerIndex, BAR_NAME_Y);
  ctx.fillStyle = 'hsl(235, 97%, 27%,  ' + Math.random() + ')';
  ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * playerIndex, BAR_WIDTH * 2, BAR_WIDTH, BAR_HEIGHT);

  playerIndex = 2;
  playerName = 'Катя';

  ctx.fillStyle = '#000';
  ctx.fillText(playerName, CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * playerIndex, BAR_NAME_Y);
  ctx.fillStyle = 'hsl(235, 97%, 27%,  ' + Math.random() + ')';
  ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * playerIndex, BAR_WIDTH * 2, BAR_WIDTH, BAR_HEIGHT);

  playerIndex = 3;
  playerName = 'Игорь';

  ctx.fillStyle = '#000';
  ctx.fillText(playerName, CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * playerIndex, BAR_NAME_Y);
  ctx.fillStyle = 'hsl(235, 97%, 27%,  ' + Math.random() + ')';
  ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * playerIndex, BAR_WIDTH * 2, BAR_WIDTH, BAR_HEIGHT);
  */

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
    if (playerName === 'Вы') {
      return 'rgba(255, 0, 0, 1)';
    } else {
      return 'hsl(235, 97%, 27%,  ' + Math.random() + ')';
    }
  };

  var maxTime = getMaxElement(times);

  /*  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = getPlayerColor(players[i]);
    ctx.fillText(players[i], CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, BAR_Y);
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, BAR_Y - CLOUD_Y - GAP, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }
  */
  for (var a = 0; a < times.length; a++) {
    ctx.fillStyle = getPlayerColor(players[a]);
    ctx.fillText(players[a], CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * a, BAR_Y);
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * a, BAR_Y - CLOUD_Y - GAP, BAR_WIDTH, (BAR_HEIGHT * times[a]) / maxTime);
    ctx.fillText(Math.round(times[a]), CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * a, CLOUD_Y + BAR_GAP + GAP + CLOUD_Y);
  }
};

