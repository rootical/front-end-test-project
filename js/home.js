"use strict";
var mainApp =  mainApp || {};

mainApp.fn = (function($){
	return {

		toggleMenu: function($menu) {
			var isVisible = $menu.css("opacity") != "0";
			if(!isVisible) {
				$menu.css("display", "block");
			}
			
			$menu.animate({
				opacity: isVisible ? 0 : 1,
			}, 1000, function() {
				if(isVisible){
					$menu.css("display", "none");
				}
			});
		}

	};
}(jQuery));

