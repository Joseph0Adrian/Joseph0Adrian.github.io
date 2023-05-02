<template>
  <div class="col-sm-2 vh-100">
      <h3>Menu rutas</h3>
      <button class="btn btn-danger" v-on:click='botonRutaUno()'>Ruta 1</button>
  </div>
</template>

<script>
export default {
  name: 'MenuRutas',
  data(){
    return{
    };
  },
  created(){
  },
  methods:{
    botonRutaUno(){
      this.$root.$emit('mostrarRutaUno','Ruta uno');
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>