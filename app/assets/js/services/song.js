
var myApp = angular.module('myApp');

myApp.service("SongData", ['$http', '$q', function($http, $q){

	// var urlBase = 'data/music.json';
	
	// // var activeSong = {};
	// function activeSong(){
	// 	var currentTrack;
	// 	var data = [];
	// }
	// this.data_length = 0;
	var currentTrackID;
	this.getSongs = function(){
			return $q(function(resolve, reject){
				$http.get('data/music.json')
				.success(function(response){
					this.data = response;
					resolve(this.data);
					this.data_length = data.length;
				}).error(function(error){
					reject(error);
				});
			});

		}

	this.getSong = function(trackID){
		this.currentTrackID = trackID;
		return data[trackID];

	}
	this.noOfTracks = function(){
		return data_length;
	}

	
	// return activeSong;

}]);