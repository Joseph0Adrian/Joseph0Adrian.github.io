<template>
    <div class="container">
        <div class="row">
            <form>
                <div class="form-group">
                    <label for="nameFile">UUID/Nombre</label>
                    <input placeholder="Introduce el uuid o nombre" type="text" class="form-control" id="nameFile"
                        v-model="nameFile">
                </div>

                <div class="form-group">
                    <label for="inputFile">Subir archivo</label>
                    <input type="text" class="form-control" id="inputFile" v-model="inputFile">
                </div>

                <button class="btn btn-success" @click="validar">Validar</button>
            </form>
        </div>
    </div>
</template>

<script>
import { xmlService } from '../service/xml.service'
export default {
    data() {
        return {
            nameFile: '',
            inputFile: '',
            responseData: {
                type:Array
            }
        };
    },
    methods: {
        validar() {

            if (this.nameFile == '') {
                alert('introduce un nombre');
                return;
            }

            if (this.inputFile == '') {
                alert('introduce un base64');
                return;
            }

            //mandar parametros al service a validar
            xmlService.postValidation(this.nameFile, this.inputFile).then(response => {
                // Maneja la respuesta de la llamada a la API
                console.log(response);
                this.responseData = response;
                this.$emit("data",this.responseData);
            })
                .catch(error => {
                    // Maneja cualquier error que ocurra en la llamada a la API
                    console.error(error);
                });

        }
    }
};
</script>