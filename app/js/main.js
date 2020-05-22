$(function(){

    $(".rate-star").rateYo({
        starWidth: "15px",
        rating: 4.5,
        readOnly: true,
      });
      
      $('.slider__weekly-items').slick({
        prevArrow:"<img class='a-right control-c next slick-prev' src='images/left-arrow.svg'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='images/right-arrow.svg'>",
    slidesToShow: 1,
    slidesToScroll: 1,
    // infinite: true,
    arrows: true
      });

});