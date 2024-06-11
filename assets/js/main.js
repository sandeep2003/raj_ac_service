
(function ($) {
  "use strict";

  // $("#header").load("header.html");
  // $("#footer").load("footer.html");
//   $("#cinner-header").load("../services/innerheader.html");
//   $("#contactinclude").load("../services/contact-include.html");
//   $("#cinner-footer").load("../services/cinner-footer.html");


  function headerStyle() {
    if ($(".header").length) {
      var windowpos = $(window).scrollTop();
      var siteHeader = $(".header");
      if (windowpos > 1) {
        siteHeader.addClass("fixed-header");
      } else {
        siteHeader.removeClass("fixed-header");
      }
    };
  };
  headerStyle();

  $(window).on('scroll resize', function () {
    headerStyle();
  });




  $('.header-menu a').on('click', function (e) {
    $("body").removeClass("open-menu");
    let href = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(href).offset().top - 120
    }, '900');
    e.preventDefault();
  });


  // gallery-slider

  if ($('#gallery-slider').length) {
    $('#gallery-slider').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        responsiveClass: true,
        nav: false,
       responsive: {
        0: {
          items: 1,
          nav: true
        },
      600:{
          items: 1
        },
        1000: {
          items: 1,
        } 
       }
     });
    };
    
  if ($('.blog-carousel').length) {
    $('.blog-carousel').owlCarousel({
      loop: true,
      margin: 25,
      nav: true,
      dots: false,
      smartSpeed: 700,
      autoplay: 5000,
      navText: ['<span class="fa fa-chevron-left"></span>', '<span class="fa fa-chevron-right"></span>'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        800: {
          items: 1
        },
        1024: {
          items: 3
        },
        1200: {
          items: 4
        },
        1600: {
          items: 4
        }
      }
    });
  };

    $(".accordion").on("click", ".card", function (e) {
      $('.card').removeClass('open');
        $(this).toggleClass('open');
        e.preventDefault();
    });

    $('.adhar-btn a').on('click', function (e) {
      let href = $(this).attr('href');
      // console.log();
      $('html, body').animate({
          scrollTop: $(href).offset().top - 120
      }, '900');
      e.preventDefault();
   });
   var spanWidth = $('#text span').width();
   $('#text').animate( {width: spanWidth }, 2000 );

   
})(window.jQuery);



function closesidebar(){
    $(".side-info").removeClass("info-open"); 
    $(".menu-nav").removeClass("open-menu");
}

function openNavbar(){
    $(".menu-nav").addClass("open-menu"); 
}

function toggleNavbar(){
    var windowWidth = $(window).width();
    if (windowWidth < 992) {
            $(".dropdown > .drop-menu").slideToggle("slow");
            e.preventDefault();
      }
}

function toggleSubmenu(id){
    var windowWidth = $(window).width();
    if (windowWidth < 992) {
        $(".drop-menu > .submenu"+id).children('.drop-menu').slideToggle("slow");
        e.preventDefault();
      }  
}


