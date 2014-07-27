/**
 * Created by jalalc on 14/07/14.
 */

angular.module('mediaPlayerApp').directive('mOpenFileDialog', function()
{
    'use strict';

    return {
        restrict   : 'E',
        scope      : {
            title : '=',
            onFileSelected : '='
        },
        templateUrl : 'views/directives/open-file-dialog.tpl.html',
        link : function(scope, element)
        {
            var input = element.find('input');

            $(input).change(function(evt)
            {
               scope.onFileSelected(evt.target.files);
            });

            scope.openFileDialog= function()
            {
                $(input).focus().trigger('click');
            };
        }
    };
});