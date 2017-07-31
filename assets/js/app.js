$(function(){
  menu();
});

function Countdown(start)
{
  $('.count').each(function () {
    $(this).prop('Counter',start).animate({
      Counter: $(this).text()
    }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
}

function menu()
{
  var t = 0, s=0, e = 0, m=0, cl=0;


  $("#show-menu").click(function(){
      $(".bar-nav").removeClass("hide");
      $(".menu-items li").each(function( index ) {
        setTimeout(function(){
          $(".menu-items li").eq(index).addClass("show");
        }, index*300);
      });

  });
  $("#close-menu").click(function(){
      $(".bar-nav").addClass("hide");
      setTimeout(function() {
        $(".menu-items li").removeClass("show");
      }, 300);
  });



  setTimeout(function(){
    $(".slogan").addClass("show");
  },800)

  $(window).scroll(function(){

    var wTop = $(window).scrollTop();
    if(wTop > $(".header-section").height() - 80){
      $(".bar-top").addClass("active");
      $(".slogan").removeClass("show");
    }else{
      $(".bar-top").removeClass("active");
      setTimeout(function(){
        $(".slogan").addClass("show");
      },300)
    }



    var aboutTop = $(".about-section").offset().top;
    if(wTop + $(window).height() > aboutTop + 300 && wTop + 200 < aboutTop + $(".about-section").height()){
      $(".about-content").addClass("show");

    }else{
      $(".about-content").removeClass("show");
    }


    var servicesTop = $(".services-section").offset().top;

    if(wTop + 300 > servicesTop && wTop + 300 < servicesTop + $(".services-section").height()){
      if(s == 0){
        $(".image-service").each(function( index ) {
          setTimeout(function(){
            $(".image-service").eq(index).addClass("show");
          }, index*200);
        });
      }
      s++;
    }else{
      $(".image-service").removeClass("show");
      s=0;
    }

    var numbersTop = $(".numbers-section").offset().top;
    if(wTop  > numbersTop - 150 && wTop + 500 < numbersTop + $(".numbers-section").height()){
      if(t==0){
        Countdown(0);
        $("body, .numbers-wrapper, .bar-top").addClass("active-number");
      }
      t++;
      $(".numbers-content").addClass("show");
    }else{
      t=0;
      $("body, .numbers-wrapper, .bar-top").removeClass("active-number");
      $(".numbers-content").removeClass("show");
    }

    var teamTop = $(".team-section").offset().top;
    var teamCTop = $(".team-content").offset().top;
    if(wTop > teamTop - 150 && wTop + 300 < teamTop + $(".team-section").height()){
      console.log(wTop + 600+"    == " + teamTop);
      $(".team-wrapper h1, .team-wrapper h3").addClass("show")
      if(wTop + $(window).height() > teamCTop + 300){
        if(e==0){
          $(".team").each(function( index ) {
            setTimeout(function(){
              $(".team").eq(index).addClass("show");
            }, index*400);
          });
        }
        e++;
      }
    }
    else{
      e=0;
      $(".team").removeClass("show");
      $(".team-wrapper h1, .team-wrapper h3").removeClass("show")
    }

    var mapTop = $(".map-section").offset().top;

    if(wTop + 100 > mapTop && wTop + 420 < mapTop + $(".map-section").height()){
      if(m==0){
        $("body, .bar-top").addClass("active-map");
        setTimeout(function(){
          $("#map").addClass("show");
        },600);
      }
      m++;
    }else{
      m=0;
      setTimeout(function(){
        $("#map").removeClass("show");
      },100);
        $("body, .bar-top").removeClass("active-map");
    }




    var clientTop = $(".clients-section").offset().top;

    if(wTop + 100 > clientTop && wTop + 100 < clientTop + $(".clients-section").height()){
      if(cl==0){
        $(".clients-wrapper h1, .clients-wrapper h3").addClass("show");
         $(".client-content i").addClass("show");
         $(".client").each(function( index ) {
           setTimeout(function(){
             $(".client").eq(index).addClass("show");
           }, index*420);
         });
      }
      cl++;
    }else{
      cl=0;
      $(".client").removeClass("show");
      $(".clients-wrapper h1, .clients-wrapper h3").removeClass("show");
      $(".client-content i").removeClass("show");

    }



  });
}
