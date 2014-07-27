/**
 * Created by jalalc on 11/07/14.
 */

angular.module('mediaPlayerApp').directive('mMediaList', function ()
{
    'use strict';

    return {
        restrict   : 'E',
        scope      : true,
        templateUrl: 'views/directives/media-list.tpl.html',
        controller : 'MediaListCtrl',
        link : function(scope, element)
        {
            var $frame = $(element.find('.frame'));
            var $wrap  = $frame.parent();

            // Call Sly on frame
            var sly = new Sly($frame, {
                horizontal: 1,
                itemNav: 'forceCentered',
                smart: 1,
                activateOn: 'click',
                mouseDragging: 1,
                touchDragging: 1,
                releaseSwing: 1,
                startAt: 0,
                scrollBar: $wrap.find('.scrollbar'),
                scrollBy: 1,
                speed: 300,
                elasticBounds: 1,
                easing: 'easeOutExpo',
                dragHandle: 1,
                dynamicHandle: 1,
                clickBar: 1
            });

            sly.init();

            $(window).resize(function()
            {
                sly.reload();
            });

            sly.on('load', function()
            {
                if (angular.isDefined(scope.playlist) && scope.playlist.tracks.length > 0)
                {
                    sly.activate(0);
                }
            });

            scope.reloadSly = function()
            {
                var newItems = $frame.find('li');

                sly.items.forEach(function(item)
                {
                    sly.remove(item);
                });
                sly.add(newItems);
                sly.reload();
            };

            scope.$on('mOnTrackFinished', function(evt, position)
            {
               sly.activate(position);
            });
        }
    };
});

angular.module('mediaPlayerApp').controller('MediaListCtrl', function($scope)
{
    'use strict';

    $scope.trackFilter = {name : ''};

    $scope.$on('mOnPlaylistChanged', function(evt, playlist)
    {
       $scope.playlist = playlist;
    });

    $scope.onSelectTrack = function(track, position)
    {
        $scope.$emit('mOnTrackChanged', track, position);
    };
});