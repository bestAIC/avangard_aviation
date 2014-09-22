/* Author:
AIC http://aic.ru/
*/

var touchdevice = false;

$(function() {
	if (!$('html').hasClass('no-touch')) touchdevice = true;

	if ($(document).height() <= $(window).height()){
		$("#footer").addClass("navbar-fixed-bottom");
	}


	$(window).animateCollage();
});


(function($){
	$.fn.animateCollage = function(options){
		var win = $(this);

		win.scroll(function(e){
		 	// Вычисляем ширину блока HTML
			// var w = $('html').width();
			// var h = $('html').height();    
		 	// Вычисляем позицию курсора в пикселях относительно центра
			// var x = (w/2 - e.pageX)/5;
			// var y = (h/2 - e.pageY)/2;

			var img = $('#animate_index_2'),
				windowH = win.height(),
				scrollTop = win.scrollTop(),
				posA1 = img.offset().top;
				console.log('Scroll: ' + scrollTop);
				console.log('PositionA1: ' + posA1);
				console.log('windowH: ' + windowH)

				if(posA1 > scrollTop){
					img.addClass('test')
				} else {
					img.removeClass('test')
				}
				
				

				// img.css({
				// 	left: scrollTop
				// });

		 	// Используя делитель добиваемся разной скорости движения фона уровней
					// $('#animate_index_2').css({
			  //     left:100+y
			  //     top:0+y
			  //   });

		}); 
}
})(jQuery);
