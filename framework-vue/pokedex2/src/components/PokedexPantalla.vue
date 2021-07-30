<template>
    <div class="pokedex-pantalla">
        <div class="pokemon-info">
            <img
                class="pokemon-img"
                v-bind:src="imageurl + pokemon.id + '.png'"
                v-bind:alt="pokemon.name" />
            <h2 class="pokemon-name">{{pokemon.name}}</h2>
            <ul>
                <li>height: {{pokemon.height}}</li>
                <li>weight: {{pokemon.weight}}</li>
                <Stat
                    v-bind:item= "item"
                    v-for= "item in pokemon.stats"
                    v-bind:key= "item.stat.name"
                />
                <br>
                type
                <Type
                    v-bind:item= "item"
                    v-for= "item in pokemon.types"
                    v-bind:key= "item.slot"
                />
                <br>
                abilities
                <Abilities
                    v-bind:item= "item"
                    v-for= "item in pokemon.abilities"
                    v-bind:key= "item.ability"
                />
            </ul>
        </div>
    </div>
</template>

<script>
import Stat from './Stat.vue'
import Type from './Type.vue'
import Abilities from './Abilities'
export default {
    name: 'PokedexPantalla',
    components: {
        Stat, Type, Abilities
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