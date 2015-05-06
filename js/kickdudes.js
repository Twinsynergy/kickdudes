$(function() {

  document.querySelector( "#hamburger" ).addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });
  $('#hamburger').sidr({
    name: 'sidr-existing-content',
    source: '#main-navbar'
  });
});
