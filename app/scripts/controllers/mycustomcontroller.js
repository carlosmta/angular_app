'use strict';



/**
 * @ngdoc function
 * @name angularAppApp.controller:MycustomcontrollerCtrl
 * @description
 * # MycustomcontrollerCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp', [])
    .controller('MycustomcontrollerCtrl', function($scope, $http) {

        $http.get("https://www.w3schools.com/angular/customers.php").then(function(response) {
            $scope.myData = response.data.records;
        });

    });