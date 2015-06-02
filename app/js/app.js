/**
 * Created by leonk1 on 6/2/15.
 */
(function () {
    'use strict';

    angular.module('EmployeesApp', [
        'ui.router'
    ])
        .config(config);

    function config($urlRouterProvider, $stateProvider) {
        $urlRouterProvider
            .otherwise('/');
        $stateProvider
            .state('/', {
                url: '/',
                templateUrl: '/app/html/partial/home.html',
                controller: 'homeCtrl'
            })
            .state('home', {
                url: 'home',
                templateUrl: '/app/html/partial/home.html',
                controller: 'homeCtrl'
            });
    }

    //ApplicationController.$inject = ['$scope', '$rootScope'];
})();
