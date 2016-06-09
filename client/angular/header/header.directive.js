/* globals angular */
'use strict';

angular
  .module('portfolium')
  .directive('header', HeaderDirective);

function HeaderDirective($window) {
  return {
    restrict: 'C',
    link: link,
  };

  function link(scope, header) {
    let lastScrollTop = 0;

    angular
      .element($window)
      .bind('scroll', onScroll);

    function onScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let scrollDown = scrollTop > lastScrollTop;

      if (scrollDown) {
        header.addClass('hiden');
      } else {
        header.removeClass('hiden');
      }

      lastScrollTop = scrollTop;
    }
  }
}
