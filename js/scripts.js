document.querySelector( "#nav-toggle" )
  .addEventListener("click", function(e) {
    this.classList.toggle( "active" );
    e.preventDefault();
  });
