/* globals angular, particlesJS */
'use strict';

angular
  .module('portfolium')
  .run(particlesRun);

function particlesRun($rootScope, $timeout) {
  let config = {
    particles: {
      'retina_detect': true,
      number: {
        value: 80,
        density: {
          enable: true,
          'value_area': 800,
        },
      },
      color: {
        value: '#ffffff',
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#ffffff',
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          'opacity_min': 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          'size_min': 0.1,
          sync: false,
        },
      },
      'line_linked': {
        enable: true,
        distance: 100,
        color: '#acacac',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: 'none',
        random: false,
        straight: false,
        'out_mode': 'out',
        bounce: true,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      'detect_on': 'canvas',
      events: {
        onhover: {
          enable: false,
          mode: 'grab',
        },
        onclick: {
          enable: false,
          mode: 'push',
        },
        resize: true,
      },
    },
  };

  $rootScope.$on('$stateChangeSuccess', particles);

  function particles() {
    $timeout(() => {
      particlesJS('particles', config);
    }, 100);
  }
}
