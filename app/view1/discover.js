'use strict';

angular.module('myApp.discover', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/discover', {
    templateUrl: 'view1/discover.html',
    controller: 'DiscoverCtrl'
  });
}])

.controller('DiscoverCtrl', [function() {

	

}]);