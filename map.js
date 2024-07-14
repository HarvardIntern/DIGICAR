var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=99446c586a174ce29291d944db9e2088', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);