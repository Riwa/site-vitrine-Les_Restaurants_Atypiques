$(document).ready(function () {
  let url = document.location.href.match(/[^\/]+$/)[0];
  console.log(url);

  switch (url) {
    case ('nos_restaurants.html'):
      $('.scripts').append('<script src="../bower_components/gmaps/gmaps.min.js"></script>')
        .append('<script src="../js/gmap-params.js"></script>');
      break;

    case ('devenir_une_franchise.html'):
      $('body').append('<script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>')
        .append('<script src="../bower_components/counter-up/jquery.counterup.min.js"></script>')
        .append('<script src="../js/counter.js"></script>')
        .append('<script src="../js/form.js"></script>')
        .append('<script src="../js/waypoint.js"></script>');
      console.log('Surprise !');
      break;

    case ('qui_sommes_nous.html'):
      $('.scripts').html('script src=""><script>');
      break;

    default:
      // Blablabla
      break;

  }

});