<template>
    <div class="container mt-5">
        <div class="row">
            <h3 v-if="data2.estatus == 'Success'">El cfdi está emitido correctamente</h3>
            <table v-if="data2.estatus == 'Error'" class="table">
                <thead>
                    <tr>
                        <th scope="col">clave</th>
                        <th scope="col">Error</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(error,indice) in data2.errores" :key="indice">
                        <td>{{  Object.keys(error)[0] }}</td>
                        <td>{{  error[Object.keys(error)[0]] }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data2:{
            type: Object
        }
    },
    data() {
        return {
        };
    },
    methods: {
    },
    watch:{
        data2(newVal, oldVal){
            console.log('esto es lo que recibes en el hijo');
            console.log(newVal);
        }
    }
};
</script>