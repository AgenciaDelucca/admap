/**
 * Created by Ricardo Fiorani on 07/12/2015.
 */
;(function ($) {

    $.fn.renderMapFromAddress = function (address, options) {
        if (typeof google !== 'object' || typeof google.maps !== 'object') {
            console.error('Google Maps API is not loaded');
            return;
        }
        var mergedOptions = $.extend({
            // These are the defaults.
            zoom: 15,
            scrollwheel: false,
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }, options);

        if (this.length > 1) {
            console.error('jQuery selector got more than one element. To render a map the selector must return only one element');
            return;
        }
        address = address || this.data('address');
        var mapContainer = this.get(0);

        map = new google.maps.Map(mapContainer, mergedOptions);
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({'address': address}, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                });
            } else {
                console.log('Address not found : ' + status);
            }
        });
        return this;
    };

}(jQuery));
