$(document).ready(function(){
    
    new WOW().init();

    smoothScroll.init();

    $('.flexslider1').flexslider({
        animation: "slide",
        controlNav: "thumbnails"
    });

	$('.flexslider1 .flex-control-nav li').each(function(index, element){
		setTimeout( function(){
				    $(element).addClass('animated slideOutDown');
				  }, (100 * index));
	});

	$(window).scroll(function(){
		if($('#testimonial').length){
			var top = $('#testimonial').offset().top - 600;
		    if($(this).scrollTop() >= top){	        
				$('.flexslider1 .flex-control-nav li').each(function(index, element){
					setTimeout( function(){
							    $(element).removeClass('slideOutDown').addClass('animated bounceInUp');
							  }, (100 * index));
				});
		    }
		}	    
	});

	$('.buyer-dashboard .panel .panel-heading .pull-right a[data-toggle="collapse"]').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		if( $(this).children('.glyphicon').hasClass('glyphicon-minus') ){
			$(this).children('.glyphicon').removeClass('glyphicon-minus').addClass('glyphicon-plus');
		}else{
			$(this).children('.glyphicon').removeClass('glyphicon-plus').addClass('glyphicon-minus');
		}
	});

});