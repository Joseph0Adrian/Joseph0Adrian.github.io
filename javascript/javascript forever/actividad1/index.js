window.onload=inicio;

function inicio(){
    document.querySelectorAll(".boton")[0].onclick=accion1;
    document.querySelectorAll(".boton")[1].onclick=accion2;
    document.querySelectorAll(".boton")[2].onclick=accion3;
    document.querySelectorAll(".boton")[3].onclick=accion4;
}

function accion1(){
    document.querySelector(".caja").innerHTML="Hola Mundo";
}

function accion2(){
    document.querySelector(".caja").innerHTML="<img src='pokemon.png'>";
}

function accion3(){
    document.querySelector(".caja").insertAdjacentHTML("beforeend","<button>Botón</button>");
}

function accion4(){
    document.querySelector(".caja").innerHTML="";
}