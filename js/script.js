function myMap() {
var mapOptions = {
    center: new google.maps.LatLng(52.137049, 20.153432),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
