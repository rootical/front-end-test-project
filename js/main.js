var divs = $('.img-center'),
	 limit = 250;  /* scrolltop value when opacity should be 0 */

$(window).on('scroll', function() {
  var w = window.innerWidth;
  var h = window.innerHeight;
	var st = $(this).scrollTop();
	console.log(w);
	/* avoid unnecessary call to jQuery function */
	if(w<800){
		divs.css({ 'opacity' : (1 - st/limit) });
 	}
	if (st==0) {
		console.log("0");
		// if(w<800){
		//   $(".menu").css("margin-top","0px");
		// }
		// 
		// $("header").css("position","initial");
	};
	if (st>0 && w<1600) {
		$('.img-logo').show();
		
		// if(w<800){
		//   $(".menu").css("margin-top","-10px");
		// }
		// $(".menu").css("margin-top","-10px");
		$("header").css("z-index","10000");
	};
});

$(document).ready(function(){

	$('.slider').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 2,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});



	$('nav ul li').on('click',function(){

		$('nav ul  li.active').removeClass('active');
		$(this).addClass('active');
		//alert(this);
		})
});
	 
