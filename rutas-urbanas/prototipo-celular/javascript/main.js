/* Abre cuando hacen click en el boton */
function abrirMenuRutas() {
    // document.getElementById("myNav").style.width = "100%";
    document.getElementById("menuRutas").style.height = "100%";
}

/* Se cierra nav */  
function cerrarMenuRutas() {
    // document.getElementById("myNav").style.width = "0%";
    document.getElementById("menuRutas").style.height = "0%";
} 

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