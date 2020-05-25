/*!
 * Start Bootstrap - Creative v6.0.1 (https://startbootstrap.com/themes/creative)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-creative/blob/master/LICENSE)
 */
(function($) {
    "use strict"; // Start of use strict
    var open = false;
    // Smooth scrolling using jQuery easing
    $('a.scroll-nav__item[href*="#"]:not([href="#"])').click(function() {
      $(this).parent().addClass("active");
      $(this).parent().siblings().removeClass('active');
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });

    $('.main-nav-toggle').click(function() {
        if(open) {
            $('body').removeClass('main-nav--active');
            $(this).removeClass('is--active');
            $('.main-nav').removeClass('is--active');
        } else {
            $('body').addClass('main-nav--active');
            $(this).addClass('is--active');
            $('.main-nav').addClass('is--active');            
        }
        open = !open
    });


    // Activate scrollspy to add active class to navbar items on scroll
    $('.post-teaser-banner__crop').each(function eachElement() {
        // cache the jQuery object
        var $this = $(this);
        var $min = $this.offset().top;
        var $height = window.screen.availHeight/2;
        var $max = $min + $this.height() - $height;
        if($min!==0) { $min= $min-$height }

        $this.scrollspy({
            min: $min,
            max: $max,
            onEnter: function onEnter(element) {
                $("a.scroll-nav__item[href='#" + element.id +"']").parent().addClass("active");
                $("a.scroll-nav__item[href='#" + element.id +"']").parent().siblings().removeClass('active');
                $this.parent().addClass('active')
                $('#list').removeClass('fill--dark')
                $('#list').addClass('fill--light')
            },
            onLeave: function onLeave(element) {
                $this.parent().removeClass('active')
                $('#list').removeClass('fill--light')
                $('#list').addClass('fill--dark')
            }
        });
    });

    $('.post-teaser-banner__crop').each(function eachElement() {
        // cache the jQuery object
        var $this = $(this);
        var $min = $this.offset().top - 50;
        var $max = $min + $this.height();

        $this.scrollspy({
            min: $min,
            max: $max,
            onEnter: function onEnter(element) {
                $('.main-nav-toggle').removeClass('fill--dark')
                $('.main-nav-toggle').addClass('fill--light')
                $('.logo-mvrdv').removeClass('fill--dark')
                $('.logo-mvrdv').addClass('fill--light')
            },
            onLeave: function onLeave(element) {
                $('.main-nav-toggle').removeClass('fill--light')
                $('.main-nav-toggle').addClass('fill--dark')
                $('.logo-mvrdv').removeClass('fill--light')
                $('.logo-mvrdv').addClass('fill--dark')
            }
        });
    });
})(jQuery); // End of use strict