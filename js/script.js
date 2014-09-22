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

		win.on('scroll', function(e){
			var contFirst = $('.js-cont-height'),
				windowH = win.height(),
				scrollTop = win.scrollTop(),
				img1 = $('#animate_index_1'),
				img2 = $('#animate_index_2'),
				posA1 = img1.offset().top;

				contFirst.css({
					position: 'relative',
					height: windowH
				});

				if(windowH + scrollTop > posA1){
					img1.addClass('active').css({position: 'absolute'})
					img2.addClass('active')
				}
			return false;
		}); 

		var that = $('.js-collage_down'),
		windowH = $(window).height(),
		$contFirst = $('.js-cont-height');

		that.on('click', function(){

			$contFirst.css({position: 'relative', height: windowH})

			$('body').animate({
				scrollTop: $('.collage.second').offset().top
			}, 800)
			return false;
		})
	}
})(jQuery);

