/**
 * Created by jalalc on 11/07/14.
 */


(function()
{
    'use strict';

    function LibraryLoader($http, $q, serverUrl)
    {
        return {
            load          : function ()
            {
                return $http.get(serverUrl + 'Library', {responseType : 'json'});
            },
            importPlaylist: function (file)
            {
                var reader = new window.FileReader();
                var deffered = $q.defer();

                reader.onerror = function()
                {
                    deffered.reject('Error while reading file');
                };
                reader.onloadend = function(evt)
                {
                    deffered.resolve(JSON.parse(evt.target.result));
                };
                reader.readAsText(file);
                return deffered.promise;
            },
            save          : function (library)
            {
                return $http({
                    method : 'POST',
                    data : library,
                    responseType : 'json',
                    url : serverUrl + 'Library',
                    contentType: 'application/json; charset=utf-8'
                });
            }
        };
    }

    angular.module('mediaPlayerApp').service('libraryLoader', LibraryLoader);

}());

