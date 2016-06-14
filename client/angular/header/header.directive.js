/* globals angular */
'use strict';

angular
  .module('portfolium')
  .directive('header', HeaderDirective);

function HeaderDirective() {
  return {
    restrict: 'C',
    link: link,
  };

  function link() {
    let lastScrollTop = 0;
    let header = document.querySelector('header');

    angular
      .element(window)
      .bind('scroll', onScroll);

    function onScroll() {
      let top = window.pageYOffset;
      let scrollDown = top > lastScrollTop;

      let bounding = header.getBoundingClientRect();

      if (scrollDown) {
        if (header.style.position !== 'absolute') {
          header.style.position = 'absolute';
          header.style.top = `${top - header.offsetTop}px`;
        }
      } else if (header.style.position === 'absolute' && bounding.bottom < 0){
        header.style.position = 'absolute';
        header.style.top = `${top - header.clientHeight}px`;
      } else if (bounding.top >= 0) {
        header.style.position = 'fixed';
        header.style.top = '0px';
      }

      lastScrollTop = top;
    }

    // setPositionHeader();

    // function setPositionHeader(){
    //   let top = window.pageYOffset;
    //   let scrollDown = top > lastScrollTop;

    //   let bounding = header.getBoundingClientRect();

    //   if (scrollDown) {
    //     if (header.style.position !== 'absolute') {
    //       header.style.position = 'absolute';
    //       header.style.top = `${top - header.offsetTop}px`;
    //     }
    //     element.addClass('hidden');
    //   } else if (element.hasClass('hidden') && bounding.bottom < 0){
    //     header.style.position = 'absolute';
    //     header.style.top = `${top - header.clientHeight}px`;
    //     element.removeClass('hidden');
    //   } else if (bounding.top >= 0) {
    //     header.style.position = 'fixed';
    //     header.style.top = '0px';
    //   }

    //   lastScrollTop = top;
    //   window.requestAnimationFrame(setPositionHeader);
    // }
  }
}
