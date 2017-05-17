'use strict';

angular.module('myApp.root', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'root/root.html',
    controller: 'RootCtrl'
  });
}])

.controller('RootCtrl', [
  'gameFactory',
  '$window',
  function(game, window) {
    if (game.gameExist()) {
      window.location.replace('#!/game');
    }
  }
]);