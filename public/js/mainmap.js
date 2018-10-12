const APP_ID = "CHBk4hXeGcpozLkFieGA";
const APP_CODE = "NJEdxjZOHMaQPzBaz-fHBw";

var platform = new H.service.Platform({
  app_id: APP_ID,
  app_code: APP_CODE,
  useCIT: true,
  useHTTPS: true
});

// Obtain the default map types from the platform object
var maptypes = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
  document.getElementById("mapContainer"),
  maptypes.normal.map,
  {
    zoom: 10,
    center: { lng: 45.0455, lat: 41.96 }
  }
);
navigator.geolocation.getCurrentPosition(function(position) {
  map.setCenter({
    lat: position.coords.latitude,
    lng: position.coords.longitude
  });
  map.setZoom(13);
});
let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
let ui = H.ui.UI.createDefault(map, defaultLayers, "ru-RU");
