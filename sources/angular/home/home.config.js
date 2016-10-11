angular
  .module('portfolium')
  .config(homeConfig);

function homeConfig($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'public/templates/home.template.html',
      controller: 'HomeController',
      controllerAs: 'homeController',
    });
}
