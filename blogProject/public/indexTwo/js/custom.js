


$(document).ready(function(){
	var flag = 0;
		function getWidth(){
			if($(window).width() >= 767){
				$(".sidebar").slideDown('350');
				flag = 0;
			}
			else{
				$(".sidebar").slideUp('350');
				// $(".sidebar").slideDown('350');
				flag = 1;
			}
		};
    $(window).scroll(function() {
        getWidth()
		if ($(this).scrollTop()>300 && flag) {

            $(".sidebar").slideUp('350');
            $('.navigation a').removeClass("flag");
        }

    });
	 $(".navigation a").click(function(){
	  
		if(!$(this).hasClass("flag")) {

			$(".sidebar").slideDown('350');
			$(this).addClass("flag");
		}
		else if($(this).hasClass("flag")) {
			$(this).removeClass("flag");
			$(".sidebar").slideUp('350');

		}
	});


});

	$('.service-item').waypoint(function(down) {
		$(this).addClass('animation');
		$(this).addClass('fadeInUp');
	}, { offset: '70%' });
	
	
	$('.feature-item').waypoint(function(down) {
		$(this).addClass('animation');
		$(this).addClass('fadeInUp');
	}, { offset: '70%' });
	
	$('.testimonial-content').waypoint(function(down) {
		$(this).addClass('animation');
		$(this).addClass('fadeInUp');
	}, { offset: '70%' });

	/* Scroll to Top */


	  $(".totop").hide();

	  $(function(){
		$(window).scroll(function(){
		  if ($(this).scrollTop()>300)
		  {
			$('.totop').slideDown();
		  } 
		  else
		  {
			$('.totop').slideUp();
		  }
		});

		$('.totop a').click(function (e) {
		  e.preventDefault();
		  $('body,html').animate({scrollTop: 0}, 500);
		});

	  });


