window.onload=inicio;

function inicio() {
    document.querySelector("body").insertAdjacentHTML("beforeend",
    `
    <input id="primerValor" name="primerValor" readonly/> +
    <input id="segundoValor" name="segundoValor" readonly/> =
    <input type="text" id="resultado" name="resultado"/>
    <button class="boton" id="boton">Comprobar</button>
    <div class="caja1"></div>
    `);

    asignarValores();
    document.querySelector("button").onclick = comprobar;
}

function comprobar() {
    let resultado = parseInt(document.querySelector("#resultado").value,10);
    let resultadoParcial = parseInt(document.querySelector("#primerValor").value,10);
    let resultadoReal = resultadoParcial + parseInt(document.querySelector("#segundoValor").value,10);

    if (resultado == resultadoReal) {
        document.querySelector(".caja1").insertAdjacentHTML("beforeend",`<button>Correcto</button>`);
        asignarValores();
    } else {
        document.querySelector(".caja1").insertAdjacentHTML("beforeend",
        `${document.querySelector("#primerValor").value} + ${document.querySelector("#segundoValor").value} = ${resultadoReal}`);
        asignarValores();
    }
}

function asignarValores() {
    let operacionActual = true;

    if (operacionActual==true) {
        document.querySelector("body").innerHTML=`
        <input id="primerValor" name="primerValor" readonly/> -
        <input id="segundoValor" name="segundoValor" readonly/> =
        <input type="text" id="resultado" name="resultado"/>
        <button class="boton" id="boton">Comprobar</button>
        `;
        let primerValor = Math.floor(Math.random()*10);
        document.querySelector("#primerValor").value=`${primerValor}`;
        let segundoValor = Math.floor(Math.random()*10);
        document.querySelector("#segundoValor").value=`${segundoValor}`;
    } else {
        document.querySelector("body").innerHTML=`
        <input id="primerValor" name="primerValor" readonly/> +
        <input id="segundoValor" name="segundoValor" readonly/> =
        <input type="text" id="resultado" name="resultado"/>
        <button class="boton" id="boton">Comprobar</button>
        `;
        let primerValor = Math.floor(Math.random()*10);
        document.querySelector("#primerValor").value=`${primerValor}`;
        let segundoValor = Math.floor(Math.random()*10);
        document.querySelector("#segundoValor").value=`${segundoValor}`;
    }

    document.querySelector("#resultado").value="";
    document.querySelector("#resultado").focus();
}