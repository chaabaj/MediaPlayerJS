/**
 * Created by jalalc on 11/07/14.
 */

angular.module('mediaPlayerApp').directive('repeatDone', function() {

    'use strict';

    return function(scope, element, attrs)
    {
        if (scope.$last)
        {
            scope.$eval(attrs.repeatDone);
        }
    };
});