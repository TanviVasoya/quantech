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

    $('#scrollUp').hide()
    $('#scrollUp').click(function(){
      $('html,body').animate(scrollTop = 0 ,1500)
    })

    // preloader

});
$(document).ready(function(){
  setTimeout (function(){
      $('.preloader').fadeOut();
    },1000);
})
    