/**
 * Created by jalalc on 13/07/14.
 */

angular.module('mediaPlayerApp').directive('mTrackNotification', function()
{
    'use strict';

    return {
        restrict   : 'E',
        scope      : {
            track: '=',
            duration : '='
        },
        controller : 'TrackNotificationCtrl',
        templateUrl: 'views/directives/track-notification.tpl.html'
    };
});

angular.module('mediaPlayerApp').controller('TrackNotificationCtrl', function($scope, $timeout)
{
    'use strict';

    $scope.visible = false;

    $scope.$watch('track', function()
    {
       if (angular.isDefined($scope.track))
       {
           $scope.visible = true;

           $timeout(function()
           {
               $scope.visible = false;
           }, $scope.duration);
       }
    });
});