$(function(){

    $('.main-section-slider').slick({
        infinite: true,
        autoplay: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        nextArrow: $('.main-section-slider-next'),
        prevArrow: $('.main-section-slider-previous'),
        autoplay:true,
        autoplaySpeed: 5000,
      });

      $('.project-slider').slick({
        sccEase:'linear',
        arrows: false,
        asNavFor: $(".project-slider-nav"),
        draggable: false,
      })
      
      $('.project-slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: $(".project-slider"),
        draggable: false,
      })
});