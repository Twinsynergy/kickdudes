$(function(){

    //click circle fade
    var ink, d, x, y;
    $(".ripplelink").click(function(e){
      if($(this).find(".ink").length === 0){
        $(this).prepend("<span class='ink'></span>");
      }

      ink = $(this).find(".ink");
      ink.removeClass("animate_ink");

      if(!ink.height() && !ink.width()){
        d = Math.max($(this).outerWidth(), $(this).outerHeight());
        ink.css({height: d, width: d});
      }

      x = e.pageX - $(this).offset().left - ink.width()/2;
      y = e.pageY - $(this).offset().top - ink.height()/2;

      ink.css({top: y+'px', left: x+'px'}).addClass("animate_ink");
    });

  $('.menu-toggle').click(function(){
    $('body').toggleClass('menubar-pin menubar-visible');
  });
  $('#menubar').hover(function(){
    $('body').toggleClass('menubar-visible')
  });

  //tooltip bootstrap
  $('[data-toggle="tooltip"]').tooltip();
  //tab bootstrap
  $("a[data-tab-destination]").on('click', function() {
    var tab = $(this).attr('data-tab-destination');
    $("#"+tab).click();
  });

  /*Alert*/
  setTimeout(function() {
        $("#toast-container").slideUp(400, function(){
          $(this).remove();
        })
    }, 4000);
  $('#toast-container').click(function() {
    $(this).slideUp(400, function() {
      $(this).remove();
    });;
  });

  var offcanvasbody = $( window ).height() - 80;

  $('.intercom').click(function(e) {
    e.preventDefault();
    $('#offcanvas-help').addClass('active').css('transform','translate(-320px, 0px)');
    $('.offcanvas-body').css('height',offcanvasbody )
  });
  $('.close-intercom').click(function(e) {
    e.preventDefault();
    $('#offcanvas-help').removeClass('active').css('transform','translate(0px, 0px)');
  });


});
