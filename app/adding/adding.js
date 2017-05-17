'use strict';

angular.module('myApp.adding', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/adding', {
    templateUrl: 'adding/adding.html',
    controller: 'AddingCtrl'
  });
}])

.controller('AddingCtrl', [
  '$scope',
  'appConstants',
  'gameFactory',
  '$routeParams',
  '$window',
  function(
    $scope,
    appConstants,
    game,
    params,
    window
  ) {
    $scope.backs = appConstants.playerBackgrounds;
    $scope.players = {};

    {
      if (params.name) {
        $scope.players[params.name] = 1;
      } else {
        game
          .get()
          .players
          .forEach(function (name) {
            $scope.players[name] = 0;
          })
      }
    }
    // ToDo: code duplication, move to factory
    $scope.background = function ($index) {
      var length = $scope.backs.length;
      var index = $index % length;

      return $scope.backs[index];
    };

    $scope.plus = function (player) {
      $scope.players[player]++;
    };
    $scope.minus = function (player) {
      $scope.players[player]--;
    };

    $scope.save = function () {
      game.addScore($scope.players);

      window.location.replace('#!/game');
    }
  }
]);