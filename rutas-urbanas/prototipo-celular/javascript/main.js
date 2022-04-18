// inicializa Leaflet
var map = L.map('map', {
    center: [18.893920, -96.929300],
    zoom: 14,
    zoomControl: false
});

// add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// muestra la barra de escala en la esquina inferior izquierda
L.control.scale({ imperial: true, metric: true }).addTo(map);