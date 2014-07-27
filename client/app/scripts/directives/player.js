/**
 * Created by jalalc on 11/07/14.
 */


angular.module('mediaPlayerApp').directive('mPlayer', function ()
{
    'use strict';

    return {
        restrict   : 'E',
        scope      : {
            track : '=',
            onTrackFinished : '='
        },
        templateUrl: 'views/directives/player.tpl.html'
    };
});
