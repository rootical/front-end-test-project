// document ready
$(document).ready(function() {

    $('#nav-toggle').on('click', function(e) {
      $(this).toggleClass('active');
      $('#main-nav').toggleClass('active');

      if($('#search-toggle').hasClass('active')) {
        $('#search-toggle').toggleClass('active');
        $('.search').toggleClass('active');
      }

      e.preventDefault();
    });

    $('#search-toggle').on('click', function(e) {
      $(this).toggleClass('active');
      $('.search').toggleClass('active');

      if($('#nav-toggle').hasClass('active')) {
        $('#nav-toggle').toggleClass('active');
        $('#main-nav').toggleClass('active');
      }

      e.preventDefault();
    });

});
