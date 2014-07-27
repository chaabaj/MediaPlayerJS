/**
 * Created by jalalc on 26/07/14.
 */

(function()
{
    'use strict';

    function TrackService(youtubeThumbnailRetreiver)
    {
        var externalMediaTypeSupported = {
            youtube : {
                regex : /https:\/\/www\.youtube\.com\/watch\?v=.{11,}/,
                thumbnailRetreiver : youtubeThumbnailRetreiver
            }
        };

        var mediaTypeSupported = {
            audio : /audio\/.*/,
            video : /video\/.*/
        };

        var retreiveMediaTypeFromExternalSource = function(track)
        {
            for (var type in externalMediaTypeSupported)
            {
                var externalMediaType = externalMediaTypeSupported[type];
                if (track.source.match(externalMediaType.regex) !== null)
                {
                    track.mediaType = type;
                    if (angular.isDefined(externalMediaType.thumbnailRetreiver))
                    {
                        track.thumbnail = externalMediaType.thumbnailRetreiver.retreiveThumbnail(track.source);
                    }
                    break ;
                }
            }
        };

        var retreiveMediaTypeFromLocalFile = function(track)
        {
            var file = new window.File(track.source);

            if (file.type === '')
            {
                throw { type : 'UnknownFileType', message : 'Cannot find type of file' };
            }
            for (var mimeType in mediaTypeSupported)
            {
                if (file.type.match(mediaTypeSupported[mimeType]))
                {
                    track.mediaType = mimeType;
                    break ;
                }
            }
        };

        var retreiveMediaType = function(track)
        {
            if (typeof track.source === 'string')
            {
                retreiveMediaTypeFromExternalSource(track);
            }
            else
            {
                retreiveMediaTypeFromLocalFile(track);
            }

            if (track.mediaType.length === 0)
            {
                throw { type : 'UnknownExternalMediaType', message : 'External media not supported' };
            }
        };

        return {
            initialize : function(track)
            {
                retreiveMediaType(track);
            }
        };
    }

    angular.module('mediaPLayerApp').service('trackService', TrackService);

}());
