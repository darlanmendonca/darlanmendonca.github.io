/* globals angular */
'use strict';

angular
  .module('portfolium')
  .config(appConfig);

function appConfig($locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}
