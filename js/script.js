/* Author:
AIC http://aic.ru/
*/

var touchdevice = false;

$(function() {
	if (!$('html').hasClass('no-touch')) touchdevice = true;

	// if ($(document).height() <= $(window).height()){
	// 	$("#footer").addClass("navbar-fixed-bottom");
	// }

	$('body').animateCollage();

});


(function($){
	$.fn.animateCollage = function(){
		
		var body = $(this),
			win = $(window),
			windowH = win.height(),
			contFirst = $('#js-cont-height'),
			btn = $('.js-collage_down', contFirst),
			img1 = $('#animate_index_1'),
			img2 = $('#animate_index_2'),
			textCnt1 = $('#animate_index_3'),
			textCnt2 = $('#animate_index_4'),
			posA1 = img1.offset().top,
			posA2 = textCnt1.offset().top;
			posA3 = textCnt2.offset().top;
			console.log('posA1: ' + posA1 + ',posA2: ' + posA2 + ',posA3: ' + posA3);


			contFirst.css({position: 'relative'});
			contFirst.css({height: windowH});

		$(window).on('scroll', function(){
			var topScroll = body.scrollTop(),
				scrollPos = topScroll + windowH;
				posTopScroll = (topScroll + windowH/2);
				

			if(scrollPos > posA1){
				img1.addClass('active').css({position: 'absolute', top: 0});
				img2.addClass('active');
			}
			if(posTopScroll > posA2){
				textCnt1.css({opacity: 1});
			}
			if(posTopScroll > posA3){
				textCnt2.css({opacity: 1});
			}
			return false;
		});
		
		btn.on('click', function(){
			body.animate({
				scrollTop: $('section.second').offset().top
			}, 800)
			return false;
		});
	}
	
})(jQuery);



