$(document).ready(function(){
$("#banner-owl-carousel").owlCarousel({
    items:1,
    nav:true,
    loop:true,
    center:true,
    dots:true,
});
$("#testimonial-owl-carousel").owlCarousel({
    margin: 20,
    items:2,  
    loop: true,
    dots:false,
    responsiveClass: true,
    smartSpeed: 800,
    responsive: {
      0: { 
        items: 1
      },
      320: {
        items: 1
      },
      375: {
        items: 1
      },
      768: {
        items: 2
      },
    
      1024: {
        items: 2
      },
    
      1199: {
        items: 2
      }
     }
  })
  var owl = $('.owl-carousel');
  owl.owlCarousel();
  // Listen to owl events:
  owl.on('changed.owl.carousel', function(event) {
  new WOW().init();
  })
  new WOW().init();

  $(window).scroll(function(){
    var h = $(window).scrollTop()
    if(h>160)
    {
        $('header').addClass('fix_header')
        // $('.scrolltop').fadIn()
    }
    else
    {
        $('header').removeClass('fix_header')
        // $('.scrolltop').fadOut()
    }
  })
    // scrollUp to top

  $('#scrollUp a').on('click', function(event) {
    var $anchor = $(this);
    var headerH = '85';
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
    }, 1000, 'easeInOutExpo');
    event.preventDefault();
  });
});

// preloader
$(document).ready(function(){
  setTimeout (function(){
      $('.preloader').fadeOut();
    },1000);
})
    