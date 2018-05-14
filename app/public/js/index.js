$(document).ready(function() {

  $(".navbtn").click(function() {
    $(this).toggleClass("open");
    $(".nav").toggleClass("open");
  });

  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop(); //获取当前滑动位置
    if (scrollTop > 100) { //滑动到该位置时执行代码
      $(".logo-box").addClass("active");
    } else {
      $(".logo-box").removeClass("active");
    }
  });

  $("#weixin").click(function() {
    $("#outer-w").show();
  });
  $("#bg-black , #close").click(function() {
    $("#outer-w").hide();
  });

});