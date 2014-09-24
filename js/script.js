var touchdevice = false,
	win = $(window),
	windowH = win.height();

$(function() {

	if (!$('html').hasClass('no-touch')) touchdevice = true;

	if ($(document).height() <= $(window).height()){
		$("footer.footer").addClass("navbar-fixed-bottom");
	}

	if($('#js-cont-height').length){
		$('#js-cont-height').animateCollage();	
	}
	
	if($('#animate_index_3').length || $('#animate_index_4').length){
		$('#animate_index_3, #animate_index_4').animateImg1();
	}

	if($('#animate_index_5').length){
		$('#animate_index_5').airMouseMove();
	}
});

(function($){
	$.fn.animateCollage = function(){
		var contFirst = $(this),
			btn = $('.js-collage_down', contFirst),
			imgTo = $('.js-animate_to'),
			posA1 = imgTo.offset().top;

		contFirst.css({
			position: 'relative',
			height: windowH
		});
		
		win.on('scroll', myScroll1);

		function myScroll1(){

			contFirst.css({
				height: 'auto'
			});

			var topScroll = win.scrollTop(),
				scrollPos = topScroll + windowH;

			if(scrollPos > posA1){
				var img1 = $('#animate_index_1'),
					img2 = $('#animate_index_2');
				
				img1.addClass('active').css({position: 'absolute', top: 0});
				img2.addClass('active');
			}
		}
		
		btn.on('click', function(){
			$('body').animate({
				scrollTop: $('section.second').offset().top
			}, 800)
			return false;
		});
	};
})(jQuery);

(function($){
	$.fn.animateImg1 = function(){
		var textCnt1 = $('#animate_index_3'),
			textCnt2 = $('#animate_index_4'),
			posA2 = textCnt1.offset().top,
			posA3 = textCnt2.offset().top;

		win.on('scroll', myScroll2);
		win.on('scroll', myScroll3);

		function myScroll2(){
			var topScroll = win.scrollTop(),
				scrollPos = (topScroll + windowH) + textCnt1.height()*2;
			if(scrollPos > posA2){
				textCnt1.css({opacity: 1});
			}
			return false;
		}

		function myScroll3(){
			var topScroll = win.scrollTop(),
				scrollPos = (topScroll + windowH) + textCnt2.height()*2;

			if(scrollPos > posA3){
				textCnt2.css({opacity: 1});
			}
			return false;
		}
	}
})(jQuery);

(function($){
	$.fn.airMouseMove = function(){
		$(window).scroll(function(){
			var heightW = $(window).height(); 
			var scrollTop = $(this).scrollTop();
			var posB1 = $('#bg_line_group .blue_line_1').offset();
			var posB2 = $('#bg_line_group .blue_line_2').offset();
			var posO1 = $('#bg_line_group .orange_line_1').offset();
			var posC = $('.color_block').offset();
			
			if($('.color_block').length){
				if(posC.top < scrollTop+heightW){    
					$('.color_block').css({
						bottom: 400+((scrollTop-posC.top)/5)
					});
				}
			}
		});
	}
})(jQuery);