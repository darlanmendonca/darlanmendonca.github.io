"use strict";function appConfig($locationProvider,$urlRouterProvider){$locationProvider.html5Mode(!0),$urlRouterProvider.otherwise("/")}function homeConfig($stateProvider){$stateProvider.state("home",{url:"/",templateUrl:"public/templates/home.template.html",controller:"HomeController",controllerAs:"homeController"})}function HomeController(){this.viewName="Home"}function resumeConfig($stateProvider){$stateProvider.state("resume",{url:"/resume",templateUrl:"public/templates/resume.template.html"})}angular.module("portfolium",["ui.router"]),appConfig.$inject=["$locationProvider","$urlRouterProvider"],angular.module("portfolium").config(appConfig),homeConfig.$inject=["$stateProvider"],angular.module("portfolium").config(homeConfig),angular.module("portfolium").controller("HomeController",HomeController),resumeConfig.$inject=["$stateProvider"],angular.module("portfolium").config(resumeConfig);
//# sourceMappingURL=app.js.map
