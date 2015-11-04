"use strict";
var mainApp =  mainApp || {};

mainApp.fn = (function($){
	return {

		toggleMenu: function($menu) {
			// if (!$menu.is(':animated')) {
				$menu.stop().fadeToggle( "slow", "linear" );
			// }
		}

	};
}(jQuery));

