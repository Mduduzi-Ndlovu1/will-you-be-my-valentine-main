$(window).load(function(){
     $('.preloader').fadeOut('slow');
});


/* =Main INIT Function
-------------------------------------------------------------- */
function initializeSite() {

	"use strict";

	//OUTLINE DIMENSION AND CENTER
	(function() {
	    function centerInit(){

			var sphereContent = $('.sphere'),
				sphereHeight = sphereContent.height(),
				parentHeight = $(window).height(),
				topMargin = (parentHeight - sphereHeight) / 2;

			sphereContent.css({
				"margin-top" : topMargin+"px"
			});

			var heroContent = $('.hero'),
				heroHeight = heroContent.height(),
				heroTopMargin = (parentHeight - heroHeight) / 2;

			heroContent.css({
				"margin-top" : heroTopMargin+"px"
			});

	    }

	    $(document).ready(centerInit);
		$(window).resize(centerInit);
	})();

	// Init effect 
	

};
/* END ------------------------------------------------------- */

/* =Document Ready Trigger
-------------------------------------------------------------- */
$(window).load(function(){

	initializeSite();
	(function() {
		setTimeout(function(){window.scrollTo(0,0);},0);
	})();

});
/* END ------------------------------------------------------- */


$(document).ready(function() {
    $('#countdown').countdown({
        date: "February 14, 2024",
        render: function(data) {
            var el = $(this.el);
            el.empty()
			.append("<div><span><a href='../Valentines day/index.html'></a>Happy Valentines Day Baby</span></div>");

            // Check if the countdown has reached the end date
            if (data.total <= 0) {
                // If reached, reveal the button
                $('#revealButton').show();
            } else {
                // If not reached, hide the button
                $('#revealButton').hide();
            }
        }
    });

    // Button click event to redirect to the desired URL
    $('#revealButton').on('click', function() {
        window.location.href = "../Valentines day/index.html";
    });
});