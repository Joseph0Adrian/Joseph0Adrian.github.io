/*
    Esto es un prototipo
*/

var marcadores = new Array();
var paradasRutaBuenaVista;
var rutaBuenaVista;
var rutaLaEstacion;
var grupoCapas = new L.layerGroup();

function ocultarBotonBorrarRuta() {
    document.getElementById('borrarRuta').style.display='none';
}

function mostarBotonBorrarRuta() {
    document.getElementById('borrarRuta').style.display='inline';
}

/* Abre cuando hacen click en el boton */
function openNav() {
    // document.getElementById("myNav").style.width = "100%";
    document.getElementById("myNav").style.height = "100%";
}
  
/* Se cierra nav */  
function closeNav() {
    // document.getElementById("myNav").style.width = "0%";
    document.getElementById("myNav").style.height = "0%";
} 

// inicializa Leaflet
var map = L.map('map').setView([18.893920, -96.929300], 13);

// add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// muestra la barra de escala en la esquina inferior izquierda
L.control.scale({ imperial: true, metric: true }).addTo(map);

function vaciarArray() {
    marcadores.splice(0, marcadores.length);
}

function quitarParadasAutobus() {
    for (let i = 0; i < marcadores.length; i++) {
        map.removeLayer(marcadores[i]);
    }
}

function agregandoParadasAutobus(arrayConParadas) {
    for (let i = 0; i < arrayConParadas.length; i++) {
        let marcadorParada = new L.marker(
            [arrayConParadas[i].lat,
            arrayConParadas[i].lon]);
        marcadores.push(marcadorParada);
        map.addLayer(marcadores[i]);
    }
    // return marcadores;
}

