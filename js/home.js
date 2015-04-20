$(function() {

  //Validate holder form
  $('#contact-form').validate({
    errorElement: "em",
    rules: {
      name_contact: "required",
      email_contact: {
        required: true,
        email: true
      },
      message_contact: "required"
    },
    messages: {
      name_contact: "ต้องกรอกข้อมูล",
      email_contact:{
        required : "ต้องกรอกข้อมูล",
        email: "กรอกอีมลไม่ถูกต้อง"
      },
      message_contact: "ต้องกรอกข้อมูล"
    }
  });

  //Change text
  var quotes = $("#about h1");
  var quoteIndex = -1;
  function showNextQuote() {
      ++quoteIndex;
      quotes.eq(quoteIndex % quotes.length)
          .fadeIn(1000)
          .delay(1000)
          .fadeOut(1000, showNextQuote);
  }
  showNextQuote();

});
