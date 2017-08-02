$(function(){
  menu();
  hoverInput();
  modal();
  smoothScroll(800);
});

function modal(){
  $(".open-modal").click(function(){
    $(".modal").addClass("show");

    var idModal = $(this).parent().parent().attr("id")+"-m";

    setTimeout(function(){
      $(".modal-wrapper").addClass("show");
    }, 300);

    $("#"+idModal).siblings().removeClass("show");

    setTimeout(function(){
      $("#"+idModal).addClass("show");
    }, 500);
  });

  $(".close-modal").click(function(){
    closeModal();
  })

}

function closeModal(){
  setTimeout(function(){
    $(".modal-services").removeClass("show");
  }, 200);
  setTimeout(function(){
    $(".modal-wrapper").removeClass("show");
  }, 300);
  setTimeout(function(){
    $(".modal").removeClass("show");
  }, 600);
}

function smoothScroll (duration) {
 $('a[href^="#"]').on('click', function(event) {

     var target = $( $(this).attr('href') );

     if( target.length ) {
         event.preventDefault();
         $('html, body').animate({
             scrollTop: target.offset().top
         }, duration);
     }
 });
}


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

function hoverInput(){
  $(".form-wrapper form input, .form-wrapper form textarea").click(function(){
    $(this).parent().addClass("active");
      $(this).parent().siblings().removeClass("active");
  });
}

function menu()
{
  var t = 0, s=0, e = 0, m=0, cl=0, ct=0;


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
    }

    var numbersTop = $(".numbers-section").offset().top;
    if(wTop  > numbersTop - 150 && wTop + 500 < numbersTop + $(".numbers-section").height()){
      if(t==0){
        Countdown(0);
      }
      t++;
      $(".numbers-content").addClass("show");
    }

    var teamTop = $(".team-section").offset().top;
    var teamCTop = $(".team-content").offset().top;
    if(wTop > teamTop - 150 && wTop + 300 < teamTop + $(".team-section").height()){
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

    var mapTop = $(".map-section").offset().top;

    if(wTop + 200 > mapTop && wTop + 200 < mapTop + $(".map-section").height()){
      if(m==0){
        $("#map").addClass("show");
      }
      m++;
    }



    var clientTop = $(".clients-section").offset().top;

    if(wTop + 100 > clientTop && wTop + 100 < clientTop + $(".clients-section").height()){
      if(cl==0){
        $(".clients-wrapper h1, .clients-wrapper h3").addClass("show");
         $(".client-content i").addClass("show");
         $(".client").each(function( index ) {
           setTimeout(function(){
             $(".client").eq(index).addClass("show");
           }, index*300);
         });
      }
      cl++;
    }





    var conctactTop = $(".contact-section").offset().top;

    if(wTop + 100 > conctactTop && wTop + 100 < conctactTop + $(".contact-section").height()){
      if(ct==0){
        $(".contact-wrapper").addClass("show");
      }
      ct++;
    }


  });
}
