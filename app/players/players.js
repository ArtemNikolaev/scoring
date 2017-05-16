'use strict';

angular.module('myApp.players', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/players', {
    templateUrl: 'players/players.html',
    controller: 'PlayersCtrl'
  });
}])

.controller('PlayersCtrl', ['playersFactory','$scope','appConstants', function(players, $scope, appConstants) {
  $scope.backs = appConstants.playerBackgrounds;

  function setPlayers() {
    $scope.players = players
      .get()
      .map(function (item) {
        return {name: item};
      });
  }

  $scope.background = function ($index) {
    var length = $scope.backs.length;
    var index = $index % length;

    return $scope.backs[index];
  };

  $scope.removePlayer = function (index) {
    players.remove($scope.players[index].name);

    setPlayers();
  };
  setPlayers();
}]);