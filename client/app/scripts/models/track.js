/**
 * Created by jalalc on 11/07/14.
 */

angular.module('mediaPlayerApp').value('Track', function (youtubeThumbnailRetreiver)
{
    'use strict';

    return function (trackName, trackSource)
    {
        return  {
            name     : trackName,
            source   : trackSource,
            mediaType: '',
            thumbnail: ''
        };
    };
});