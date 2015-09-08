$(function(){

  /*Form field page*/
  var MaxFields = 9;
  var Wrapper = $('#football-form .time-wrapper');
  var AddButton = $("#football-form .insert-time");
  var RemoveButton = $('#football-form .remove-time');
  var x = 1; //initlal text box count
  
  $(AddButton).click(function(e){ //on add input button click
      e.preventDefault();
      if(x < MaxFields){ //max input box allowed
          x++; //text box increment
          $(Wrapper).append('<div class="row time-row"><div class="time-group col-sm-6"><select class="form-control"  name="dateStart_ff_'+x+'" id="dateStart_ff_'+x+'"><option value="defalut" selected>วันเริ่ม</option><option value="monday">วันจันทร์</option><option value="tuesday">วันอังคาร</option><option value="wednesday">วันพุธ</option><option value="thursday">วันพฤหัสบดี</option><option value="friday">วันศุกร์</option><option value="saturday">วันเสาร์</option><option value="sunday">วันอาทิตย์</option></select><span class="bar"></span></div><div class="time-group col-sm-6"><select class="form-control"  name="dateEnd_ff_'+x+'" id="dateEnd_ff_'+x+'"><option value="defalut" selected>วันสิ้นสุด</option><option value="monday">วันจันทร์</option><option value="tuesday">วันอังคาร</option><option value="wednesday">วันพุธ</option><option value="thursday">วันพฤหัสบดี</option><option value="friday">วันศุกร์</option><option value="saturday">วันเสาร์</option><option value="sunday">วันอาทิตย์</option></select><span class="bar"></span></div><div class="time-group col-xs-4 col-sm-4 col-md-4"><input type="text" id="timestart_ff_'+x+'" name="timestart_ff_'+x+'" placeholder="เวลาเริ่ม" class="form-control inputmaskTime inputRequired"><span class="bar"></span></div><div class="time-group col-xs-4 col-sm-4 col-md-4"><input type="text" id="timeend_ff_'+x+'" name="timeend_ff_'+x+'" placeholder="เวลาสิ้นสุด" class="form-control inputmaskTime inputRequired"><span class="bar"></span></div><div class="time-group col-xs-4 col-sm-4 col-md-4"><div class="input-group"><input type="number" id="price_ff_'+x+'" name="price_ff_'+x+'" placeholder="ราคา" class="form-control inputRequired inputNum"><span class="input-group-addon">บาท</span><span class="bar"></span></div></div><div class="time-group time-increase col-md-offset-8 col-md-4"><a href="#" class="remove-time btn btn-default btn-delete">ลบ</a></div></div>');
      }
  });
  $(Wrapper).on("click",".remove-time", function(e){ //user click on remove text
      e.preventDefault();
      $(this).parent().parent().fadeOut('slow', function() {
        $(this).remove();
      });
      x--;
  })
  /*Edit profile page add_facility*/
  var num = $('#profile-form .checkbox-group').size();
  $('#add_facility').click(function(e) {
    e.preventDefault();
    num++;
    $(this).before('<div class="checkbox-group animated fadeIn" style="opacity: 0;"><input type="checkbox" id="checkiz'+num+'"><label for="checkiz'+num+'"><span class="check"></span><span class="box"></span><div class="form-group"><input type="text" class="form-control" id="text-facility-'+num+'" name="text-facility-'+num+'" /><span class="bar"></span></div></label></div>');
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
      },
      holderPass: "required",
      holderRepass: {
        equalTo: "#holderPass"
      },
    },
    messages:{
      team_ff:{
        rangelength: "ใส่ได้สองหลัก"
      },
      provinceProfile:{
        valueNotEquals: "ต้องเลือกข้อมูล"
      },
      holderPass: "ต้องกรอกข้อมูล",
      holderRepass: {
        equalTo: "รหัสผ่านไม่เหมือนกัน"
      },
    },
    highlight: function(element) {
        $(element).parent('div').addClass('error');
    },
    unhighlight: function(element) {
        $(element).parent('div').removeClass('error');
    }
  });

  /*input mask*/
  $("form input.inputmaskTime").inputmask({
    "mask": "99:99",
    "placeholder": "hh:mm"
  });
});
