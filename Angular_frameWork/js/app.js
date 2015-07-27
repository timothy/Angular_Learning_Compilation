/**
 * Created by tabradford on 7/22/2015.
 */
var myApp = angular.module('myApp', [
    'ngRoute',
    'ui.bootstrap',
    'rootControllers'
]);
    myApp.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/main.html',
                controller: 'MainController'
            }).
            when('/invoice', {
                templateUrl: 'partials/invoice.html',
                controller: 'InvoiceController'
            }).
            when('/calc', {
                templateUrl: 'partials/calc.html',
                controller: 'CalcController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);