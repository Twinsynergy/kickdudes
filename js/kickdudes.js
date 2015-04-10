$(function() {

  //float label
  $('input.floatlabel').floatlabel();

  //Validate holder form
  $('#holder_form').validate({
    errorElement: "p",
		errorContainer: $(".error2"),
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
      file_field: "required"
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
      bank_holder: "Please enter your name of bank",
      bank_id_holder: "Please enter your id bank"
    }
  });

});
