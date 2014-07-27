

angular.module('underscore', []).factory('algorithm', function()
{
   'use strict';

   return window._;
});

/**
 * @ngdoc overview
 * @name mediaPlayerApp
 * @description
 * # mediaPlayerApp
 *
 * Main module of the application.
 */
angular
  .module('mediaPlayerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'underscore',
    'youtube-embed'
  ])
  .config(function ($stateProvider, $urlRouterProvider)
  {
      'use strict';

      $urlRouterProvider.otherwise('/player');

      $stateProvider.state('main', {
        url : '/player',
        views : {
            main : {
                templateUrl : 'views/main.tpl.html',
                controller : 'MediaPlayer'
            }
        }
      });
  });

angular.module('mediaPlayerApp').value('serverUrl', 'http://localhost:8000/');

