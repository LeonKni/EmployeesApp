/**
 * Created by leonk1 on 6/2/15.
 */
var app;
(function () {
    'use strict';
    app = angular.module('EmployeesApp', [
        'ui.router', 'ngResource'
    ]);

    app.config(config);

    function config($urlRouterProvider, $stateProvider) {
        $urlRouterProvider
            .otherwise('/');
        $stateProvider
            .state('/', {
                url: '/',
                templateUrl: '/app/html/partial/home.html',
                controller: 'EmployeesCtrl'
            })
            .state('home', {
                url: 'home',
                templateUrl: '/app/html/partial/home.html',
                controller: 'EmployeesCtrl'
            });
    }
})();
