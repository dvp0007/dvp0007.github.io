(function($) {

    "use strict";
	
	$(window).on("load", function() {
	
        /* ----------------------------------------------------------- */
		/*  PRELOADER ANIMATION
		/* ----------------------------------------------------------- */
	
		var pageTransitionAnimationDuration = 500
		var preloader = $(".preloader");
		pageTransition({
			target: document.querySelector('.page'),
			delay: 0,
			duration: pageTransitionAnimationDuration,
			classActive: 'animated',
			conditions: function (event, link) {
				return
				!/(\#|callto:|tel:|mailto:|:\/\/)/.test(link)
				&& !event.currentTarget.hasAttribute('data-lightgallery')
				&& event.currentTarget.getAttribute('href') !== 'javascript:void(0);';
			},
			onTransitionStart: function (options) {
				setTimeout(function () {
					preloader.removeClass('loaded');
				}, options.duration * .75);
			},
			onReady: function () {
				preloader.addClass('loaded');
			}
		});
		
		/* ----------------------------------------------------------- */
        /*  TEXT ROTATOR ANIMATION
        /* ----------------------------------------------------------- */
		if ($("#selector").length) {
			$("#selector").animatedHeadline({
				 animationType: "clip"
			});
		}
		
	});

    jQuery(document).ready(function($) {
		
		/* ----------------------------------------------------------- */
        /*  STRETCHY NAVIGATION
        /* ----------------------------------------------------------- */
		
		if ($(".cd-stretchy-nav").length > 0) {
			var n = $(".cd-stretchy-nav");
			n.each(function() {
				var n = $(this),
					t = n.find(".cd-nav-trigger");
				t.on("click", function(t) {
					t.preventDefault(), n.toggleClass("nav-is-visible")
				})
			}), $(document).on("click", function(t) {
				!$(t.target).is(".cd-nav-trigger") && !$(t.target).is(".cd-nav-trigger span") && n.removeClass("nav-is-visible");
			})
		}
		$("body.light.dark-header .cd-stretchy-nav ul li a").on('click', function() {
			if ($(this).hasClass("home")) {
				$(".cd-stretchy-nav").addClass('lighter');
			}
			else
			{
				$(".cd-stretchy-nav").removeClass('lighter');
			}
		});


		/* ----------------------------------------------------------- */
        /*  LINK TO ABOUT SECTION
        /* ----------------------------------------------------------- */
 
		$(".link-portfolio-one").on("click", function(e) {
			var tabNum = $(this).index();
			var nthChild = tabNum + 3;
			$("#main > section.active").removeClass("active");
			$("#main > section:nth-child(" + nthChild + ")").addClass("active");
			$(".stretchy-nav li:first-child").removeClass("active");
			$(".stretchy-nav li:nth-child(2)").addClass("active");
			 e.preventDefault();
        });
		
		/* ----------------------------------------------------------- */
        /*  AJAX CONTACT FORM
        /* ----------------------------------------------------------- */

        $(".contactform").on("submit", function() {
            $(".output_message").text("Loading...");

            var form = $(this);
            $.ajax({
                url: form.attr("action"),
                method: form.attr("method"),
                data: form.serialize(),
                success: function(result) {
                    if (result == "success") {
                        $(".form-inputs").css("display", "none");
                        $(".box p").css("display", "none");
                        $(".contactform").find(".output_message").addClass("success");
                        $(".output_message").text("Message Sent!");
                    } else {
                        $(".tabs-container").css("height", "440px");

                        $(".contactform").find(".output_message").addClass("error");
                        $(".output_message").text("Error Sending!");
                    }
                }
            });
            return false;
        });


		

		
		/* ----------------------------------------------------------- */
        /*  MAIN NAVIGATION MENU
        /* ----------------------------------------------------------- */
 
        // MAIN NAVIGATION MENU
        $(".navigation > li, .stretchy-nav > li").on("click", function(e) {
            if (!$(this).hasClass("active")) {
                var tabNum = $(this).index();
                var nthChild = tabNum + 2;
                $(".navigation > li.active, .stretchy-nav > li.active").removeClass("active");
                $(this).addClass("active");
                $("#main > section.active").removeClass("active");
                $("#main > section:nth-child(" + nthChild + ")").addClass("active");
				$(".cd-stretchy-nav").removeClass('lighter-in-portfolio');
            }
			e.preventDefault();
        });
		
		/* ----------------------------------------------------------- */
        /*  SHOW/HIDE SECTIONS
        /* ----------------------------------------------------------- */
		
        if (window.location.hash && $('#link-' + window.location.hash.replace(/^#/, '')).length) {
            $('#link-' + window.location.hash.replace(/^#/, '')).trigger('click');
        }
        window.userInteractionTimeout = null;
        window.userInteractionInHTMLArea = false;
        window.onBrowserHistoryButtonClicked = null;
        $(document).ready(function() {
            $(document).mousedown(function() {
                clearTimeout(window.userInteractionTimeout);
                window.userInteractionInHTMLArea = true;
                window.userInteractionTimeout = setTimeout(function() {
                    window.userInteractionInHTMLArea = false;
                }, 500);
            });
            $(document).keydown(function() {
                clearTimeout(window.userInteractionTimeout);
                window.userInteractionInHTMLArea = true;
                window.userInteractionTimeout = setTimeout(function() {
                    window.userInteractionInHTMLArea = false;
                }, 500);
            });
            if (window.history && window.history.pushState) {
                $(window).on('popstate', function() {
                    if (!window.userInteractionInHTMLArea) {
                        if (window.location.hash && $('#link-' + window.location.hash.replace(/^#/, '')).length) {
                            $('#link-' + window.location.hash.replace(/^#/, '')).trigger('click');
                        }
                        if (!window.location.hash) {
                            $('#link-work').trigger('click');
                        }
                    }
                    if (window.onBrowserHistoryButtonClicked) {
                        window.onBrowserHistoryButtonClicked();
                    }
                });
            }
        });

	});

	$('#link-about').click(function() {
		$('#main').addClass('open');
	});
	$('#link-contact').click(function() {
		$('#main').addClass('open');
	});
	$('#back-mobile').click(function() {
		$('#main').removeClass('open');
	});
	
})(jQuery);