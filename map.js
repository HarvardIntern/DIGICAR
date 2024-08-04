var map = L.map('map').setView([44, -85.2], 7);

L.tileLayer('https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=99446c586a174ce29291d944db9e2088', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([44, -85.2]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
