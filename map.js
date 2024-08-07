var map = L.map('map').setView([44, -85.2], 7);

L.tileLayer('https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=99446c586a174ce29291d944db9e2088', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

marker = L.marker([44, -85.2]).addTo(map).bindPopup(" hi");

document.addEventListener('DOMContentLoaded', function() {
fetch('Info.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Use the data from Info.json
            marker = L.marker([44, -86.2]).addTo(map).bindPopup(data.a);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    });