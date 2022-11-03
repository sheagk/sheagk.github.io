/*
	ZeroFour by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/



$(function() {
    // this will get the full URL at the address bar
    var url = window.location.href;
    // passes on every "a" tag
    $(".topmenu a").each(function() {
        // checks if its the same on the address bar
			if (url == (this.href)) {
            $(this).closest("li").addClass("active");
        }
    });
});


 // var topRange      = 200,  // measure from the top of the viewport to X pixels down
 //     edgeMargin    = 20,   // margin above the top or margin from the end of the page
 //     // animationTime = 1200, // time in milliseconds
 //     contentTop = [];

// allow click anywhere on video to play/pause
$("video").click(function(e){

  // handle click if not Firefox (Firefox supports this feature natively)
  if (typeof InstallTrigger === 'undefined') {

      // get click position
      var clickY = (e.pageY - $(this).offset().top);
      var height = parseFloat( $(this).height() );

      // avoids interference with controls
      if (clickY > 0.82*height) return;

      // toggles play / pause
      this.paused ? this.play() : this.pause();
  }
});



$(document).ready(function() {
	//smooth scroll on clicking a link within the page
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing'
	    //, function () {
	    //     window.location.hash = target;
	    // }
	    );
	});

	 // Stop animated scroll if the user does something, from http://jsfiddle.net/kunknown/GLLsv/2/
	$('html,body').bind('scroll mousedown DOMMouseScroll mousewheel keyup', function(e){
	  if ( e.which > 0 || e.type == 'mousedown' || e.type == 'mousewheel' ){
	    $('html,body').stop();
	  }
	})

	 // Set up content an array of locations
	// $('.da').find('a').each(function(){
	//   contentTop.push( $( $(this).attr('href') ).offset().top );
	// })

	//  // Animate menu scroll to content
	// $('.da').find('a').click(function(){
	//   var sel = this,
	//   newTop = Math.min( contentTop[ $('.da a').index( $(this) ) ], $(document).height() - $(window).height() ); // get content top or top position if at the document bottom
	//   $('html,body').stop().animate({ 'scrollTop' : newTop }, animationTime, function(){
	//     window.location.hash = $(sel).attr('href');
	//   });
	//   return false;
	// })

	//  // adjust side menu
	// $(window).scroll(function(){
	//   var winTop = $(window).scrollTop(),
	//   bodyHt = $(document).height(),
	//   vpHt = $(window).height() + edgeMargin;  // viewport height + margin
	//   $.each( contentTop, function(i,loc){
	//     if ( ( loc > winTop - edgeMargin && ( loc < winTop + topRange || ( winTop + vpHt ) >= bodyHt ) ) ){
	//       $('.da a').removeClass('current').eq(i).addClass('current');
	//     }
	//   })
	// })



	// smoothly adjust the opacity of the navbar as you scroll
  $(window).on('scroll',function () {
      //if you hard code, then use console
      //.log to determine when you want the
      //nav bar to stick.
      var path = window.location.pathname.split('/');
      var path = path[path.length -1];
      if (path != 'genealogy.html') {
	      var deskscroll = 100;		// opacity is 1 at this scroll
	      var mobscroll = 35;
	      var mobwidth = 735;		// over this width and we're not on mobile
	      var st = $(window).scrollTop()
		if ($(this).width() > mobwidth) {
		    var opac = st/deskscroll;
		    $('#nav').css('background-color','rgba(50,50,50,'+opac+')');
		  }
		else {
			var opac = st/mobscroll;
		    $('#nav').css('background-color','rgba(50,50,50,'+opac+')');
		}
	  }
  });

  //make the navbar turn into navbar-fixed (which has different css properties) when you scroll below a certain spot in the page
 //  $(window).scroll(function () {
 //      var deskscroll = 90;
 //      var mobscroll = 25;
 //      var mobwidth = 735;
	// if ($(window).width() > mobwidth) {
	//     if ($(window).scrollTop() > deskscroll) {
	//       $('#nav').addClass('navbar-fixed');
 //          // $('.navbar-fixed #background-image' ).fadeIn();
	//     }
	//     if ($(window).scrollTop() < deskscroll+1) {
	//       $('#nav').removeClass('navbar-fixed');
	//     }
	// }
	// else {
	//     if ($(window).scrollTop() > mobscroll) {
	//       $('#nav').addClass('navbar-fixed');
	//     }
	//     if ($(window).scrollTop() < mobscroll+1) {
	//       $('#nav').removeClass('navbar-fixed');
	//     }
	// }
 //  });


    /**
     * This part handles the highlighting functionality.
     * We use the scroll functionality again, some array creation and
     * manipulation, class adding and class removing, and conditional testing
     */
    var aChildren = $("nav li").children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i=0; i < aChildren.length; i++) {
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    } // this for loop fills the aArray with attribute href values

    $(window).scroll(function(){
        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
				if (windowPos > 50) {
					var windowHeight = $(window).height(); // get the height of the window
					var docHeight = $(document).height();

					for (var i = 0; i < aArray.length; i++) {
						var theID = aArray[i];
						var divPos = $(theID).offset().top; // get the offset of the div from the top of page
						var divHeight = $(theID).height(); // get the height of the div in question
						if (windowPos >= divPos - 50 && windowPos < (divPos + divHeight)) {
							$("a[href='" + theID + "']").addClass("nav-active");
						} else {
							$("a[href='" + theID + "']").removeClass("nav-active");
						}
					}

					if (windowPos + windowHeight == docHeight) {
						if (!$("nav li:last-child a").hasClass("nav-active")) {
							var navActiveCurrent = $(".nav-active").attr("href");
							$("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
							$("nav li:last-child a").addClass("nav-active");
						}
					}
				}
				else {
					$("a[href='" + aArray[0] + "']").removeClass("nav-active");
				}
    });


});


