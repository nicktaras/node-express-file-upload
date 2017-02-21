(function (window, document) {

  'use strict';

  var presentationTabs     = document.getElementsByClassName('presentation-item');
  var presentationContent  = document.getElementsByClassName('presentation-content');

  var selectPresentation = function(e) {
    for (var i = 0; i < presentationTabs.length; i++) {
      removeClass(presentationTabs[i], "active");
      addClass(presentationContent[i], "hide");
      if(this === presentationTabs[i]){
        addClass(this, "active");
        removeClass(presentationContent[i], "hide");
      }
    }
  };

  for (var i = 0; i < presentationTabs.length; i++) {
    presentationTabs[i].addEventListener('click', selectPresentation, false);
  }

  // TODO move to be shared amongst front end code base.

  function hasClass(el, className) {
    if (el.classList) return el.classList.contains(className)
    else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
  }

  function addClass(el, className) {
    if (el.classList) el.classList.add(className)
    else if (!hasClass(el, className)) el.className += " " + className
  }

  function removeClass(el, className) {
    if (el.classList) el.classList.remove(className)
    else if (hasClass(el, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
      el.className=el.className.replace(reg, ' ')
    }
  }

}(window, window.document));