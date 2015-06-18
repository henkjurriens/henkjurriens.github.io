'use strict';

/**
 * @ngdoc function
 * @name henkjurriensgithubioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the henkjurriensgithubioApp
 */
angular.module('henkjurriensgithubioApp')
  .controller('AboutCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.show = function(url) {

      $location.path(url);
    }
  });
