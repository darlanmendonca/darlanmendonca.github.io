/* globals angular */
'use strict';

angular
  .module('portfolium')
  .config(resumeConfig);

function resumeConfig($stateProvider) {
  $stateProvider
    .state('resume', {
      url: '/resume',
      templateUrl: 'public/templates/resume.template.html',
    });
}
