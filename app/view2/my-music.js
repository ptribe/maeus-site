'use strict';

angular.module('myApp.my-music', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/my-music', {
    templateUrl: 'view2/my-music.html',
    controller: 'MyMusicCtrl'
  });
}])

.controller('MyMusicCtrl', [function() {

}]);