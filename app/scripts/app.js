'use strict';

/**
 * @ngdoc overview
 * @name henkjurriensgithubioApp
 * @description
 * # henkjurriensgithubioApp
 *
 * Main module of the application.
 */
angular
  .module('henkjurriensgithubioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/presentations', {
        templateUrl: 'views/presentations.html',
        controller: 'PresentationsCtrl'
      })
      .when('/apps', {
        templateUrl: 'views/apps.html',
        controller: 'AppsCtrl'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
