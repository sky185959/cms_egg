$(document).ready(function() {

  $(window).scroll(function() {
    var htmlTop = $(document).scrollTop();
    if (htmlTop > 10) {
      $("#nav").addClass("mini");
    } else {
      $("#nav").removeClass("mini");
    }
  });

  var _width = $(window).width();
  if (_width < 768) {
    $("#nav a.toogle").click(function() {
      event.preventDefault();
    });

    $(".nav-btn").click(function() {
      if ($(".nav1").is(":hidden")) {
        $(this).addClass("open");
        $(".nav1").slideDown();
      } else {
        $(this).removeClass("open");
        $(".nav1").slideUp();
        $(".nav2").slideUp();
      }
    });

    $(".nav1 ul li").click(function() {
      if ($(this).children(".nav2").is(":hidden")) {
        $(".nav2").slideUp();
        $(this).children(".nav2").slideDown();
      } else {
        $(this).children(".nav2").slideUp();
      }
    });

  } else {
    $(".one").mouseover(function() {
      $(this).children(".nav2").slideDown(200);
    });
    $(".one").mouseleave(function() {
      $(".nav2").stop();
      $(".nav2").hide();
    });
  }
});