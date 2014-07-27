/**
 * Created by jalalc on 19/07/14.
 */

angular.module('mediaPlayerApp').directive('mYoutubePlayer', function()
{
    'use strict';

    return {
        restrict   : 'A',
        scope      : '=',
        controller : 'YoutubePlayerCtrl'
    };
});

angular.module('mediaPlayerApp').controller('YoutubePlayerCtrl', function($scope, $youtube)
{
    'use strict';

    $scope.$on('youtube.player.ready', function ()
    {
        if ($scope.track.mediaType === 'youtube')
        {
            $youtube.player.playVideo();
        }
    });

    $scope.play = function()
    {
        $youtube.player.playVideo();
    };

    $scope.pause = function()
    {
        $youtube.player.pauseVideo();
    };

    $scope.stop = function()
    {
        $youtube.player.stopVideo();
    };

    $scope.getVolume = function()
    {
        $youtube.player.getVolume();
    };

    $scope.setVolume = function(value)
    {
        $youtube.player.setVolume(value);
    };

    $scope.mute = function()
    {
        if ($youtube.player.isMuted())
        {
            $youtube.player.unMute();
        }
        else
        {
            $youtube.player.mute();
        }
    };

    $scope.getCurrentTime = function()
    {
        return $youtube.player.getCurrentTime();
    };

    $scope.getDuration = function()
    {
        return $youtube.player.getDuration();
    };

    $scope.seekTo = function(time)
    {
        return $youtube.player.seekTo(time, true);
    };

    $scope.$on('youtube.player.ended', function()
    {
        $scope.onTrackFinished();
    });
});