'use strict';

(function() {
  var accordionToggles = document.querySelectorAll(".accordion__head");
  var accordionDiv = document.querySelectorAll(".accordion div");
  var accordionOpen = "accordion-open";


  function onToggleClicked(e) {
    var accordionContainer = e.target.closest(".accordion__head").parentElement;
    for (var i = 0; i < accordionDiv.length; i++) {
      accordionDiv[i].classList.remove(accordionOpen);
    }
    accordionContainer.classList.add(accordionOpen);
  };

  for (var i = 0; i < accordionToggles.length; i++) {
    accordionToggles[i].addEventListener('click', onToggleClicked);
  }

})();
