
$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	adaptiveHeight: true
  });

  $('nav ul li').on('click',function(){

  	$('nav ul  li.active').removeClass('active');
    $(this).addClass('active');
  	//alert(this);
  })
});
		