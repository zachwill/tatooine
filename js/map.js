var map = new L.Map('map', {
  center: new L.LatLng(34.2890, 9.3604),
  layers: new L.TileLayer('https://tiles.mapbox.com/v3/zachwill.tunisia/{z}/{x}/{y}.png'),
  minZoom: 6,
  maxZoom: 12,
  zoom: 7
});
