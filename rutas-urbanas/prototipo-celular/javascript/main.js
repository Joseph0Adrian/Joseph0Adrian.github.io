// inicializa Leaflet
var map = L.map('map').setView([18.893920, -96.929300], 13);

// add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// muestra la barra de escala en la esquina inferior izquierda
L.control.scale({ imperial: true, metric: true }).addTo(map);