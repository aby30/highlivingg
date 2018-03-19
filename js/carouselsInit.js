$().ready(function(e) {

  $('.slickslide').slick({
    //- dots: true,
    infinite: true,
    speed: 500,
    fade: false,
    //- slide: 'li',
    cssEase: 'linear',
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    variableWidth: false,
    asNavFor: '.slick-thumbs'
    //- autoplay: true,
    //- autoplaySpeed: 4000,
    //- responsive: [{
    //-   breakpoint: 800,
    //-   settings: {
    //-     arrows: true,
    //-     centerMode: false,
    //-     centerPadding: '40px',
    //-     variableWidth: false,
    //-     slidesToShow: 1,
    //-     dots: true
    //-   },
    //-   breakpoint: 1200,
    //-   settings: {
    //-     arrows: true,
    //-     centerMode: false,
    //-     centerPadding: '40px',
    //-     variableWidth: false,
    //-     slidesToScroll: 1,
    //-     dots: true
    //-
    //-   }
    //- }],
    //- customPaging: function(slider, i) {
    //-   return '<button class="tab">' + $('.slick-thumbs li:nth-child(' + (i + 1) + ')').html() + '</button>';
    //- }
  });

  $('.slick-thumbs').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: false,
    slide: 'li',
    cssEase: 'linear',
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: '.slickslide',
    variableWidth: true,
  });
  $('.spr__propertyPricePlanCarousel').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: false,
    slide: 'li',
    cssEase: 'linear',
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: '.slickslide',
    variableWidth: true,
    asNavFor: '.spr__propertyPriceCarousel'
  });
  $('.spr__propertyPriceCarousel').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: false,
    slide: 'li',
    cssEase: 'linear',
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: '.slickslide',
    variableWidth: true,
    asNavFor: '.spr__propertyPricePlanCarousel'
  });

  $('.spr__propertyNameCarouselMob').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    fade: false,
    slide: 'li',
    cssEase: 'linear',
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: '.slickslide',
    variableWidth: true,
    asNavFor: '.spr__propertyPricePlanCarousel'
  });

   $('.spr__listingsRevBox').slick({
      slidesToShow: 1,
      dots:true,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 3000,
   });

  $('.spr__listingsHeadline').slick({
     slidesToShow: 1,
     dots:true,
     centerMode: true,
     autoplay: true,
     autoplaySpeed: 3000,
  });
  //$('.slick-thumbs').html('');
  //$('.slick-dots').appendTo('.slick-thumbs');
  $('li[data-slide]').click(function(e) {
     e.preventDefault();
     var slideno = $(this).data('slide');
     $('.spr__propertyPricePlanCarousel').slick('slickGoTo', slideno - 1);
   });

});
