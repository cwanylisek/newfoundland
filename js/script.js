function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(52.406374, 16.925168100000064),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
