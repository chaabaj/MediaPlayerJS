/**
 * Created by jalalc on 11/07/14.
 */

angular.module('mediaPlayerApp').value('Playlist', function ()
{
    'use strict';

    return function (name, coverImage)
    {
       return {
           tracks : [],
           name : name,
           coverImage : coverImage
       };
    };
});