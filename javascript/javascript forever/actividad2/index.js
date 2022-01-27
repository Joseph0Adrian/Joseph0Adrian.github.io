window.onload=inicio;

var imagen, cajaImagen, boton;

function inicio(){
    agregarTresBotones();
}

function agregarTresBotones() {
    document.querySelector("body").insertAdjacentHTML("beforeend",
    `<button class="boton">Botón 1</button>
    <button class="boton">Botón 2</button>
    <button class="boton">Botón 3</button>
    <div id="imagen"><img src="robot.png"></div>`);

    imagen=document.querySelector("img");
    cajaImagen=document.querySelector("#imagen");
    boton=document.querySelectorAll(".boton");

    boton[0].onclick=accion1;
    boton[1].onclick=accion2;
    boton[2].onclick=accion3;
    resaltar();
}

function accion1() {
    imagen.style.backgroundColor="#1162ac";
    cajaImagen.style.borderRadius="70%";
    cajaImagen.style.transform="rotate(10deg)";
    boton[0].style.visibility="hidden";
}

function accion2() {
    if(cajaImagen.style.display=="none"){
        cajaImagen.style.display="block";
        resaltar();
    } else{
        cajaImagen.style.display="none";
        boton[1].style.background=null;
    }
}

function accion3() {
    imagen.style=null;
    cajaImagen.style=null;
    boton[0].style=null;
    boton[1].style=null
    boton[2].style=null
    resaltar();
}

function resaltar() {
    boton[1].style.background="#e44d26";
    boton[1].style.borderColor="#e44d26";
}