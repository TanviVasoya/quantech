$(document).ready(function(){
$(".banner-slide").owlCarousel({
    items:1,
    nav:true,
    loop:true,
    center:true,
    dots:true,
    // autoplay:true,
    // autoplayTimeout:4000,
    // slideBy:2,
    
});
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
  $(".owl-track").owlCarousel({
    items:2,
    // nav:false,
    // loop:true,
    // dots:false,
    
});

});
