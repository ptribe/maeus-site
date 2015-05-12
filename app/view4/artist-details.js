'use strict';

angular.module('myApp.artist-details', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/artist-details', {
    templateUrl: 'view4/artist-details.html',
    controller: 'ArtistDetailsCtrl'
  });
}])

.controller('ArtistDetailsCtrl', [function() {

}]);