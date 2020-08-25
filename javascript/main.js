$(document).ready( function() {

  $('.card-body').hide()

  $('.card').mouseenter( function(e) {
    e.preventDefault();
    var target = e.target;
    var info = $(target).children('.card-body');
    $(info[0]).fadeIn("fast");
  });

  $('.card').mouseleave( function(e) {
    e.preventDefault();
    var target = e.target;
    var info = $(target).children('.card-body');
    $(info[0]).fadeOut("fast");
  });

  $(".card").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
  });

});
