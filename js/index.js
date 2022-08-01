var $carouselr = $('.carousel--review').flickity({
  prevNextButtons: false,
  pageDots: false,
  wrapAround: true
});
$('.flicketyr--prev').on( 'click', function() {
  $carouselr.flickity('previous');
});
$('.flicketyr--next').on( 'click', function() {
  $carouselr.flickity( 'next', true );
});

var $carouselw = $('.carousel--work').flickity({
  wrapAround: true,
  prevNextButtons: false,
  pageDots: false
});

$('.flicketyw--prev').on( 'click', function() {
  $carouselw.flickity('previous');
});
$('.flicketyw--next').on( 'click', function() {
  $carouselw.flickity( 'next', true );
});