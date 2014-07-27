/**
 * Created by jalalc on 13/07/14.
 */

(function()
{
    'use strict';

    function YoutubeThumbnailRetreiver()
    {
        return {
            retreiveThumbnail : function(youtubeUrl)
            {
                var youtubeIdRegex = /v=.{11}/;
                var id;

                var match = youtubeUrl.match(youtubeIdRegex);
                if (match.length > 0)
                {
                    id = match[0].substring(2, match[0].length);
                    return 'http://img.youtube.com/vi/' + id + '/mqdefault.jpg';
                }
                return '';
            }
        };
    }

    angular.module('mediaPlayerApp').service('youtubeThumbnailRetreiver', YoutubeThumbnailRetreiver);

}());

