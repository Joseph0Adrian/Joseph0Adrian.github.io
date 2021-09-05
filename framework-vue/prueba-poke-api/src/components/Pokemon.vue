<template>
  <div class="pokemon">
    <formulario
      v-on:submit="handleSubmit($event)"
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
    this.getPokemon()
  },
  methods: {
    getPokemon () {
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemonIdNombre}`)
      .then(res => res.json())
      .then(data => {
        this.pokemon = data
      })
      .catch(err => {
        console.log(err)
      })
    },
    handleSubmit (pokemonIdNombre) {
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