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

// Parallax

	that.mousemove(function(e){
	 	// Вычисляем ширину блока HTML
		var w = $('html').width();
		var h = $('html').height();    
	 	// Вычисляем позицию курсора в пикселях относительно центра
		var x = (w/2 - e.pageX)/50;
		var y = (h/2 - e.pageY)/25;

	 	// Используя делитель добиваемся разной скорости движения фона уровней
		$('#bnr_1 .cloud').css({
      left:-960+x,
      top:-30+y
    });

	}); 



	}
})(jQuery);
