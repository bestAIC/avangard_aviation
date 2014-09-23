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
				cont = $('.collage'),
				contSecond = $('.collage.second'),
				windowH = win.height(),
				scrollTop = win.scrollTop(),
				img1 = $('#animate_index_1'),
				img2 = $('#animate_index_2'),
				textCnt1 = $('#animate_index_3'),
				textCnt2 = $('#animate_index_4'),
				posA1 = img1.offset().top,
				posA2 = textCnt1.offset().top;
				posA3 = textCnt2.offset().top;

				cont.css({position: 'relative'});
				contFirst.css({height: windowH});



				if((scrollTop + windowH + 40) > posA1){
					img1.addClass('active').css({position: 'absolute', top: 0})
					img2.addClass('active')
				}
				if((scrollTop + windowH + 40) > posA2){
					textCnt1.css({opacity: 1});
				}
				if((scrollTop + windowH + 40) > posA3){
					textCnt2.css({opacity: 1});
				}


			return false;
		}); 

		// var that = $('.js-collage_down'),
		// windowH = $(window).height(),
		// $contFirst = $('.js-cont-height');

		// that.on('click', function(){
		// 	$contFirst.css({position: 'relative', height: windowH})

		// 	$('body').animate({
		// 		scrollTop: $('.collage.second').offset().top
		// 	}, 800)
		// 	return false;
		// });
	}
})(jQuery);



