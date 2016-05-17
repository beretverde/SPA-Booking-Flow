'use strict';

/**
 * @ngdoc function
 * @name spaTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the spaTestApp
 */
angular.module('spaTestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
