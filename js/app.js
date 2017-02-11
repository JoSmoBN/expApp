angular.module('XPNS', ['ngRoute'])
    .config(function ($routeProvider) {

        $routeProvider

        // route for the login page
            .when('/', {
                templateUrl: 'templates/login.tpl.html',
                controller: 'loginCtrl'
            })

            // route for the main page
            .when('/main', {
                templateUrl: 'templates/main.tpl.html',
                controller: 'mainCtrl'
            })

    });
