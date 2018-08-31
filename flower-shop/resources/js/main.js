$(document).ready(function(){
  $('#galleryCarousel').carousel({
    interval: 5000
  });
  //  ------- CAROUSEL GALLERY ------
  //Handles the carousel thumbnails
  $('[id^=carousel-selector-]').click(function () {
    var id_selector = $(this).attr("id");
    try {
      var id = /-(\d+)$/.exec(id_selector)[1];
      console.log(id_selector, id);
      jQuery('#galleryCarousel').carousel(parseInt(id));
    } catch (e) {
      console.log('Regex failed!', e);
    }
  });
  // When the carousel slides, auto update the image
  $('#galleryCarousel').on('slid.bs.carousel', function (e) {
    var id = $('.item.active').data('slide-number');
    $('#carousel-text').html($('#slide-content-'+id));
  });
  //  ------- NAVIGATION SCROLL ------
  $('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if ( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  //  ----------- SCROLL TO THE TOP ------------
  $(window).scroll(function(){
    if ($(this).scrollTop() > 300) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
  //Click event to scroll to top
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
});
