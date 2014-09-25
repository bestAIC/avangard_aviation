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

	if($('.avangard_about #animate_index_5').length){
		$('.avangard_about #animate_index_5').airLoadMove();
	}

	if($('.avangard_about #animate_index_6').length){
		$('.avangard_about #animate_index_6').animateImg2();
	}

	if($('.avangard_about #animate_index_7').length){
		$('.avangard_about #animate_index_7').animateImg3();
	}

	if($('.avangard_about #animate_index_8').length){
		$('.avangard_about #animate_index_8').animateImg4();
	}

	if($('#engineering_technical_services_animate_2').length || $('#managed_aircraft_animate_1').length){
		$('#engineering_technical_services_animate_2, #managed_aircraft_animate_1').animateImg9();
	}

	if($('.avangard_about .collage_birds').length){		
		$('.avangard_about .collage_birds').animateImg5();
	}

	setTimeout(function() {
		$('select').styler();
	}, 100);

	$('.cols > *').cleanWS();

	if($('#map').length){
		$('#map').mapAnimate();
	}

});

(function($) {

	$.fn.cleanWS = function(options){
		this.each(function(){
			var iblock = this, par = iblock.parentNode, prev = iblock.previousSibling, next = iblock.nextSibling;
			while (prev) {
				var newprev = prev.previousSibling;
				if (prev.nodeType == 3 && prev.nodeValue) {
					for (var i=prev.nodeValue.length-1; i>-1; i--) {
						var cc = prev.nodeValue.charCodeAt(i);
						if (cc==9||cc==10||cc==32) {
							prev.nodeValue = prev.nodeValue.slice(0,i);
						} else {
							break;
						}
					}
				}
				if (prev.nodeType == 8)	par.removeChild(prev); // remove comment
				prev = newprev;
			}
			while (next) {
				var newnext = next.nextSibling;
				if (next.nodeType == 3 && next.nodeValue) {
					while(next.nodeValue.length) {
						var cc = next.nodeValue.charCodeAt(0);
						if (cc==9||cc==10||cc==32) {
							next.nodeValue = next.nodeValue.slice(1);
						} else {
							break;
						}
					}
				}
				if (next.nodeType == 8)	par.removeChild(next); // remove comment
				next = newnext;
			}

		});
	}

})(jQuery);

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

			$('.avangard_engineering_technical_services #js-cont-height').css({
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
				scrollPos = (topScroll + windowH) + textCnt1.height();
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
	$.fn.airLoadMove = function(){
		var that = $(this),
			win = $(window),
			heightW = $(window).height();

		win.on('load', function(){
			var scrollTop = win.scrollTop(),
				posEl = that.offset();
			
			if(posEl.top < scrollTop+heightW){    
				that.addClass('active');
			}
		});
	}
})(jQuery);

(function($){
	$.fn.animateImg2 = function(){
		var cont = $(this),
			win = $(window);

		win.on('scroll', function(){
			var posEl = cont.offset().top,
				posWin = win.scrollTop(),
				heightW = win.height;

				if(posEl > windowH - 200){
					cont.addClass('action');
				}
		}).on('load', function(){
			var posEl = cont.offset().top,
				posWin = win.scrollTop(),
				heightW = win.height;

				if(posEl < windowH){
					cont.addClass('static');
				} else {
					cont.removeClass('static');
				}
		})
	}
})(jQuery);

(function($){
	$.fn.animateImg3 = function(){
		var cont = $(this),
			win = $(window);

		win.on('scroll', function(){
			var posEl = cont.offset().top,
				posWin = win.scrollTop(),
				heightW = win.height;

				if(posEl < windowH + posWin + 50){
					cont.addClass('action');
				}
		})
	}
})(jQuery);

(function($){
	$.fn.animateImg4 = function(){
		var cont = $(this),
			win = $(window);

		win.on('scroll', function(){
			var posEl = cont.offset().top,
				posWin = win.scrollTop(),
				heightW = win.height;

				if(posEl < windowH + posWin + 50){
					cont.addClass('action');
				}
		})
	}
})(jQuery);

(function($){
	$.fn.animateImg5 = function(){
		var cont = $(this),
			win = $(window);

		win.on('scroll', function(){
			var posEl = cont.offset().top,
				posWin = win.scrollTop(),
				heightW = win.height;

			if(posEl < windowH + posWin + 50){
				cont.addClass('action');
			} 
		})
	}
})(jQuery);

(function($){
	$.fn.animateImg9 = function(){
		var cont = $(this),
			win = $(window);

		win.on('scroll', function(){
			var posEl = cont.offset().top,
				posWin = win.scrollTop(),
				heightW = win.height,
				delta = posWin - posEl;

				if(posEl < windowH + posWin + 50){
					cont.find('img').css({
						top: -700-delta/2
					});
				}
		})
	}
})(jQuery);

(function($){
	$.fn.mapAnimate = function(){
		google.maps.event.addDomListener(window, 'load', init);
		    var map;
		    function init() {
		        var mapOptions = {
		            center: new google.maps.LatLng(47.465744,-7.567063),
		            zoom: 2,
	                zoomControl: false,
	                disableDoubleClickZoom: false,
	                mapTypeControl: false,
	                scaleControl: false,
	                scrollwheel: false,
	                panControl: false,
	                streetViewControl: false,
	                draggable : false,
	                overviewMapControl: false,
	                overviewMapControlOptions: {
	                    opened: false,
	                },
		            mapTypeId: google.maps.MapTypeId.ROADMAP,
		            styles: [
		            	{
							"featureType": "water",
							"elementType": "geometry",
							"stylers": [{ "color": "#ffffff" }]
						},{
							"featureType": "landscape",
							"elementType": "geometry",
							"stylers": [{ "color": "#f4f5f6" }]
						},{
							"elementType": "labels.text",
							"stylers": [{ "visibility": "off" }]
						}
		            ],
		        }
		        var mapElement = document.getElementById('map');
		        var map = new google.maps.Map(mapElement, mapOptions);
		        var locations = [
					['moskow', 'undefined', 'undefined', 'undefined', 'undefined', 55.755826, 37.6173, 'img/ico_7.png'],
					['new-york', 'undefined', 'undefined', 'undefined', 'undefined', 40.7127837, -74.0059413, 'img/ico_7.png'],
					['paris', 'undefined', 'undefined', 'undefined', 'undefined', 48.856614, 2.3522219, 'img/ico_7.png'],
					['berlin', 'undefined', 'undefined', 'undefined', 'undefined', 52.52000659999999, 13.404954, 'img/ico_7.png']
		        ];
		        for (i = 0; i < locations.length; i++) {
					if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
					if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
					if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
		           if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
		           if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
		            marker = new google.maps.Marker({
		                icon: markericon,
		                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
		                map: map,
		                title: locations[i][0],
		                desc: description,
		                tel: telephone,
		                email: email,
		                web: web
		            });
		        }
		}
	}
})(jQuery);

