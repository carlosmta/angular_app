'use strict';

var app = angular.module('gemStore', ['store-directives', 'ngRoute']);

app.controller('StoreController', function($http) {
    var store = this;
    store.products = [];
    $http.get('scripts/controllers_whole/store-products.json').then(function(response) {
        store.products = response.data;
    });
});
/*
    angular.module('angularAppApp', [])
        .controller('MycustomcontrollerCtrl', function($scope, $http) {

            $http.get("https://www.w3schools.com/angular/customers.php").then(function(response) {
                $scope.myData = response.data.records;
            });

        });
*/


app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
        product.reviews.push(this.review);

        this.review = {};
    };
});


app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "main.html",
        })
        .when("/london", {
            templateUrl: "scripts/controllers_whole/london.html",
            controller: "londonCtrl"
        })
        .when("/paris", {
            templateUrl: "scripts/controllers_whole/paris.html",
            controller: "parisCtrl"
        });
});
app.controller("londonCtrl", function($scope) {
    $scope.msg = "I love London";
});
app.controller("parisCtrl", function($scope) {
    $scope.msg = "I love Paris";
});