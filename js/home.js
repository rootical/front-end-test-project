var mainApp = (function($){
  "use strict";
  return {
    toggleMenu: function($menu) {
      $menu.stop().fadeToggle( "slow", "linear" );
    }
  };
}(jQuery));


$(document).ready(function() {
  // Menu click event
  $(".sprite-menu").on("click", function(){
    mainApp.toggleMenu($('#main-menu'));
  });

  // Slider initialization
  $('.slider').bxSlider({
    slideWidth: 80,
    minSlides: 1,
    maxSlides: 3,
    slideMargin: 10
  });

  // initializing a colorbox
  $('a.news-img').colorbox({ 
    opacity: 0.5 , 
    rel: 'group1', 
    open: false, //'true' to start immediately
    width: 250
  });

  // colorbox events
  $(document).bind('cbox_complete', function() {
    var $element = $.colorbox.element();

    if(!$element.hasClass('last')) {
      $(this).data({'timeout-id': setTimeout($.colorbox.next, 2000)});
    }else {
      setTimeout($.colorbox.close, 2000);
      $(this).unbind('cbox_complete');
    }
  });

  $(document).bind('cbox_closed', function() {
    $(this).unbind('cbox_complete');
    clearTimeout($(this).data()['timeout-id']);
  });

});