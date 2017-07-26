$(function(){
  menu();
});

function menu(){
  $("#show-menu").click(function(){
      $(".bar-nav").removeClass("hide");
  });
  $("#close-menu").click(function(){
      $(".bar-nav").addClass("hide");
  });

  $(window).scroll(function(){
    // var articuloTop = $("#pub").offset().top;
    var wTop = $(window).scrollTop();
    if(wTop > $(".header-section").height() - 80){
      $(".bar-top").addClass("active");
    }else{
      $(".bar-top").removeClass("active");
    }
  });
}
