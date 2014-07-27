/**
 * Created by jalalc on 13/07/14.
 */

angular.module('mediaPlayerApp').directive('mCover', function()
{
    'use strict';

    return {
        restrict   : 'E',
        scope      : {
            playlistName : '=',
            coverImage : '='
        },
        templateUrl: 'views/directives/cover.tpl.html'
    };
});