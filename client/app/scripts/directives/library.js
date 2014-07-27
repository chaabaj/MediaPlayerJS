/**
 * Created by jalalc on 11/07/14.
 */

angular.module('mediaPlayerApp').directive('mLibrary', function ()
{
    'use strict';

    return {
        restrict   : 'E',
        scope      : {
          playlists : '=',
          onPlaylistChanged: '='
        },
        templateUrl: 'views/directives/library.tpl.html',
        controller : 'LibraryCtrl'
    };
});

angular.module('mediaPlayerApp').controller('LibraryCtrl', function ($scope)
{
    'use strict';

    $scope.selectedPlaylist = null;

    $scope.onSelectPlaylist = function(playlist)
    {
        if (playlist !== $scope.selectedPlaylist)
        {
            $scope.selectedPlaylist = playlist;
            $scope.onPlaylistChanged(playlist);
        }
    };
});