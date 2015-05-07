// angular.module('artistInfo-directive', [])
//     .directive('artistInfo', function($rootScope) {
//         return {
//             restrict: 'E',
//             scope: {},
//             controller: function($scope, $element) {
//                 // $scope.artist = new Artist();
//                 $scope.currentNum = 0;

//                 // // tell others to give me my prev/next track (with audio.set message)
//                 // $scope.next = function(){ $rootScope.$broadcast('audio.next'); };
//                 // $scope.prev = function(){ $rootScope.$broadcast('audio.prev'); };

//                 // // tell audio element to play/pause, you can also use $scope.audio.play() or $scope.audio.pause();
//                 // $scope.playpause = function(){ var a = $scope.audio.paused ? $scope.audio.play() : $scope.audio.pause(); };

//                 // // $scope.time = function(){ $rootScope.$$broadcast('audio.tiempo', $scope.audio.timeupdate()) };

//                 // // listen for audio-element events, and broadcast stuff
//                 // $scope.audio.addEventListener('play', function(){ $rootScope.$broadcast('audio.play', this); });
//                 // $scope.audio.addEventListener('pause', function(){ $rootScope.$broadcast('audio.pause', this); });
//                 // $scope.audio.addEventListener('timeupdate', function(){ $rootScope.$broadcast('audio.time', this); });
//                 // $scope.audio.addEventListener('ended', function(){ $rootScope.$broadcast('audio.ended', this); $scope.next(); });

//                 // respond to set track messsages
//                 $rootScope.$on('artist.set', function(info, currentNum, totalNum){
                    
//                     $scope.info = info;
//                     $scope.currentNum = currentNum;
//                     $scope.totalNum = totalNum;
//                 });

//             },

//             templateUrl: 'assets/js/components/artistInfo/views/component.html'
//         };
//     });

angular.module('artistInfo-directive', [])
.directive('artistInfo', ['SongData', function(SongData) {
    return {
        require: '^audioPlayer',
        restrict: 'E',
        transclude: true,
        scope: false,
        link: function(scope, attr) {
            // scope.ctrl = ctrl;
            // musicCtrl.info;
            // $scope.songData = SongData;
            // console.log(SongData.currentTrackID);

        },
        templateUrl: 'assets/js/components/artistInfo/views/component.html'
    };
}]);