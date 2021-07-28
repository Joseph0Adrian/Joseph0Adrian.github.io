<template>
    <div class="pokedex-pantalla">
        <div class="pokemon-info">
            <img
                class="pokemon-img"
                v-bind:src="imageurl + pokemon.id + '.png'"
                v-bind:alt="pokemon.name" />
            <h2 class="pokemon-name">{{pokemon.name}}</h2>
            <ul>
                <li><b>Height: {{pokemon.height}}</b></li>
                <li><b>Weight: {{pokemon.weight}}</b></li>
            </ul>
            <ul class="pokemon-stats">
                <Stat
                    v-bind:item="item"
                    v-for="item in pokemon.stats"
                    v-bind:key= "item.stat.name"
                />
            </ul>
            <ul class="pokemon-type">
                <Type
                    v-bind:item="item"
                    v-for="item in pokemon.types"
                    v-bind:key= "item.slot"
                />
            </ul>
        </div>
    </div>
</template>

<script>
import Stat from './Stat.vue'
import Type from './Type.vue'
export default {
    name: 'PokedexPantalla',
    components: {
        Stat, Type,
    },
    data(){
        return{
            imageurl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
        }
    },
    props: {
    // PropTypes on Vue
        pokemon: {
            type: Object,
            default: () => {}
        },
    },
}
</script>