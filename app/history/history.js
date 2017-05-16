'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/history', {
    templateUrl: 'history/history.html',
    controller: 'HistoryCtrl'
  });
}])

.controller('HistoryCtrl', [function() {

}]);