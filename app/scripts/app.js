'use strict';

/**
 * @ngdoc overview
 * @name GoodTutorialApp
 * @description
 * # GoodTutorialApp
 *
 * Main module of the application.
 */
angular
  .module('GoodTutorialApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
      .state('main', {
        url:'/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('about', {
        url:'/about',
        templateUrl:'/views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .state('contact', {
        url:'/contact',
        templateUrl:'/views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      });
  });