// jQuery(function() {
// 	// shamelessly stoled from Erik Tollerud's source
// 	jQuery.fn.n33_formerize=function(){var _fakes=new Array(),_form = jQuery(this);_form.find('input[type=text],textarea').each(function() { var e = jQuery(this); if (e.val() == '' || e.val() == e.attr('placeholder')) { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).blur(function() { var e = jQuery(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).focus(function() { var e = jQuery(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); _form.find('input[type=password]').each(function() { var e = jQuery(this); var x = jQuery(jQuery('<div>').append(e.clone()).remove().html().replace(/type="password"/i, 'type="text"').replace(/type=password/i, 'type=text')); if (e.attr('id') != '') x.attr('id', e.attr('id') + '_fakeformerizefield'); if (e.attr('name') != '') x.attr('name', e.attr('name') + '_fakeformerizefield'); x.addClass('formerize-placeholder').val(x.attr('placeholder')).insertAfter(e); if (e.val() == '') e.hide(); else x.hide(); e.blur(function(event) { event.preventDefault(); var e = jQuery(this); var x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } }); x.focus(function(event) { event.preventDefault(); var x = jQuery(this); var e = x.parent().find('input[name=' + x.attr('name').replace('_fakeformerizefield', '') + ']'); x.hide(); e.show().focus(); }); x.keypress(function(event) { event.preventDefault(); x.val(''); }); });  _form.submit(function() { jQuery(this).find('input[type=text],input[type=password],textarea').each(function(event) { var e = jQuery(this); if (e.attr('name').match(/_fakeformerizefield$/)) e.attr('name', ''); if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); }).bind("reset", function(event) { event.preventDefault(); jQuery(this).find('select').val(jQuery('option:first').val()); jQuery(this).find('input,textarea').each(function() { var e = jQuery(this); var x; e.removeClass('formerize-placeholder'); switch (this.type) { case 'submit': case 'reset': break; case 'password': e.val(e.attr('defaultValue')); x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } else { e.show(); x.hide(); } break; case 'checkbox': case 'radio': e.attr('checked', e.attr('defaultValue')); break; case 'text': case 'textarea': e.val(e.attr('defaultValue')); if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } break; default: e.val(e.attr('defaultValue')); break; } }); window.setTimeout(function() { for (x in _fakes) _fakes[x].trigger('formerize_sync'); }, 10); }); return _form; };
// 	jQuery.browser={};(function(){jQuery.browser.msie=false;jQuery.browser.version=0;if(navigator.userAgent.match(/MSIE ([0-9]+)\./)){jQuery.browser.msie=true;jQuery.browser.version=RegExp.$1;}})();

