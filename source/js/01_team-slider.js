'use strict';

(function() {
  var team = document.querySelector(".team");
  var teamSlider = document.querySelector(".swiper-container");
  var buttonPrevious = team.querySelector(".toggles__btn--prev");
  var buttonNext = team.querySelector(".toggles__btn--next");

  var teamSwiper = new Swiper(teamSlider, {
    slidesPerView: 1,
    loop: true,


    breakpoints: {
    1365: {
        effect: 'fade',
      },
    },

    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrevious
    },
  });

})();
