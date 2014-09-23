$(document).ready(function() {
	animateCollage();	
});


function animateCollage(){
	var win = $(window),
		windowH = win.height(),
		contFirst = $('#js-cont-height'),
		btn = $('.js-collage_down', contFirst),
		imgTo = $('.js-animate_to'),
		img1 = $('#animate_index_1'),
		img2 = $('#animate_index_2'),
		textCnt1 = $('#animate_index_3'),
		textCnt2 = $('#animate_index_4'),
		posA1 = imgTo.offset().top,
		posA2 = textCnt1.offset().top,
		posA3 = textCnt2.offset().top;

	contFirst.css({
		position: 'relative',
		height: windowH
	});
	
	win.on('scroll', myScroll1);
	win.on('scroll', myScroll2);
	win.on('scroll', myScroll3);

	if(img1.lengt){
		function myScroll1(){
			var topScroll = win.scrollTop(),
				scrollPos = topScroll + windowH;

			if(scrollPos > posA1){
				img1.addClass('active').css({position: 'absolute', top: 0});
				img2.addClass('active');
			}
		}
	}

	if(textCnt1.length){
		function myScroll2(){
			var topScroll = win.scrollTop(),
				scrollPos = topScroll + windowH/2;

			if(scrollPos > posA2){
				textCnt1.css({opacity: 1});
			}
			return false;
		}
	}

	if(textCnt2.length){
		function myScroll3(){
			var topScroll = win.scrollTop(),
				scrollPos = topScroll + windowH/2;

			if(scrollPos > posA3){
				textCnt2.css({opacity: 1});
			}
			return false;
		}
	}
	
	btn.on('click', function(){
		$('body').animate({
			scrollTop: $('section.second').offset().top
		}, 800)
		return false;
	});
}