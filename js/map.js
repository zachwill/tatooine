var map = new L.Map('map', {
  center: new L.LatLng(33.7426, 9.2615),
  layers: new L.TileLayer('https://tiles.mapbox.com/v3/zachwill.tunisia/{z}/{x}/{y}.png'),
  minZoom: 6,
  maxZoom: 12,
  zoom: 8
});

var StarWars = L.Icon.extend({
  iconUrl: '/img/rebel.png',
  shadowUrl: '/img/shadow.png',
  iconSize: new L.Point(27, 37),
  shadowSize: new L.Point(47, 36),
  iconAnchor: new L.Point(14, 36)
});

var rebel = new StarWars(),
    empire = new StarWars('/img/empire.png');

var markers = [
  {
   latlng: new L.LatLng(33.740833, 10.734951),
   location: "Obi Wan Kenobi House",
   icon: rebel
  },
  {
    latlng: new L.LatLng(33.831411, 10.747936),
    location: "Toshi Station",
    icon: rebel
  },
  {
    latlng: new L.LatLng(33.842921, 7.779071),
    location: "Lars House",
    icon: rebel
  },
  {
    latlng: new L.LatLng(33.994296, 7.842677),
    location: "Mos Espa",
    icon: empire
  },
  {
    latlng: new L.LatLng(34.015353, 7.911444),
    location: "Sith Infiltrator",
    icon: empire
  },
  {
    latlng: new L.LatLng(34.033572, 8.281771),
    location: "Canyon",
    icon: rebel
  },
  {
    latlng: new L.LatLng(32.788361, 10.514989),
    location: "Tataouine",
    icon: rebel
  },
  {
    latlng: new L.LatLng(33.347272, 10.492051),
    location: "Anakin Skywalker House",
    icon: empire
  },
  {
    latlng: new L.LatLng(33.54253, 9.967341),
    location: "Lars Homestead Exterior",
    icon: rebel
  }
];


for (var i = 0; i < markers.length; i++) {
  (function(){
    var location = markers[i];
    map.addLayer(new L.Marker(location.latlng, {
      icon: location.icon
    }))
  })();
};
