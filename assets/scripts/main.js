
/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

(function ($, _c, undefined) {
	'use strict';

	// Use this variable to set up the common and page specific functions. If you
	// rename this variable, you will also need to rename the namespace below.

	var Sage = {
		// All pages
		'common': {
			init: function() {
				// JavaScript to be fired on all pages

				$('.hamburger').on('click', function() {
					$(this).toggleClass('is-active');
					if ($(this).hasClass('is-active')) {
						$('.topnav').slideDown(500);
					} else {
						$('.topnav').slideUp(500);
					}
				});
				$(window).resize(function(){
					$('.topnav').attr('style', '');
					$('.hamburger').removeClass('is-active');
				});

				$('.topnav li.parent a').on('click', function(e) {
					if ($(window).width() <= 768) {
						if ($(this).next('.submenu').not(":visible")) {
							e.preventDefault();
						}
					}
				});

				// Scroll To
				(function() {
					$('.scrollto').on('click', function(e){
						e.preventDefault();
						var section = $(this).attr('href');
						$('html, body').animate({
				            scrollTop: $(section).offset().top
				        }, 1000);
					});
				})();

			},
			finalize: function() {
				// JavaScript to be fired on all pages, after page specific JS is fired
			}
		},

		// Home page
		'page_template_template_home': {
			init: function() {

			},
			finalize: function() {
				// JavaScript to be fired on the home page, after the init JS
			}
		},

		'page_template_template_landing': {
			init: function () {
				$(window).on('load', function() {
					$('section#hero .content').addClass('show');
				});
			}
		}

	};

	// The routing fires all common scripts, followed by the page specific scripts.
	// Add additional events for more control over timing e.g. a finalize event
	var UTIL = {
		fire: function(func, funcname, args) {
			var fire;
			var namespace = Sage;
			funcname = funcname === undefined ? 'init' : funcname;
			fire = func !== '';
			fire = fire && namespace[func];
			fire = fire && typeof namespace[func][funcname] === 'function';

			if (fire) {
				namespace[func][funcname](args);
			}
		},
		loadEvents: function() {
			// Fire common init JS
			UTIL.fire('common');

			// Fire page-specific init JS, and then finalize JS
			$.each(document.body.className.replace(/-/g, '_').split(/\s+/), function (i, classnm) {
				UTIL.fire(classnm);
				UTIL.fire(classnm, 'finalize');
			});

			// Fire common finalize JS
			UTIL.fire('common', 'finalize');
		}
	};

	// Load Events
	$(document).ready(UTIL.loadEvents);
})(window.jQuery, window.Clique); // Fully reference jQuery after this point.
