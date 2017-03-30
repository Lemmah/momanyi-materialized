(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.button-collapse').sideNav({
      menuWidth: 275, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );

    $('.parallax').parallax();
    $(document).ready(function(){
      $('.carousel').carousel();
    });
    $(document).ready(function(){
    $('.target').pushpin({
      top: 0,
      bottom: 1000,
      offset: 0
    });
   /* var options = [
      {selector: '#icon-section', offset: 600, callback: function(el) {
        Materialize.toast("Thanks for viewing my viewing my skills.", 1500 );
      } },
      {selector: '#achievements-section', offset: 600, callback: function(el) {
        Materialize.toast("Hope you liked my achievements, can't wait to hear from you.", 1500 );
      } },
      {selector: '#contact-section', offset: 300, callback: function(el) {
        Materialize.toast("Hope we'll soon get connected.", 1500 );
      } }
    ];
    Materialize.scrollFire(options);
  });
  */
  //  This is to reveal the main body after complete loading.
  function revealMainBody(){
  var loaderSection = document.getElementById("loader-section");
  var hide = document.createAttribute("hidden");
  loaderSection.setAttributeNode(hide);
  document.getElementById("main-section").removeAttribute("hidden");
  document.querySelector('#images_display').click();
  document.querySelector('#achievements_display').click();
  }
  var interval = setInterval(function() {
    if(document.readyState === 'complete') {
        clearInterval(interval);
        revealMainBody();
    }
  }, 100);
  }); // end of document ready
})(jQuery); // end of jQuery name space
