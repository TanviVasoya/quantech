$(document).ready(function(){
$("#banner-owl-carousel").owlCarousel({
    items:1,
    nav:true,
    loop:true,
    center:true,
    dots:true,
    // autoplay:true,
    // autoplayTimeout:4000,
    // slideBy:2,
    
});
$("#testimonial-owl-carousel").owlCarousel({
     margin: 20,
     items:2,  
     loop: true,
     dots:true,
     responsiveClass: true,
    //  autoHeight: true,
    //  autoplayTimeout: 7000,
    //  smartSpeed: 800,
    //  nav: true,
     responsive: {
       0: { 
         items: 1
       },
     
       768: {
         items: 1
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
   // init Isotope
    var $grid = $('.grid').isotope({
    // options
    });
    // filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    

});