function mostrarRutaBuenaVista() {
    paradasRutaBuenaVista = [
        { "lat": "18.88756787404418", "lon": "-96.926639657467604" },
        { "lat": "18.890274055302143", "lon": "-96.928918277844787" },
        { "lat": "18.888630867004395", "lon": "-96.927008628845215" },
        { "lat": "18.891276279464364", "lon": "-96.93009459413588" },
        { "lat": "18.892142213881016", "lon": "-96.92926587536931" },
        { "lat": "18.891007471829653", "lon": "-96.927861822769046" },
        { "lat": "18.885676665231586", "lon": "-96.921964148059487" },
        { "lat": "18.88370624743402", "lon": "-96.92104808986187" },
        { "lat": "18.894344139844179", "lon": "-96.929835928604007" },
        { "lat": "18.869962692260742", "lon": "-96.916923522949219" },
        { "lat": "18.865370750427246", "lon": "-96.911516189575195" },
        { "lat": "18.879874711856246", "lon": "-96.920801410451531" },
        { "lat": "18.873181343078613", "lon": "-96.913790702819824" },
        { "lat": "18.879510937258601", "lon": "-96.920345602557063" },
        { "lat": "18.87530330568552", "lon": "-96.916042333468795" },
        { "lat": "18.882767977192998", "lon": "-96.922872914001346" },
        { "lat": "18.868353366851807", "lon": "-96.912846565246582" },
        { "lat": "18.866872787475586", "lon": "-96.914262771606445" },
        { "lat": "18.871421813964844", "lon": "-96.915464401245117" },
        { "lat": "18.866829872131348", "lon": "-96.911494731903076" },
        { "lat": "18.865370750427246", "lon": "-96.91288948059082" },
        { "lat": "18.869919776916504", "lon": "-96.914112567901611" },
        { "lat": "18.868417739868164", "lon": "-96.915550231933594" },
        { "lat": "18.874855041503906", "lon": "-96.915786266326904" }
    ];
    let coordenadasRutaBuenaVista = [
        [18.893920, -96.929300],
        [18.893610, -96.929690],
        [18.892930, -96.930360],
        [18.892360, -96.929560],
        [18.89178, -96.92885],
        [18.89178, -96.92885],
        [18.89127, -96.92814],
        [18.89061, -96.92748],
        [18.89029, -96.92714],
        [18.88996, -96.9268],
        [18.8894, -96.92624],
        [18.88913, -96.92592],
        [18.88899, -96.92576],
        [18.88891, -96.92567],
        [18.88871, -96.92545],
        [18.8884, -96.9251],
        [18.88767, -96.92417],
        [18.88684, -96.9233],
        [18.88676, -96.92322],
        [18.8858, -96.92211],
        [18.88553, -96.92179],
        [18.88459, -96.92152],
        [18.88432, -96.92142],
        [18.88428, -96.9214],
        [18.88423, -96.92138],
        [18.8841, -96.9213],
        [18.88356, -96.92091],
        [18.88271, -96.92029],
        [18.88217, -96.91975],
        [18.88165, -96.92015],
        [18.88164, -96.92016],
        [18.88105, -96.92065],
        [18.88045, -96.92121],
        [18.88038, -96.92129],
        [18.88031, -96.92123],
        [18.87997, -96.92093],
        [18.87972, -96.92069],
        [18.87909, -96.92009],
        [18.87823, -96.91931],
        [18.87803, -96.91912],
        [18.87773, -96.91884],
        [18.87743, -96.91856],
        [18.87742, -96.91856],
        [18.87717, -96.91828],
        [18.87693, -96.91801],
        [18.87666, -96.91771],
        [18.87642, -96.91744],
        [18.87612, -96.91711],
        [18.87553, -96.91645],
        [18.8747, -96.91557],
        [18.87463, -96.91549],
        [18.87383, -96.9146],
        [18.87365, -96.91439],
        [18.87356, -96.91429],
        [18.87337, -96.91404],
        [18.87315, -96.91375],
        [18.873, -96.9139],
        [18.8726, -96.91428],
        [18.87246, -96.91441],
        [18.87207, -96.91479],
        [18.87137, -96.91548],
        [18.8706, -96.91481],
        [18.86985, -96.91412],
        [18.86943, -96.91376],
        [18.86909, -96.91346],
        [18.86834, -96.9128],
        [18.86757, -96.91211],
        [18.86681, -96.91145],
        [18.86605, -96.91075],
        [18.86533, -96.91144],
        [18.86472, -96.91217],
        [18.86475, -96.91224],
        [18.86478, -96.91228],
        [18.86479, -96.91229],
        [18.86482, -96.91232],
        [18.8649, -96.9124],
        [18.86506, -96.91254],
        [18.86537, -96.91284],
        [18.86612, -96.91353],
        [18.86639, -96.91378],
        [18.8668, -96.91415],
        [18.86686, -96.9142],
        [18.86762, -96.91486],
        [18.86838, -96.91555],
        [18.86838, -96.91555],
        [18.86914, -96.91621],
        [18.86935, -96.91639],
        [18.86981, -96.91684],
        [18.86984, -96.91686],
        [18.86986, -96.91688],
        [18.86988, -96.91688],
        [18.86989, -96.91688],
        [18.8699, -96.91688],
        [18.86991, -96.91688],
        [18.86994, -96.91685],
        [18.87063, -96.91618],
        [18.87097, -96.91586],
        [18.87137, -96.91548],
        [18.87207, -96.91479],
        [18.87246, -96.91441],
        [18.8726, -96.91428],
        [18.873, -96.9139],
        [18.87315, -96.91375],
        [18.87322, -96.9137],
        [18.87328, -96.91379],
        [18.87347, -96.91403],
        [18.87378, -96.91441],
        [18.87437, -96.91505],
        [18.87461, -96.91531],
        [18.87471, -96.91542],
        [18.87477, -96.9155],
        [18.87562, -96.91642],
        [18.87618, -96.91704],
        [18.87651, -96.9174],
        [18.87673, -96.91765],
        [18.87724, -96.91822],
        [18.87748, -96.91849],
        [18.87802, -96.91901],
        [18.87828, -96.91925],
        [18.87843, -96.91937],
        [18.87916, -96.92002],
        [18.87988, -96.9207],
        [18.88037, -96.92114],
        [18.88045, -96.92121],
        [18.88088, -96.92161],
        [18.881, -96.92171],
        [18.88131, -96.92195],
        [18.88134, -96.92198],
        [18.88141, -96.92203],
        [18.88158, -96.92212],
        [18.88159, -96.92213],
        [18.88222, -96.92248],
        [18.88291, -96.92294],
        [18.88318, -96.92313],
        [18.88343, -96.92332],
        [18.88366, -96.92351],
        [18.88385, -96.92363],
        [18.88392, -96.92367],
        [18.88399, -96.92372],
        [18.88428, -96.92388],
        [18.88456, -96.92405],
        [18.88458, -96.92406],
        [18.88459, -96.92407],
        [18.88459, -96.92408],
        [18.8846, -96.92409],
        [18.88461, -96.92413],
        [18.88476, -96.92424],
        [18.88524, -96.92456],
        [18.88541, -96.92465],
        [18.88619, -96.92515],
        [18.88625, -96.92518],
        [18.88631, -96.92524],
        [18.88664, -96.92559],
        [18.88757, -96.92669],
        [18.88798, -96.92629],
        [18.88856, -96.92695],
        [18.8888, -96.92724],
        [18.88913, -96.92767],
        [18.88973, -96.92833],
        [18.88973, -96.92833],
        [18.89033, -96.92902],
        [18.89097, -96.92971],
        [18.89158, -96.93038],
        [18.8919, -96.9308],
        [18.8921, -96.93102],
        [18.89275, -96.93177],
        [18.89321, -96.93136],
        [18.89352, -96.9311],
        [18.89422, -96.93052],
        [18.89462, -96.93019],
        [18.89394, -96.92928]
    ];
    mostarBotonBorrarRuta();
    closeNav();
    // rutaBuenaVista = L.polyline(coordenadasRutaBuenaVista, { color: 'red' }).addTo(map);
    // se traza la ruta de autobus
    rutaBuenaVista = L.polyline(coordenadasRutaBuenaVista, { color: 'red' });
    // se agrega polilinia de ruta a layerGroup grupoCapas
    grupoCapas = L.layerGroup([rutaBuenaVista]);
    // se muestra en el mapa
    grupoCapas.addTo(map);
    // zoom a la ruta
    map.fitBounds(rutaBuenaVista.getBounds());
    quitarParadasAutobus();
    vaciarArray();
    agregandoParadasAutobus(paradasRutaBuenaVista);
    // map.removeLayer(grupoCapas);
    map.removeLayer(rutaLaEstacion);
    // grupoCapas.removeLayer(rutaLaEstacion);
    // layerGroup.removeLayer(marcadores[i]);
}

