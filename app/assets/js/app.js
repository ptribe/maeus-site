'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.discover',
  'myApp.my-music',
  'myApp.account',
  'myApp.artist-details',
  'myApp.artist-dash',
  'myApp.artist-edit',
  'myApp.version',
  'audioPlayer-directive',
  'artistInfo-directive'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/discover'});
}]);

myApp.controller('navCtrl', function ($scope) {
	$scope.toggle = false;
  $scope.tagsView = false;
});