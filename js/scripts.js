// document ready
$(document).ready(function() {
    $('#nav-toggle').on('click', function(e) {
      $(this).toggleClass('active');
      $('#main-nav').toggleClass('active');
      e.preventDefault();
    });
});
