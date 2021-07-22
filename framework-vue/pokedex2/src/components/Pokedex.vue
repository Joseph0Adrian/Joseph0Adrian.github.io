<template>
    <div class="pokedex">
        <div class="pokedex-formulario-contenedor">
            <pokedex-formulario
            v-on:submit="handleSubmit($event)"
            />
        </div>
        <div class="pokedex-pantalla-contenedor">
            <pokedex-pantalla
            v-bind:pokemon="pokemon"
            />
        </div>
    </div>
</template>

<script>
import PokedexPantalla from './PokedexPantalla.vue'
import PokedexFormulario from './PokedexFormulario.vue'

export default {
    name: 'Pokedex',
    components:{
        PokedexPantalla,
        PokedexFormulario
    },
    data () {
        return {
            pokemon: null,
            // characteristicPokemon: null,
            pokemonId: Math.floor(Math.random() * 806 + 1).toString()
        }
    },
    created () {
        this.getPokemon()
        // this.getCharacteristicPokemon()
    },
    methods:{
        getPokemon () {
            fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemonId}`)
            .then(res => res.json())
            .then(data => {
                this.pokemon = data
            })
            .catch(err => {
                console.log(err)

            })
        },
        handleSubmit (pokemonId) {
            if (pokemonId !== '') {
                this.pokemonId = pokemonId
                this.getPokemon()
                // this.getCharacteristicPokemon()
                return
            }
        },
/*         getCharacteristicPokemon (){
            fetch(`https://pokeapi.co/api/v2/characteristic/${this.pokemonId}`)
            .then(res => res.json())
            .then(data => {
                characteristicPokemon = data
            })
            .catch(err => {
                console:log(err)
            })
        } */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>