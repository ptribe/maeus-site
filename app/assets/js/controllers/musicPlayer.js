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

		function songLive() {
			$scope.songData = SongData.getSong($scope.activeTrackID);
			updateTrack();
		}

		var updateTrack = function(){
			$rootScope.$broadcast('audio.set', 'assets/mp3/', $scope.activeTrackID, SongData.noOfTracks());
		};

		$rootScope.$on('audio.next', function(){
			$scope.activeTrackID++;
			if ($scope.activeTrackID < SongData.noOfTracks()){
				songLive();
				
			}else{
				$scope.activeTrackID=SongData.noOfTracks()-1;
			}
		});

		$rootScope.$on('audio.prev', function(){
			$scope.activeTrackID--;
			if ($scope.activeTrackID >= 0){
				songLive();
			}else{
				$scope.activeTrackID = 0;
			}
		});

		

	}]);