window.onload=inicio;

const NOMBRE="joseph"

function inicio() {
    document.querySelector("body").insertAdjacentHTML("beforeend",
    `
    <input type="text" id="primerNombre" name="primerNombre"/>
    <button class="boton" id="boton">Botón</button>
    <div class="caja1"></div>
    <div class="caja2"></div>
    `);

    document.querySelector("button").onclick=accion1;
}

function accion1() {
    let primerNombre = document.querySelector("#primerNombre").value;
    
    if (primerNombre == NOMBRE) {
        primerNombre = formatearNombre(primerNombre);
        document.querySelector(".caja1").innerHTML=`Hola ${primerNombre}
        <button id="iraweb">Ir a la Web</button>`;
        document.querySelector("#iraweb").onclick=irAWeb;
        // <button> <a href="https://joseph0adrian.github.io/portafolio-dark-mode/" target="_blank">Ir al sitio</a> </button>`;
    } else {
        document.querySelector(".caja1").innerHTML="";
        document.querySelector("#primerNombre").value="";
        document.querySelector("#primerNombre").focus();
    }
}

function formatearNombre(nombre) {
    let subcadenaSoloPrimeraLetraNombre = nombre.substring(0, 1);
    let subcadenaSinPrimeraLetraNombre = nombre.substring(1);

    let subcadenaMayuscula = subcadenaSoloPrimeraLetraNombre.toUpperCase();
    let subcadenaMinuscula = subcadenaSinPrimeraLetraNombre.toLowerCase();

    let cadenaFormateada = subcadenaMayuscula.concat('',subcadenaMinuscula);

    return cadenaFormateada;

/*     document.querySelector(".caja2").innerHTML=`largo de cadena: ${largoCadena}, 
    subcadena sin primera letra: ${subcadenaSinPrimeraLetraNombre}, 
    subcadena solo primer nombre: ${subcadenaSoloPrimeraLetraNombre},
    subcadena a minusculas: ${subcadenaMinuscula},
    subcadena a mayusculas. ${subcadenaMayuscula}`; */
}

function irAWeb() {
    location.href="https://joseph0adrian.github.io/portafolio-dark-mode/";
}