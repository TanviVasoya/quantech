$(document).ready(function(){
$("#banner-owl-carousel").owlCarousel({
    items:1,
    nav:true,
    loop:true,
    center:true,
    dots:true,
    autoplay: true,
    speed: 4000,
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

  // animated js

  var owl = $('.owl-carousel');
  owl.owlCarousel();
  // Listen to owl events:
  owl.on('changed.owl.carousel', function(event) {
  new WOW().init();
  })
  new WOW().init();
   
  // fixed header

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
});
// preloader
$(document).ready(function(){
  setTimeout (function(){
      $('.preloader').fadeOut();
    },1000);
})
    