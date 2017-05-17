'use strict';

angular.module('myApp.new', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/new', {
    templateUrl: 'new/new.html',
    controller: 'NewCtrl'
  });
}])

.controller('NewCtrl', [
  '$scope',
  'appConstants',
  'playersFactory',
  'gameFactory',
  '$window',
  '$timeout',
  function(
    $scope,
    appConstants,
    players,
    game,
    window,
    setTimeout
  ) {
  $scope.backs = appConstants.playerBackgrounds;

  $scope.players = [];

  $scope.previousPlayers = players
    .get()
    .map(function (item) {
      return {name: item};
    });

  $scope.removePlayer = function (index) {
    $scope.players.splice(index, 1);
  };

  $scope.addPlayer = function (index) {
    if (!isNaN(index)) {
      $scope.players.push($scope.previousPlayers[index]);
      $scope.previousPlayers.splice(index, 1);
    } else {
      $scope.players.push({name: '', new: ''});

      var length = $scope.players.length -1;
      // ToDo: bad-bad-stitch
      setTimeout(function () {
        window.document.getElementById('new-player-' + length).focus();
      })
    }

  };

  $scope.background = function ($index) {
    var length = $scope.backs.length;
    var index = $index % length;

    return $scope.backs[index];
  };

  $scope.startNewGame = function () {
    var currentPlayers = [];

    $scope.players.forEach(function (player) {
      if (player.name) {
        currentPlayers.push(player.name);
      } else if (player.new && player.new !== '') {
        currentPlayers.push(player.new);
      }
    });

    players.save(currentPlayers);
    game.save(currentPlayers);
    window.location.replace('#!/game');
  };
}]);