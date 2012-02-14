var map = new L.Map('map', {
  center: new L.LatLng(33.7426, 9.2615),
  layers: new L.TileLayer('https://tiles.mapbox.com/v3/zachwill.tunisia/{z}/{x}/{y}.png'),
  minZoom: 6,
  maxZoom: 12,
  zoom: 8
});

var Icon = L.Icon.extend({
  iconUrl: '/img/rebel.png',
  shadowUrl: '/img/shadow.png',
  iconSize: new L.Point(27, 37),
  shadowSize: new L.Point(47, 36),
  iconAnchor: new L.Point(14, 36)
});

var rebel = new Icon(),
    empire = new Icon('/img/empire.png');

var obi = new L.Marker(new L.LatLng(33.740833, 10.734951), {icon: rebel}),
    toshi = new L.Marker(new L.LatLng(33.831411, 10.747936), {icon: rebel}),
    lars = new L.Marker(new L.LatLng(33.842921, 7.779071), {icon: rebel}),
    mos = new L.Marker(new L.LatLng(33.994296, 7.842677), {icon: empire}),
    sith = new L.Marker(new L.LatLng(34.015353, 7.911444), {icon: empire}),
    canyon = new L.Marker(new L.LatLng(34.033572, 8.281771), {icon: rebel}),
    tataouine = new L.Marker(new L.LatLng(32.788361, 10.514989), {icon: rebel}),
    skywalker = new L.Marker(new L.LatLng(33.347272, 10.492051), {icon: empire}),
    homestead = new L.Marker(new L.LatLng(33.54253, 9.967341), {icon: rebel});

var group = new L.LayerGroup([
  obi, toshi, lars, mos, sith, canyon, tataouine, skywalker, homestead
]);

map.addLayer(group)
