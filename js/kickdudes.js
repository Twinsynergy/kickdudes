$(function() {
  //
  // document.querySelector( "#hamburger" ).addEventListener( "click", function() {
  //   this.classList.toggle( "active" );
  // });

  $('#main_navbar').clone().attr("id","nav_mobile").appendTo('nav.navbar-fixed-top .container').addClass('cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left');

  var menuLeft = document.getElementById( 'nav_mobile' ),
      showLeft = document.getElementById( 'hamburger' )

  showLeft.onclick = function() {
  	classie.toggle( this, 'active' );
  	classie.toggle( menuLeft, 'cbp-spmenu-open' );
  };


});
