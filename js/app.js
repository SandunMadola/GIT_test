var app = angular.module('app', ['ngRoute', 'homeCtrls']);

app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
                when('/home', {
                    templateUrl: 'dynamic/home.html',
                    controller: 'homeCtrl'
                }).
                when('/devices', {
                    templateUrl: 'dynamic/devices.html',
                    controller: 'deviceCtrl'
                }).
                when('/thumbnail', {
                    templateUrl: 'dynamic/thumbnail.html',
                    controller: 'thumbnailCtrl'
                }).
                when('/details/:itemId', {
                    templateUrl: 'dynamic/details.html',
                    controller: 'detailsCtrl'
                }).
                when('/request', {
                    templateUrl: 'dynamic/request.html',
                    controller: 'requestCtrl'
                }).
                otherwise({
                    redirectTo: '/home'
                });
    }]);

