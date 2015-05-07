'use strict';

angular.module('myApp')
	// .filter('startFrom', function() {
	// 	return function(input, start) {
	// 		start = +start; //parse to int
	// 		return input.slice(start);
	// 	};
	// })
	
	.controller('ArtistInfoCtrl', function ($scope) {
		$scope.currentTrack = 0;
		$scope.pageSize = 5;
		$scope.data=[];

		// $scope.$on('interrobang', function(toggle) {
  //               if (toggle==false){
  //                   $scope.toggle = true;
  //               } else {
  //                   $scope.toggle = false;
  //               }
  //           });

		// var updateTrack = function(){
		// 	$rootScope.$broadcast('artist.set', $scope.data[$scope.currentTrack], $scope.currentTrack, $scope.data.length);
		// };

		// $rootScope.$on('audio.next', function(){
		// 	$scope.currentTrack++;
		// 	if ($scope.currentTrack < $scope.data.length){
		// 		updateTrack();
		// 	}else{
		// 		$scope.currentTrack=$scope.data.length-1;
		// 	}
		// });

		// // $rootScope.$on('audio.prev', function(){
		// // 	$scope.currentTrack--;
		// // 	if ($scope.currentTrack >= 0){
		// // 		updateTrack();
		// // 	}else{
		// // 		$scope.currentTrack = 0;
		// // 	}
		// // });

		// $http.get('data/music.json')
		// 	.success(function(response){
		// 		$scope.data = response;
		// 		updateTrack();
		// 	});

	});