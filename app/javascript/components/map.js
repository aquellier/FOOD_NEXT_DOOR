import GMaps from 'gmaps/gmaps.js';
const styles = [];

const initMap = function(mapElement) {
  if (mapElement) { // don't try to build a map if there's no div#map to inject in
    const map = new GMaps({ el: '#map', lat: 0, lng: 0 } );
    const markers = JSON.parse(mapElement.dataset.markers);
    map.addMarkers(markers);
    if (markers.length === 0) {
      map.setZoom(2);
    } else if (markers.length === 1) {
      map.setCenter(markers[0].lat, markers[0].lng);
      map.setZoom(14);
    } else {
      map.fitLatLngBounds(markers);
    }
    map.addStyle({
      styles: styles,
      mapTypeId: 'map_style'
    });
    map.setStyle('map_style');
  }
}

    const contentString = "Hello World";
    const uluru = {lat: -25.363, lng: 131.044};
    const infoWindow = new google.maps.InfoWindow({
      content: contentString
    });
    const marker = new google.maps.Marker({
      position: uluru,
      setMap: map,
      title: 'Uluru (Ayers Rock)'
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });

var infowindow = new google.maps.InfoWindow({
  content:"Hello World!"
  });


// pass html.erb


export default initMap ;

import { autocomplete } from '../components/autocomplete';

// [...]
autocomplete();

