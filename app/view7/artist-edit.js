'use strict';

angular.module('myApp.artist-edit', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/artist-edit', {
    templateUrl: 'view7/artist-edit.html',
    controller: 'ArtistEditCtrl'
  });
}])

.controller('ArtistEditCtrl', [function() {

}]);