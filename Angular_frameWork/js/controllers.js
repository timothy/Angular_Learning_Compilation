/**
 * Created by tabradford on 7/22/2015.
 */

var app = angular.module('rootControllers', ['ui.bootstrap']);

app.controller('TabCtrl',function($scope){

    window.location.hash = "#/main";

    $scope.changeHash = function(data) {
        window.location.hash = data;
    };

    $scope.tabs = [
        {title: 'Main', href:"#/main"},
        {title: 'Invoice', href:'#/invoice'},
        {title: 'Calculator', href:'#/calc'},
        {title: 'Users', href:'#/user'},
        {title: 'Slide Show', href:'#/slide'}
    ];
});

app.controller('InvoiceController', ['$scope','$routeParams', function($scope) {
    $scope.test = "InvoiceController is Working. This text was generated by the Angular $scope. Angular and routing are working...";
}]);

app.controller('MainController', ['$scope','$routeParams', function($scope) {
    $scope.test = "MainController is Working. This text was generated by the Angular $scope. Angular and routing are working...";
}]);