function mostrarRutaLaEstacion() {
    paradasRutaLaEstacion = [
        { "lat": "18.88401503674686", "lon": "-96.931406278163195" },
        { "lat": "18.874962329864502", "lon": "-96.929390430450439" },
        { "lat": "18.87401819229126", "lon": "-96.930484771728516" },
        { "lat": "18.8721579965204", "lon": "-96.932104071602225" },
        { "lat": "18.874573661014438", "lon": "-96.93515189923346" },
        { "lat": "18.876430252566934", "lon": "-96.938258232548833" },
        { "lat": "18.878158601000905", "lon": "-96.941576544195414" },
        { "lat": "18.893375610932708", "lon": "-96.92935430444777" },
        { "lat": "18.890278330072761", "lon": "-96.933801909908652" },
        { "lat": "18.872569045051932", "lon": "-96.931063793599606" },
        { "lat": "18.892364418134093", "lon": "-96.930866986513138" },
        { "lat": "18.891415670514107", "lon": "-96.931811962276697" },
        { "lat": "18.890117229893804", "lon": "-96.933010909706354" },
        { "lat": "18.888480663299561", "lon": "-96.934454441070557" },
        { "lat": "18.890226949006319", "lon": "-96.931669302284718" },
        { "lat": "18.876163959503174", "lon": "-96.928253173828125" },
        { "lat": "18.873739242553711", "lon": "-96.934089660644531" },
        { "lat": "18.877216307446361", "lon": "-96.927109463140368" },
        { "lat": "18.880644589662552", "lon": "-96.94002446718514" },
        { "lat": "18.883723011240363", "lon": "-96.937883393839002" },
        { "lat": "18.888588789850473", "lon": "-96.935319537296891" }
    ];

    let coordenadasRutaLaEstacion = [
        [18.89356, -96.92974],
        [18.89293, -96.93036],
        [18.8921, -96.93102],
        [18.89172, -96.93141],
        [18.89111, -96.932],
        [18.89043, -96.93264],
        [18.88978, -96.93324],
        [18.88914, -96.93379],
        [18.88824, -96.93456],
        [18.88818, -96.93463],
        [18.88788, -96.93436],
        [18.88759, -96.93409],
        [18.88737, -96.93388],
        [18.88703, -96.93353],
        [18.88685, -96.93336],
        [18.88645, -96.93298],
        [18.88634, -96.93286],
        [18.88623, -96.93275],
        [18.88589, -96.93242],
        [18.8856, -96.93215],
        [18.88556, -96.93214],
        [18.88547, -96.93213],
        [18.88539, -96.93209],
        [18.88469, -96.93171],
        [18.8845, -96.93158],
        [18.88445, -96.93158],
        [18.8844, -96.93157],
        [18.88434, -96.93155],
        [18.88427, -96.9315],
        [18.88361, -96.93117],
        [18.88354, -96.93114],
        [18.8821, -96.93037],
        [18.88162, -96.93007],
        [18.88148, -96.92997],
        [18.88123, -96.92948],
        [18.88096, -96.92894],
        [18.88059, -96.92838],
        [18.88043, -96.92819],
        [18.88039, -96.92814],
        [18.87981, -96.92748],
        [18.87921, -96.92687],
        [18.87879, -96.92644],
        [18.87856, -96.9262],
        [18.8785, -96.92619],
        [18.87845, -96.92617],
        [18.87838, -96.92616],
        [18.87829, -96.92615],
        [18.87824, -96.92615],
        [18.87816, -96.92615],
        [18.87805, -96.92625],
        [18.87732, -96.92692],
        [18.87728, -96.92697],
        [18.87692, -96.92749],
        [18.8767, -96.92773],
        [18.87669, -96.92775],
        [18.87658, -96.92787],
        [18.8761, -96.92826],
        [18.87598, -96.92841],
        [18.87587, -96.92856],
        [18.87545, -96.92896],
        [18.87535, -96.92893],
        [18.87527, -96.92901],
        [18.87491, -96.92941],
        [18.87461, -96.92975],
        [18.87428, -96.93011],
        [18.87398, -96.93049],
        [18.87367, -96.93087],
        [18.87334, -96.93123],
        [18.87321, -96.93136],
        [18.87301, -96.93156],
        [18.87275, -96.9313],
        [18.87262, -96.93117],
        [18.87236, -96.93091],
        [18.87224, -96.93105],
        [18.87211, -96.93121],
        [18.87205, -96.93128],
        [18.87177, -96.93158],
        [18.8723, -96.93244],
        [18.87308, -96.93325],
        [18.87314, -96.93332],
        [18.87376, -96.93417],
        [18.87418, -96.9347],
        [18.87448, -96.93507],
        [18.87467, -96.93529],
        [18.87478, -96.9354],
        [18.87489, -96.93551],
        [18.87501, -96.93563],
        [18.87508, -96.93573],
        [18.87515, -96.93583],
        [18.87524, -96.936],
        [18.87534, -96.9362],
        [18.87551, -96.9365],
        [18.87556, -96.9366],
        [18.87557, -96.93662],
        [18.87598, -96.93745],
        [18.87653, -96.93846],
        [18.87705, -96.93949],
        [18.87756, -96.94049],
        [18.87814, -96.94163],
        [18.87823, -96.9418],
        [18.87835, -96.94174],
        [18.87855, -96.94163],
        [18.87922, -96.94129],
        [18.87941, -96.9412],
        [18.87955, -96.94111],
        [18.87968, -96.94101],
        [18.87969, -96.941],
        [18.87979, -96.9409],
        [18.87996, -96.94069],
        [18.88001, -96.94062],
        [18.88015, -96.94038],
        [18.88019, -96.94032],
        [18.88025, -96.94025],
        [18.88036, -96.94015],
        [18.88044, -96.94009],
        [18.88048, -96.94006],
        [18.88067, -96.93996],
        [18.88073, -96.93992],
        [18.88088, -96.93983],
        [18.88156, -96.93946],
        [18.88182, -96.9393],
        [18.88259, -96.93886],
        [18.88276, -96.93873],
        [18.88281, -96.93868],
        [18.88313, -96.93839],
        [18.88321, -96.93833],
        [18.88326, -96.9383],
        [18.88341, -96.93817],
        [18.8836, -96.93797],
        [18.88367, -96.9379],
        [18.88448, -96.93709],
        [18.88476, -96.93686],
        [18.88486, -96.93677],
        [18.88498, -96.93668],
        [18.8851, -96.93659],
        [18.88529, -96.93649],
        [18.88556, -96.93639],
        [18.88581, -96.9363],
        [18.88661, -96.93598],
        [18.88675, -96.93594],
        [18.88714, -96.9358],
        [18.8872, -96.93579],
        [18.88724, -96.93577],
        [18.88758, -96.93567],
        [18.88805, -96.93551],
        [18.88865, -96.93523],
        [18.8887, -96.93519],
        [18.88896, -96.93499],
        [18.88913, -96.93485],
        [18.88914, -96.93484],
        [18.8893, -96.93471],
        [18.88961, -96.93446],
        [18.89032, -96.93386],
        [18.88978, -96.93324],
        [18.88946, -96.93286],
        [18.88924, -96.93259],
        [18.88988, -96.93203],
        [18.89054, -96.93134],
        [18.89118, -96.93077],
        [18.89158, -96.93038],
        [18.89185, -96.93008],
        [18.89199, -96.92993],
        [18.8925, -96.92943],
        [18.89304, -96.9289],
        [18.89341, -96.9294],
        [18.89361, -96.92969],
        [18.89293, -96.93036],
    ];
    mostarBotonBorrarRuta();
    closeNav();
    // rutaLaEstacion = L.polyline(coordenadasRutaLaEstacion, { color: 'blue' }).addTo(map);
    rutaLaEstacion = L.polyline(coordenadasRutaLaEstacion, { color: 'red' });
    grupoCapas = L.layerGroup([rutaLaEstacion]);
    grupoCapas.addTo(map);
    // zoom a la ruta
    map.fitBounds(rutaLaEstacion.getBounds());
    quitarParadasAutobus();
    vaciarArray();
    agregandoParadasAutobus(paradasRutaLaEstacion);
    map.removeLayer(rutaBuenaVista);
    // layerGroup.removeLayer(marcadores[i]);
}

function borrarRuta() {
    quitarParadasAutobus();
    vaciarArray();
    ocultarBotonBorrarRuta();
    map.removeLayer(grupoCapas);
}