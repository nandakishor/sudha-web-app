'use strict';

/**
 * @ngdoc overview
 * @name angularjsDemoApp
 * @description
 * # angularjsDemoApp
 *
 * Main module of the application.
 */
angular
  .module('angularjsDemoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'esri.map'
  ])
  .config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
  
      // .when('/', {
      //   templateUrl: 'views/main.html',
      //   controller: 'MainCtrl',
      //   controllerAs: 'main'
      // })
      // .when('/about', {
      //   templateUrl: 'views/about.html',
      //   controller: 'AboutCtrl',
      //   controllerAs: 'about'
      // })
      // .otherwise({
      //   redirectTo: '/'
      // });
      .state('main', {
        url:'/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      // .state('/about', {
      //   templateUrl:'views/about.html',
      //   controller: 'AboutCtrl',
      //   contrallerAs: 'about'
      // })
      .state("about", {
        url:'/about',
        templateUrl:'/views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      });
  });
