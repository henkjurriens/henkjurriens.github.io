'use strict';

/**
 * @ngdoc function
 * @name henkjurriensgithubioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the henkjurriensgithubioApp
 */
angular.module('henkjurriensgithubioApp')
  .controller('PresentationsCtrl', function ($http, $scope, $location) {


    $scope.show = function(url) {
      $location.path(url);
    }

    $scope.retrieve = function() {
      $http.get('/data/personal.json').
      success(function(data, status, headers, config) {
        console.log(data.presentations);
        $scope.presentations = data.presentations;

      }).
      error(function(data, status, headers, config) {

      });

    }

    $scope.retrieve();

  });
