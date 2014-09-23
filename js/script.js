

$(document).ready(function() {
	animateCollage();	

});


function animateCollage(){
	lock = 0;
	var win = $(window),
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

	win.on('scroll', function(){
		var topScroll = win.scrollTop(),
			scrollPos = topScroll + windowH;
			posTopScroll = (topScroll + windowH/2);

		if(scrollPos > posA1){
			if(lock == 0){
				lock = 1;
				img1.addClass('active').css({position: 'absolute', top: 0});
				img2.addClass('active');
			}
		}
		if(posTopScroll > posA2){
			if(lock == 1){
				lock = 2;
				textCnt1.css({opacity: 1});
			}
		}
		if(posTopScroll > posA3){
			if(lock == 2){
				lock = 3;
				textCnt2.css({opacity: 1});
			}
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
