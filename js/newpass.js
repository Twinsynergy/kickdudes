$(function() {
  $('#resetpass_form').validate({
      errorElement: "em",
      rules: {
        newPass: {
        	required: true,
      		minlength: 6
        },
        newPassCheck: {
          equalTo: "#newPass"
        }
      }
    });

});
