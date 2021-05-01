(function(){
    // variables
    var lista=document.getElementById("lista"),
        tareaInput=document.getElementById("tareaInput"),
        btnNuevaTarea=document.getElementById("btn-agregar");

        // funciones
        var agregarTarea=function(){
            var tarea=tareaInput.value,
                nuevaTarea=document.createElement("li"),
                enlace=document.createElement("a"),
                contenido=document.createTextNode(tarea);
            
            if (tarea==="") {
                tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
                tareaInput.className="error";
                return false;
            }

            // agregamos el contenido al enlace
            enlace.appendChild(contenido);
            // establecemos atributo href
            enlace.setAttribute("href", "#");
            // agregamos a --> li
            nuevaTarea.appendChild(enlace);
            // agregamos li a lista
            lista.appendChild(nuevaTarea);

            tareaInput.value="";

            for (var index = 0; index <= lista.children.length-1; index++) {
                lista.children[index].addEventListener("click", function () {
                    this.parentNode.removeChild(this);
                });
            }
        };

        var comprobarInput=function(){
            tareaInput.className="";
            tareaInput.setAttribute("placeholder", "Agrega tu tarea");
        };
        var eliminarTarea=function(){
            this.parentNode.removeChild(this);
        };

        // eventos

        // agregar tarea
        btnNuevaTarea.addEventListener("click", agregarTarea);

        // comprobar input
        tareaInput.addEventListener("click", comprobarInput);

        // borrando elementos de la lista
        for (var index = 0; index <= lista.children.length-1; index++) {
            lista.children[index].addEventListener("click", eliminarTarea);
        }

}());