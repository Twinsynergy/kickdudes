$(function() {

  //Click open signup player
  $('.signup-btn-email').click(function(){
    $('.signupform-container').addClass("signupform-formstate");
  });

  //Input upload
  $(document).on('change', '.btn-file :file', function() {
    var input = $(this),
        numFiles = input.get(0).files ? input.get(0).files.length : 1,
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [numFiles, label]);
  });

  $(document).ready( function() {
      $('.btn-file :file').on('fileselect', function(event, numFiles, label) {

          var input = $(this).parents('.input-group').find(':text'),
              log = numFiles > 1 ? numFiles + ' files selected' : label;

          if( input.length ) {
              input.val(log);
          } else {
              if( log ) alert(log);
          }

      });
  });

  //Validate holder form
  $('#player_form').validate({
    errorElement: "em",
    rules:{
      name_player: "required",
      lastname_player: "required",
      email_player: {
        required: true,
        email: true
      },
      password_player: "required",
      repassword_player: {
        equalTo: "#password_player"
      },
      phone_player: {
        required: true,
        number: true
      }
    },
    messages: {
      name_player: "ต้องกรอกข้อมูล",
      lastname_player: "ต้องกรอกข้อมูล",
      email_player:{
        required : "ต้องกรอกข้อมูล",
        email: "กรอกอีมลไม่ถูกต้อง"
      },
      password_player: "ต้องกรอกข้อมูล",
      repassword_player: {
        equalTo: "รหัสผ่านไม่เหมือนกัน"
      },
      phone_player: {
        required: "ต้องกรอกข้อมูล",
        number: "ใส่ได้เฉพาะตัวเลข"
      }
    }
  });

  $('#holder_form').validate({
    errorElement: "em",
    rules: {
      name_holder: "required",
      lastname_holder: "required",
      email_holder: {
        required: true,
        email: true
      },
      phone_holder: {
        required: true,
        number: true
      },
      bank_holder: "required",
      bank_id_holder:{
        required: true,
        number: true
      },
      name_field: "required",
      phone_field: "required",
    },
    messages: {
      name_holder: "ต้องกรอกข้อมูล",
      lastname_holder: "ต้องกรอกข้อมูล",
      email_holder:{
        required : "ต้องกรอกข้อมูล",
        email: "กรอกอีมลไม่ถูกต้อง"
      },
      phone_holder: {
        required: "ต้องกรอกข้อมูล",
        number: "ใส่ได้เฉพาะตัวเลข"
      },
      bank_holder: "ต้องเลือกชื่อธนาคาร",
      bank_id_holder: "กรอกเลขที่บัญชี",
      name_field: "ต้องกรอกชื่อสนามฟุตบอลที่เป็นเจ้าของอยู่",
      phone_field: "ต้องกรอกข้อมูล"
    }
  });

});
