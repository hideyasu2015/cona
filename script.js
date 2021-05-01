
$(document).ready(function () {

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

});

/* $(function () {
  $('.owl-carousel').owlCarousel({
    items: 4,
    margin: 10,
    loop: true,
  });
});
 */
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 3,
      nav: false
    },
    1000: {
      items: 5,
      nav: true,
      loop: false
    }
  }
})
