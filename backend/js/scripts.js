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

  //counter nubmer animate
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  //tooltip bootstrap
  $('[data-toggle="tooltip"]').tooltip();

  /*Form*/
  var MaxFields = 10;
  var Wrapper = $('#football-form .time-wraper');
  var AddButton = $("#football-form .insert-time");
  var RemoveButton = $('#football-form .remove-time');
  var Row = '<div class="row time-row time-minus-row"><div class="time-group col-xs-4 col-sm-4 col-md-4"><input type="text" id="timestart_ff" name="timestart_ff" data-mask="99:99" placeholder="เวลาเริ่ม" class="form-control"></div><div class="time-group col-xs-4 col-sm-4 col-md-4"><input type="text" id="timeend_ff" name="timeend_ff" data-mask="99:99" placeholder="เวลาสิ้นสุด" class="form-control"></div><div class="time-group col-xs-4 col-sm-4 col-md-4"><input type="number" placeholder="ราคา" id="price_ff" name="price_ff" class="form-control"></div><a href="javascript:void(0)" class="action-time-group remove-time"><i class="mdi mdi-minus-circle"></i></a></div>'
  var x = 1; //initlal text box count
  $(AddButton).click(function(e){ //on add input button click
      e.preventDefault();
      if(x < MaxFields){ //max input box allowed
          x++; //text box increment
          $(Wrapper).append(Row); //add input box
      }
  });
  $(Wrapper).on("click",".remove-time", function(e){ //user click on remove text
      e.preventDefault();
      $(this).parent().remove();
      x--;
  })

  /*Field*/
  $('.add-cover a').bind('click', function() {
    fadeOut();
  });
  function fadeOut(){
    setTimeout(function(){
      $('.add-cover').fadeOut();
    }, 1000);
  }

  /*Alert*/
  setTimeout(function() {
        $("#toast-container").slideUp(400, function(){
          $(this).remove();
        })
    }, 3000);
  $('#toast-container').click(function() {
    $(this).slideUp(400, function() {
      $(this).remove();
    });;
  });

  /*Validate
  * ff == football fields
  */
  var errorText = "กรอกข้อมูล";
  var numText = "ใส่ได้เฉพาะตัวเลข"

  $('#football-form').validate({
    errorClass: "help-block",
    errorElement: "span",
    rules:{
      name_ff: "required",
      detail_ff: "required",
      weight_ff: "required",
      timestart_ff: "required",
      timeend_ff: "required",
      team_ff:{
        required: true,
        number: true
      },
      price_ff:{
        required: true,
        number: true
      } 
    },
    messages:{
      name_ff: errorText,
      detail_ff: errorText,
      weight_ff: errorText,
      timestart_ff: errorText,
      timeend_ff: errorText,
      team_ff:{
        required: errorText,
        number: numText
      },
      price_ff:{
        required: errorText,
        number: numText
      }
    },
    highlight: function(element) {
        $(element).parent('div').addClass('error');
    },
    unhighlight: function(element) {
        $(element).parent('div').removeClass('error');
    }
  });
  

});
