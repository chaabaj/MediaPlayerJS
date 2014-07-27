/**
 * Created by jalalc on 13/07/14.
 */

angular.module('mediaPlayerApp').directive('mResponsiveIframe', function($timeout)
{
   'use strict';

    return {
        restrict: 'A',
        link    : function (scope, element)
        {
            var resize = function ()
            {
                var iframe = $('iframe');

                if (iframe.length > 0)
                {
                    $(iframe).css('height', element.css('height'));
                }
            };
            $(window).resize(function ()
            {
                resize();
            });
        }
    };
});