'use strict';

angular.module('myApp.game', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/game', {
    templateUrl: 'game/game.html',
    controller: 'GameCtrl'
  });
}])

.controller('GameCtrl', [
  '$scope',
  'appConstants',
  'gameFactory',
  '$window',
  function(
    $scope,
    appConstants,
    game,
    window
  ) {
  $scope.backs = appConstants.playerBackgrounds;

  $scope.players = game.getScore();

  // ToDo: code duplication, move to factory
  $scope.background = function ($index) {
    var length = $scope.backs.length;
    var index = $index % length;

    return $scope.backs[index];
  };

  $scope.addOne = function (index) {
    var name = $scope.players[index].name;

    window.location.replace('#!/adding?name=' + name);
  };

  $scope.addAll = function () {
    window.location.replace('#!/adding');
  };
}]);