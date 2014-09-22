/* Author:
AIC http://aic.ru/
*/

var touchdevice = false;

$(function() {
	if (!$('html').hasClass('no-touch')) touchdevice = true;

	if ($(document).height() <= $(window).height()){
		$("#footer").addClass("navbar-fixed-bottom");
	}

	$('#animate_index_1').animateIndexFirst();
});


(function($){
	$.fn.animateIndexFirst = function(options){
		var that = $(this);

	}
})(jQuery);
