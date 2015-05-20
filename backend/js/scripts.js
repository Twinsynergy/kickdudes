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
  var Row = '<div class="row time-row time-minus-row"><div class="time-group col-xs-4 col-sm-4 col-md-4"><input type="text" id="timestart_ff" name="timestart_ff" data-mask="99:99" placeholder="เวลาเริ่ม" class="form-control inputRequired"></div><div class="time-group col-xs-4 col-sm-4 col-md-4"><input type="text" id="timeend_ff" name="timeend_ff" data-mask="99:99" placeholder="เวลาสิ้นสุด" class="form-control inputRequired"></div><div class="time-group col-xs-4 col-sm-4 col-md-4"><input type="number" placeholder="ราคา" id="price_ff" name="price_ff" class="form-control inputRequired"></div><a href="javascript:void(0)" class="action-time-group remove-time"><i class="mdi mdi-minus-circle"></i></a></div>'
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
  /*add_facility*/
  var num = $('#profiles-form .checkbox-group').size();
  $('#add_facility').click(function(e) {
    e.preventDefault();
    num++;
    $(this).before('<div class="checkbox-group animated fadeIn" style="opacity: 0;"><input type="checkbox" id="checkiz'+num+'"><label for="checkiz'+num+'"><span class="check"></span><span class="box"></span><div class="form-group"><input type="text" class="form-control" id="text-facility-'+num+'" name="text-facility-'+num+'" /><span class="bar"></span></div></label></div>');
  });

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
  var errorText = "ต้องกรอกข้อมูล";
  var numText = "ใส่ได้แค่ตัวเลข";
  var emailText = "ใส่อีเมลให้ถูกต้อง"
  // alias required to cRequired with new message
  $.validator.addMethod("cRequired", $.validator.methods.required,
   errorText);
  $.validator.addMethod("cDigits", $.validator.methods.digits,
   numText);
  $.validator.addMethod("cEmail", $.validator.methods.email,
   emailText);
  //--------------------------------------------------------------
  $.validator.addClassRules({
    inputRequired:{
      cRequired: true,
    },
    inputNum:{
      cDigits: true,
    },
    inputEmail:{
      cEmail: true
    }
  });
  // Add method validate longitude and latitude
  $.validator.addMethod("geoLatLog", function(value, element) {
    return this.optional(element) || /^(-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}),{1}(-?([1]?[1-7][1-9]|[1]?[1-8][0]|[1-9]?[0-9])\.{1}\d{1,6})/.test(value);
  }, "Latitude and Longitude are not correctly typed");
  $.validator.addMethod("valueNotEquals", function(value, element, arg){
    return arg != value;
  }, "Value must not equal arg.");
  //--------------------------------------------------------------
  $('form').validate({
    errorClass: "error-block help-block",
    errorElement: "span",
    rules:{
      team_ff:{
        rangelength: [1, 2],
      },
      provinceProfile:{
        valueNotEquals: "default"
      }
    },
    messages:{
      team_ff:{
        rangelength: "ใส่ได้สองหลัก"
      },
      provinceProfile:{
        valueNotEquals: "ต้องเลือกข้อมูล"
      }
    },
    highlight: function(element) {
        $(element).parent('div').addClass('error');
    },
    unhighlight: function(element) {
        $(element).parent('div').removeClass('error');
    }
  });

  // Find latitude and longitude by masker on google map
  $("#geocomplete").geocomplete({
    map: ".map_canvas",
    details: "form ",
    markerOptions: {
      draggable: true
    }  
  });
  $("#geocomplete").bind("geocode:dragged", function(event, latLng){
    $("input[name=latitudeFootball]").val(latLng.lat());
    $("input[name=longitudeFootball]").val(latLng.lng());
    $("#resetGeo").show();
  });
  $("#resetGeo").click(function(){
    $("#geocomplete").geocomplete("resetMarker");
    $("#resetGeo").hide();
    return false;
  });
  $("#findGeo").click(function(){
    $("#geocomplete").trigger("geocode");
  }).click();

});
