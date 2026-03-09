document.addEventListener('DOMContentLoaded', function () {
  let myCarousel = document.querySelector('#carouselMain');
  let carousel = new bootstrap.Carousel(myCarousel, {
    interval: 4000,
    ride: 'carousel'
  });

  // Activar tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});