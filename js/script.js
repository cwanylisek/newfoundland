//google maps
  function myMap() {
      var mapOptions = {
          center: new google.maps.LatLng(52.406374, 16.925168100000064),
          zoom: 13,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      }
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
};


//scroll navbar
$(document).scroll(function(){
   if ($(document).scrollTop() > 50) {
     $("#mainNav").addClass("navbar_fixed");
   }
   else {
     $("#mainNav").removeClass("navbar_fixed");
   }
 });

 // Smooth scrolling using jQuery easing
 $('a[href*="#"]:not([href="#"])').click(function() {
   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
     if (target.length) {
       $('html, body').animate({
         scrollTop: (target.offset().top - 109)
       }, 1000);
       return false;
     }
   }
 });
