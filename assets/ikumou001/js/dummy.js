jQuery(document).ready(function () {
  var ua = navigator.userAgent;

  function isTouch() {
    return !!("ontouchstart" in window) || !!(navigator.msMaxTouchPoints);
  }

  function isUnderTablet() {
    var width = window.innerWidth;
    if (width <= 780) {
      return true;
    } else return false;
  }
  /*
  if (isTouch() && isUnderTablet()){
  	 if ( ( navigator.appVersion.match(/Android/) || navigator.appVersion.match(/Iphone/) || navigator.appVersion.match(/iPhone/)) && navigator.appVersion.match(/Simula/) == null && navigator.platform.match(/Win/) == null){
  		jQuery(".post-content").show();
  		jQuery("#post-content").hide();
  	}else{
  		jQuery(".post-content").hide();
  		jQuery("#post-content").show();
  	}
  } else {
  	jQuery(".post-content").hide();
  	jQuery("#post-content").show();
  }
  */
  jQuery(".post-content").show();
  jQuery("#post-content").show();

});