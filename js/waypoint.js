$(document).ready(function () {
  let waypoint = new Waypoint({
    element: $('.numbers-key'),
    handler: function (direction) {
      notify(this.id + ' hit')
    }
  });
});