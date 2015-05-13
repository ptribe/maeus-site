'use strict';

angular.module('myApp.artist-dash', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/artist-dash', {
    templateUrl: 'view6/artist-dash.html',
    controller: 'ArtistDashCtrl'
  });
}])

.controller('ArtistDashCtrl', [function() {

}]);