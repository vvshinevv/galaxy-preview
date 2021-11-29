(function ($, sr) {

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
    var timeout;

    return function debounced() {
      var obj = this, args = arguments;
      function delayed() {
        if (!execAsap)
          func.apply(obj, args);
        timeout = null;
      };

      if (timeout)
        clearTimeout(timeout);
      else if (execAsap)
        func.apply(obj, args);

      timeout = setTimeout(delayed, threshold || 100);
    };
  }
  // smartresize 
  jQuery.fn[sr] = function (fn) { return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery, 'smartresize');

jQuery(function () {


  ///////////////////////////////
  // Set Home Slideshow Height
  ///////////////////////////////

  function setHomeBannerHeight() {
    var windowHeight = jQuery(window).height();
    jQuery('#header').height(windowHeight);
  }

  ///////////////////////////////
  // Center Home Slideshow Text
  ///////////////////////////////

  function centerHomeBannerText() {
    var bannerText = jQuery('#header > .center');
    var bannerTextTop = (jQuery('#header').actual('height') / 2) - (jQuery('#header > .center').actual('height') / 2) - 40;
    bannerText.css('padding-top', bannerTextTop + 'px');
    bannerText.show();
  }

  function setHeaderBackground() {
    var scrollTop = jQuery(window).scrollTop(); // our current vertical position from the top 

    if (scrollTop > 300 || jQuery(window).width() < 700) {
      jQuery('#header .top').addClass('solid');
    } else {
      jQuery('#header .top').removeClass('solid');
    }
  }




  ///////////////////////////////
  // Initialize
  ///////////////////////////////

  jQuery.noConflict();
  setHomeBannerHeight();
  centerHomeBannerText();

  //Resize events
  jQuery(window).smartresize(function () {
    console.log('abc');
    setHomeBannerHeight();
    centerHomeBannerText();
  });

});


///////////////////////////////
// Smooth Scroll
///////////////////////////////







///////////////////////////////
// Animate Css
///////////////////////////////
function animationHover(element, animation) {
  element = jQuery(element);
  element.hover(
    function () {
      element.addClass('animated ' + animation);
    },
    function () {
      //wait for animation to finish before removing classes
      window.setTimeout(function () {
        element.removeClass('animated ' + animation);
      }, 2000);
    });
}



///////////////////////////////
// Header Fixed
///////////////////////////////
var origOffsetY;
jQuery(function () {
  var menu = jQuery('#navigation');
  origOffsetY = menu.offset().top;
  document.onscroll = scroll;


  jQuery("#testimonial-container").owlCarousel({

    navigation: false, // Show next and prev buttons
    slideSpeed: 700,
    paginationSpeed: 400,
    singleItem: true,
  });

  jQuery('#scrollToContent').each(function () {
    animationHover(this, 'pulse');
  });

  smoothScroll.init();
  // google.maps.event.addDomListener(window, 'load', () => initialize());
});

function scroll() {
  if (jQuery(window).scrollTop() >= origOffsetY) {
    // jQuery('#navigation').addClass('nav-wrap');
    // jQuery('#services').addClass('exp');
    //$('.content').addClass('menu-padding');
  } else {
    // jQuery('#navigation').removeClass('nav-wrap');
    // jQuery('#services').removeClass('exp');
    //$('.content').removeClass('menu-padding');
  }
}



// function initialize() {
//   var mapProp = {
//     center: new google.maps.LatLng(51.508742, -0.120850),
//     zoom: 5,
//     mapTypeId: google.maps.MapTypeId.ROADMAP,
//     disableDefaultUI: true,
//     scrollwheel: false
//   };
//   var map = new google.maps.Map(document.getElementById("googleMap")
//     , mapProp);
// }


