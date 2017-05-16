'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.root',
  'myApp.new',
  'myApp.players',
  'myApp.game',
  'myApp.adding',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/'});
}])
  .constant('appConstants', {
      playerBackgrounds: [
        '#7e6ebb',
        '#5c77b2',
        '#64afc8',
        '#68b2a2',
        '#acbd6d'
      ],
      localStorage: {
        players: 'players',
        game: 'game'
      }
  })
  .factory('playersFactory', ['appConstants', function (appConstants) {
    var players = appConstants.localStorage.players;

    function get() {
      if (localStorage.getItem(players)) {
        return JSON.parse(localStorage.getItem(players));
      } else {
        return [];
      }
    }

    function saveToLocalStorage(array) {
      localStorage.setItem(players, JSON.stringify(array));
    }

    return {
      get: get,
      save: function (array) {
        var savePlayers = _.union(get(), array);

        saveToLocalStorage(savePlayers);
      },
      remove: function(name) {
        var data = get();
        var length = data.length;

        for (var i = 0; i < length; i++) {
          if (data[i] === name) {
            data.splice(i, 1);

            break;
          }
        }

        saveToLocalStorage(data);
      }
    }
  }])
  .factory('gameFactory', ['appConstants', function (appConstants) {
    var game = appConstants.localStorage.game;

    function get() {
      if (localStorage.getItem(game)) {
        return JSON.parse(localStorage.getItem(game));
      } else {
        return {
          players: [],
          scores: []
        };
      }
    }

    function validateScore(score) {
      var keys = Object.keys(score);

      keys.forEach(function (item, index, array) {
        if (isNaN(score[item])) {
          score[item] = 0;
        }
      });

      return score;
    }

    return {
      gameExist: function () {
        var data = get();

        return data.players.length;
      },
      get: get,
      getScore: function () {
        var data = get();
        var result = data.players.map(function (name) {
          var score = 0;

          data.scores.forEach(function (item) {
            if (item[name]) {
              score += item[name];
            }
          });

          return {name: name, score: score};
        });

        return result;
      },
      save: function (players) {
        var result = {
          players: players,
          scores: []
        };

        result = JSON.stringify(result);

        localStorage.setItem(game, result);
      },
      addScore: function (score) {
        var data = get();

        score = validateScore(score);

        data.scores.push(score);

        data = JSON.stringify(data);

        localStorage.setItem(game, data);
      }
    }
  }])
  .controller('MainCtrl', ['$scope','$route', function ($scope) {
    $scope.showLeftMenu = false;

    $scope.leftMenu = function () {
      $scope.showLeftMenu = !$scope.showLeftMenu;
    };
  }]);
