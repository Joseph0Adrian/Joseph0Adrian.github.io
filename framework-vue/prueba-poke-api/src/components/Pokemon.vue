<template>
  <div class="pokemon">
    <formulario
      v-on:submit="manejadorEnvio($event)"
    />
    <datos
      v-bind:pokemon="pokemon"
    />
  </div>
</template>

<script>
import Datos from './Datos.vue'
import Formulario from './Formulario.vue'

export default {
  name: 'Pokemon',
  components: {
    Datos,
    Formulario
  },
  data () {
    return {
      pokemon: null,
      pokemonIdNombre: Math.floor(Math.random() * 150 + 1).toString()
    }
  },
  created () {
    // al iniciar muestra un pokemon aleatorio
    this.getPokemon()
  },
  methods: {
    // obtiene información del pokemon
    getPokemon () {
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemonIdNombre}`)
      .then(res => res.json())
      .then(data => {
        this.pokemon = data
      })
      .catch(err => {
        alert.log(err)
      })
    },
    manejadorEnvio (pokemonIdNombre) {
      if (pokemonIdNombre !== '') {
        this.pokemonIdNombre = pokemonIdNombre
        this.getPokemon()
        return
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>