
$(document).ready(function () {

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  /* $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  }) */


});


$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    center: true,
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      600: {
        items: 1
      }
    }
  });
});

