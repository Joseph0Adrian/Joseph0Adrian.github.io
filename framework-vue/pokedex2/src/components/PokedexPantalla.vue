<template>
    <div class="pokedex-pantalla container">
        <div class="pokemon-info row">
            <div class="card col" style="width: 18rem;">
                <img
                class="pokemon-img card-img-top"
                v-bind:src="imageurl + pokemon.id + '.png'"
                v-bind:alt="pokemon.name" />
                <div class="card-body">
                    <h5 class=" pokemon-name card-title">{{pokemon.name}}</h5>
                    <ul class="card-text">
                        Stat
                        <li>height: {{pokemon.height}}</li>
                        <li>weight: {{pokemon.weight}}</li>
                        <Stat
                            v-bind:item= "item"
                            v-for= "item in pokemon.stats"
                            v-bind:key= "item.stat.name"
                        />
                        <br>
                        Type
                        <Type
                            v-bind:item= "item"
                            v-for= "item in pokemon.types"
                            v-bind:key= "item.slot"
                        />
                        <br>
                        Abilities
                        <Abilities
                            v-bind:item= "item"
                            v-for= "item in pokemon.abilities"
                            v-bind:key= "item.ability"
                        />
                    </ul>
                </div>
            </div>
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

<style scoped>
    .card-body{
        text-align: left
    }

    .pokemon-name{
        text-align: center
    }
</style>