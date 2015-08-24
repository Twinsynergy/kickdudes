$(function() {
  //
  // document.querySelector( "#hamburger" ).addEventListener( "click", function() {
  //   this.classList.toggle( "active" );
  // });

  $('#main_navbar').clone().attr("id","nav_mobile").addClass('cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left').appendTo('nav.navbar-fixed-top .container');

  var menuLeft = document.getElementById( 'nav_mobile' ),
      showLeft = document.getElementById( 'hamburger' )

  showLeft.onclick = function() {
  	classie.toggle( this, 'active' );
  	classie.toggle( menuLeft, 'cbp-spmenu-open' );
  };

  setTimeout(function(){
    $('#magic_arrow').show();
  }, 87000);

  //disable video on mobile
  var isMobile = window.matchMedia("only screen and (max-width: 760px)");
  if (isMobile.matches) {
    $('video#bgvid').remove();
  }

});
