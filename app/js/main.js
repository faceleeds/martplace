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

function showDropdown() {
  document.getElementById("filter_menu").classList.toggle("show");
}

// Outside close
window.onclick = function(event) {
  if (!event.target.matches('.inner-top-filter-dots')) {
      var dropdowns = document.getElementsByClassName("inner-top-filter-items");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
}