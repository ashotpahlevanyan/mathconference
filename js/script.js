$(document).ready(function(){

	$(".navbar .nav li a").on("click", function (){
		$(".navbar .nav li").removeClass("selected");
		$(this).parent().addClass("selected");
	});

	/*$(".submenuWrapper .submenu li a").on("click", function (){
		$(".submenuWrapper .submenu li").removeClass("selected");
		$(this).parent().addClass("selected");
	});*/


	//$('.upToTop').on('click', scrollToTop);
	$('#testScroll').on('click', scrollToTop);
	
	
	function scrollToTop() {
		verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
		element = $('body');
		offset = element.offset();
		offsetTop = offset.top;
		$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
	}

	var $testScroll = $('#testScroll');
	$(document).scroll(function() {
		$testScroll.css({display: $(this).scrollTop()>200 ? "block":"none"});
	});

	/*
	jQuery.UItoTop({ easingType: 'easeOutQuart' });
	
	var offset = 220;
	var duration = 500;
	jQuery(window).scroll(function() {
	if (jQuery(this).scrollTop() > offset) {
		jQuery('.back-to-top').fadeIn(duration);
	} else {
		jQuery('.back-to-top').fadeOut(duration);
		}
	});

	jQuery('.back-to-top').click(function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, duration);
		return false;
	})
	*/
	//$('body').scrollspy({ target: '.submenu' })
});


