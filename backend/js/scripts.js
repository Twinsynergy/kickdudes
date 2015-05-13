$(function(){
  var ink, d, x, y;
    $(".ripplelink").click(function(e){
      if($(this).find(".ink").length === 0){
        $(this).prepend("<span class='ink'></span>");
      }

      ink = $(this).find(".ink");
      ink.removeClass("animate");

      if(!ink.height() && !ink.width()){
        d = Math.max($(this).outerWidth(), $(this).outerHeight());
        ink.css({height: d, width: d});
      }

      x = e.pageX - $(this).offset().left - ink.width()/2;
      y = e.pageY - $(this).offset().top - ink.height()/2;

      ink.css({top: y+'px', left: x+'px'}).addClass("animate");
    });

  $('.menu-toggle').click(function(){
    $('body').toggleClass('menubar-pin menubar-visible');
  });
  $('#menubar').hover(function(){
    $('body').toggleClass('menubar-visible')
  });

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  $('[data-toggle="tooltip"]').tooltip();

  /*Form*/
  var MaxFields = 10;
  var Wrapper = $('#fields-form .time-wraper');
  var AddButton = $("#fields-form .insert-time");
  var RemoveButton = $('#fields-form .remove-time');
  var Row = '<div class="row time-row time-minus-row"><div class="time-group col-xs-4 col-sm-4 col-md-4"><input type="text" data-mask="99:99" placeholder="เวลาเริ่ม" class="form-control"></div><div class="time-group col-xs-4 col-sm-4 col-md-4"><input type="text" data-mask="99:99" placeholder="เวลาสิ้นสุด" class="form-control"></div><div class="time-group col-xs-4 col-sm-4 col-md-4"><input type="number" placeholder="ราคา" class="form-control"></div><div class="action-time-group"><a href="javascript:void(0)" class="remove-time"><i class="mdi mdi-minus-circle ripplelink"></i></a></div></div>'

  var x = 1; //initlal text box count
  $(AddButton).click(function(e){ //on add input button click
      e.preventDefault();
      if(x < MaxFields){ //max input box allowed
          x++; //text box increment
          $(Wrapper).append(Row); //add input box
      }
  });

  //ยังเขียนวิธีลบไม่ได้
  // $(Wrapper).on("click",".remove-time", function(e){ //user click on remove text
  //     e.preventDefault();
  //     $(this).parent('div').remove();
  //     x--;
  // })

  /*Field*/
  $('.add-cover a').bind('click', function() {
    fadeOut();
  });
  function fadeOut(){
    setTimeout(function(){
      $('.add-cover').fadeOut();
    }, 1000);
  }

});
