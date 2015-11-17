'use strict';

angular
  .module('portfolium')
  .config(routeConfig);

function routeConfig($locationProvider, $urlRouterProvider, $stateProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/404');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .state('cases', {
      url: '/cases',
      templateUrl: 'templates/home.html'
    })
    .state('blog', {
      url: '/blog',
      templateUrl: 'templates/home.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'templates/home.html'
    })
    .state('tile', {
      url: '/tile/:id',
      templateUrl: 'templates/tile.html'
    });
}
