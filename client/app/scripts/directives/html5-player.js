/**
 * Created by jalalc on 19/07/14.
 */

angular.module('mediaPlayerApp').directive('mHtml5Player', function()
{
    'use strict';

    return {
        restrict : 'A',
        scope : '=',
        controller : 'Html5PlayerCtrl',
        link : function(scope, element)
        {
            console.log(element);
        }
    };
});

angular.module('mediaPlayerApp').controller('Html5PlayerCtrl', function($scope)
{
    'use strict';


});