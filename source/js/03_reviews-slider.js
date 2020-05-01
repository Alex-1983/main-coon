'use strict';

(function() {
  var reviews = document.querySelector(".reviews");
  var reviewsSlider = reviews.querySelector(".swiper-container");
  var buttonPrevious = reviews.querySelector(".slider--reviews .toggles__btn--prev");
  var buttonNext = reviews.querySelector(".slider--reviews .toggles__btn--next");

  var reviewsSwiper = new Swiper(reviewsSlider, {
    slidesPerView: 1,
    loop: true,

    navigation: {
      prevEl: buttonPrevious,
      nextEl: buttonNext
    },
  });

})();
