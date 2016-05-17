'use strict';

/**
 * @ngdoc function
 * @name spaTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spaTestApp
 */
angular.module('spaTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
