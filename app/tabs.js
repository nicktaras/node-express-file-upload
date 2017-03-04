(function (window, document) {

  'use strict';

  var uploadDir = "presentationA"; // Default to first folder.

  var presentationTabs     = document.getElementsByClassName('presentation-item');

  var selectPresentation = function() {

    uploadDir = this.getAttribute('data-drop-destination');
    console.log("uploadDir", uploadDir);

    for (var i = 0; i < presentationTabs.length; i++) {

      removeClass(presentationTabs[i], "active");

      if(this === presentationTabs[i]){

        addClass(this, "active");
        
      }
    }
  };

  for (var i = 0; i < presentationTabs.length; i++) {
    presentationTabs[i].addEventListener('click', selectPresentation, false);
  }
  
}(window, window.document));