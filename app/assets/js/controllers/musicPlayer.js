'use strict';

angular.module('myApp')
	.filter('startFrom', function() {
		return function(input, start) {
			start = +start; //parse to int
			return input.slice(start);
		};
	})
	
	.controller('MusicCtrl', ['$scope', '$http', '$rootScope', 'SongData', function ($scope, $http, $rootScope, SongData) {
		$scope.activeTrackID = 0;
		$scope.pageSize = 5;
		$scope.data=[];
		$scope.timePercent=0;
		$scope.songData;
		SongData.getSongs().then(function(data){
			songLive();
		})


		// songLive();

		// var updateTrack = function(){
		// 	$rootScope.$broadcast('audio.set', 'assets/mp3/' + $scope.data[$scope.activeTrackID].file, $scope.data[$scope.activeTrackID], $scope.activeTrackID, $scope.data.length);
		// };

		var updateTrack = function(){
			$rootScope.$broadcast('audio.set', 'assets/mp3/' + $scope.songData.file, $scope.songData, $scope.activeTrackID, SongData.noOfTracks());
			console.log(SongData.noOfTracks());
		};

		$rootScope.$on('audio.next', function(){
			$scope.activeTrackID++;
			if ($scope.activeTrackID < SongData.noOfTracks()){
				// updateTrack();
				songLive();
				
			}else{
				$scope.activeTrackID=SongData.noOfTracks()-1;
			}
		});

		$rootScope.$on('audio.prev', function(){
			$scope.activeTrackID--;
			if ($scope.activeTrackID >= 0){
				// updateTrack();
				songLive();
			}else{
				$scope.activeTrackID = 0;
			}
		});

		// $rootScope.$on('audio.tiempo', function(timedate){
		// 	// $scope.timePercent = timedate;
		// 	$scope.timePercent = 100*(audio.currentTime/audio.duration);
		// 	log($scope.timePercent);
		// 	// $scope.timePercent = $scope.audio.time;
		// 	// return $scope.timePercent;
		// });

		// $http.get('data/music.json')
		// 	.success(function(response){
		// 		$scope.data = response;
		// 		updateTrack();
		// 	});

		function songLive() {
			$scope.songData = SongData.getSong($scope.activeTrackID);
			updateTrack();

			// if (activeSong.data){
			// 	$scope.songData = activeSong.data;
			// 	updateTrack();
			// } else {
			// 	activeSong.getSong($scope.activeTrackID).then(function(data){
			// 		$scope.songData = data;
			// 		updateTrack();
			// 	})
			// }
			// console.log(activeSong.getSong(1));
			// activeSong.getSong(1).then(function(data){
			// 	console.log(data);
			// })
		}

	}]);