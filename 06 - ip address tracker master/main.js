
let map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoia2lrdXJ5IiwiYSI6ImNrbGlucTVyeDJqaHEydnF0Z2V4a3ljdWsifQ.jj3xo9Kn5JtEavudBzznHg'
}).addTo(map);

L.marker([51.505, -0.09], {
    icon: L.icon({
        iconUrl: './images/icon-location.svg',
        iconSize: [46, 56]
    })
}).addTo(map);
