# admap
AD Map is a simple  jQuery plugin to render a map from an Address.

# How to use:

You must require the js from google maps (http://maps.googleapis.com/maps/api/js?key=you_key) and the admap.js script.

## Simple usage :
```html
<div id="map" data-address="1313 Disneyland Dr, Anaheim, CA 92802, United States"></div>
```
```js
$(document).ready(function () {
    $('#map').renderMapFromAddress();
}
```

## You can set the Google Maps options (and the address) like this :
```html
<div id="map"></div>
```
```js
$(document).ready(function () {
    var options = {
        zoom: 15,
        address: "1313 Disneyland Dr, Anaheim, CA 92802, United States",
        scrollwheel: false,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        styles: [{
            "featureType": "administrative.land_parcel",
            "elementType": "all",
            "stylers": [{"visibility": "off"}]
        }, {
            "featureType": "landscape.man_made",
            "elementType": "all",
            "stylers": [{"visibility": "off"}]
        }, {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [{"visibility": "off"}]
        }, {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [{"visibility": "simplified"}, {"lightness": 20}]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{"hue": "#f49935"}]
        }, {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [{"visibility": "simplified"}]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{"hue": "#fad959"}]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels",
            "stylers": [{"visibility": "off"}]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{"visibility": "simplified"}]
        }, {
            "featureType": "road.local",
            "elementType": "labels",
            "stylers": [{"visibility": "simplified"}]
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{"visibility": "off"}]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{"hue": "#a1cdfc"}, {"saturation": 30}, {"lightness": 49}]
        }]
    };
    $('#map').renderMapFromAddress(options);
```
