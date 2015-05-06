$(function() {

  document.querySelector( "#hamburger" ).addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });
  $('#hamburger1').sidr({
    name: 'sidr-existing-content',
    source: '#main-navbar'
  });
});
