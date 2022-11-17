<template>
  <div class="col-sm-2 vh-100">
      <h3>Menu rutas</h3>
      <button class="btn btn-danger" v-on:click='getCoordenadas()'>Rutas</button>
  </div>
</template>

<script>
export default {
  name: 'MenuRutas',
  data(){
    return{
      // coordendas:null,
      msg: null,
      coordenadas:[0,0],
    };
  },
  created(){
    // this.getCoordenadas()
  },
  methods:{
    getCoordenadas(){
      fetch(`http://localhost/rutasUrbanas/api/read.php`).then(res => res.json()).then(data => {
        // this.coordenadas = data;
        this.arrayCoordenadas(data);
        this.msg = this.coordenadas;
        // this.msg = data;
        // console.log(data.body[0].coordenadaX);
      }).catch(err => {
        console.log(err)
      })
    },
    arrayCoordenadas(data){
      this.coordenadas.pop();
      this.coordenadas.pop();
      for (let index = 0; index < data.body.length; index++) {
        this.coordenadas.push(data.body[index].coordenadaX, data.body[index].coordenadaY);
      }
      // console.log(this.coordenadas);
    },
  },
  watch: {
    msg: function() {
      this.$root.$emit('send', this.msg);
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>