// 	var	_bh = jQuery('body, html'),
// 		_window = jQuery(window),
// 		_nav = jQuery('#nav');

// 	// Forms
// 		if (jQuery.browser.msie && jQuery.browser.version <= 9)
// 			jQuery('form').n33_formerize();

// 		jQuery('form .form-button-submit').click(function(e) { e.preventDefault(); jQuery(this).closest('form').submit(); });
// 		jQuery('form .form-button-reset').click(function(e) { e.preventDefault(); jQuery(this).closest('form')[0].reset(); });

// 	// Links
// 		jQuery('a').click(function(e) {
// 			var t = jQuery(this), h = t.attr('href'), article;

// 			if (h.charAt(0) == '#' && h.length > 1 && (article = jQuery('article#' + h.substring(1))).length > 0)
// 			{
// 				var pos = Math.max(article.parent().offset().top - _nav.height() + 15, 0);
// 				e.preventDefault();
// 				_bh.animate({ scrollTop: pos }, 'slow', 'swing');
// 			}
// 		});

// });


// one attempt at doing the fading, though here it's doing as left scrolling
// var fadeStart=3575
//     ,fadeUntil=4150
//     ,fading = $('#fading')
// ;

// $(window).bind('scroll', function(){
//     var offset = $(document).scrollLeft()
//         ,opacity=0
//     ;
//     if( offset<=fadeStart ){
//         opacity=0;
//     }else if( offset<=fadeUntil ){
//         opacity=(offset-fadeStart)/(fadeUntil-fadeStart);
//     } else if(offset>fadeUtil) {
//         opacity = 1;
//     }
//     fading.css('opacity',opacity).html(opacity);
// });


// a different attempt at doing the fading:
// var target = $('nav');
// var targetHeight = target.height();
// var containerHeight = $('#container').outerHeight();

// var maxScroll = containerHeight - targetHeight;
// var scrollRange = maxScroll/(target.length-1);

// $(document).scroll(function(e){
//     var scrollY = $(window).scrollTop();
//     var scrollPercent = (scrollRange - scrollY%scrollRange)/scrollRange;
//     var divIndex = Math.floor(scrollY/scrollRange);

//     target.has(':lt(' + divIndex + ')').css('opacity', 0);
//     target.eq(divIndex).css('opacity', scrollPercent);
//     target.has(':gt(' + divIndex + ')').css('opacity', 1);
// });


// looks like the simplest attempt at the fading:
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $( "#nav #background" ).fadeIn();
    } else {
        $( "#nav #background" ).fadeOut();
    }
});


(function($) {

	skel
		.breakpoints({
			desktop: '(min-width: 737px)',
			tablet: '(min-width: 737px) and (max-width: 1200px)',
			mobile: '(max-width: 736px)'
		})
		.viewport({
			breakpoints: {
				tablet: {
					width: 1080
				}
			}
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Dropdowns.
			$('#nav > ul').dropotron({
				offsetY: -22,
				mode: 'fade',
				noOpenerFade: true,
				speed: 300,
				detach: false
			});

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Off-Canvas Navigation.

			// Title Bar.
				$(
					'<div id="titleBar">' +
						'<a href="#navPanel" class="toggle"></a>' +
						'<span class="title">' + $('#logo').html() + '</span>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#titleBar, #navPanel, #page-wrapper')
						.css('transition', 'none');

	});

})(jQuery);
