
/**
 * @ngdoc function
 * @name mediaPlayerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mediaPlayerApp
 */
angular.module('mediaPlayerApp')
    .controller('MediaPlayer', function ($scope, libraryLoader)
    {
        'use strict';

        $scope.playlists = [];

        $scope.onPlaylistChanged = function(playlist)
        {
            $scope.currentPlaylist = playlist;
            $scope.$broadcast('mOnPlaylistChanged', playlist);
        };

        $scope.$on('mOnTrackChanged', function(evt, track, position)
        {
            $scope.currentTrack = track;
            $scope.currentTrackIndex = position;
        });

        $scope.onTrackFinished = function()
        {
            if (++$scope.currentTrackIndex >= $scope.currentPlaylist.length)
            {
                $scope.currentTrackIndex = 0;
            }
            $scope.currentTrack = $scope.currentPlaylist.tracks[$scope.currentTrackIndex];
            $scope.$broadcast('mOnTrackFinished', $scope.currentTrackIndex);
        };

        libraryLoader.load().success(function(playlists)
        {
            $scope.playlists = playlists;
        });

        $scope.loadPlaylist = function(files)
        {
            var promise = libraryLoader.importPlaylist(files[0]);

            promise.then(function(newPlaylist)
            {
                $scope.playlists.push(newPlaylist);
            });
        };

        $scope.saveLibrary = function()
        {
            libraryLoader.save($scope.playlists).success(function()
            {
                window.alert('saved');
            });
        };

    });
