const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");



mapboxgl.accessToken =
  "pk.eyJ1Ijoic2l3aW5sbyIsImEiOiJjano4a2xxc3AxN3BhM2tvZTlocGpmNWhlIn0.j7x-VBjsj3qWZZnMGouNkA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10"
});

const marker = buildMarker("restaurants", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
//const marker = buildMarker("", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);
//console.log(marker)



// const markerDomEl = document.createElement("div");
// markerDomEl.style.height = "39px";
// markerDomEl.style.width = "32px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);
