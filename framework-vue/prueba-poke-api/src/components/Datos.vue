<template>
    <div class="contenedor">
        <div class="pokemon-imagen-contenedor tarjeta">
            <img
                class="pokemon-imagen"
                v-bind:src="imagenurl + pokemon.id + '.png'"
                v-bind:alt="pokemon.name"
            />
        </div>
        <div class="pokemon-informacion-general tarjeta">
            <h3>Name : {{pokemon.name}}</h3>
            <p>height : {{ formato(pokemon.height) }} m</p>
            <p>weight : {{ formato(pokemon.weight) }} kg</p>
        </div>
        <div class="pokemon-estadisticas tarjeta">
            <h3>Stats</h3>
            <Estadisticas
                v-bind:item="item"
                v-for= "item in pokemon.stats"
                v-bind:key= "item.stat.name"
            />
        </div>
        <div class="pokemon-tipos tarjeta">
            <h3>Type</h3>
            <Tipos
                v-bind:item="item"
                v-for= "item in pokemon.types"
                v-bind:key= "item.slot"
            />
        </div>
        <div class="pokemon-abilidades tarjeta">
            <h3>Abilities</h3>
            <Abilidades
                v-bind:item="item"
                v-for= "item in pokemon.abilities"
                v-bind:key= "item.ability"
            />
        </div>
    </div>    
</template>

<script>
import Estadisticas from './Estadisticas.vue'
import Tipos from './Tipos.vue'
import Abilidades from './Abilidades.vue'

export default {
    name: 'Datos',
    components: {
        Estadisticas,
        Tipos,
        Abilidades,
    },
    data () {
        return {
            imagenurl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
        }
    },
    props: {
        pokemon: {
            type: Object,
            default: () => {}
        },
    },
    methods: {
        formato (valor) {
            var temporal = valor*0.1
            return temporal.toFixed(2).toString()
        }
    }
}
</script>

<style scoped>
.contenedor {
    width: 90%;
	max-width: 1000px;
	margin: 20px auto;
	display: grid;
	grid-gap: 20px;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: repeat(3, auto);
	grid-template-areas:
		"pokemon-imagen-contenedor      pokemon-estadisticas"
		"pokemon-imagen-contenedor      pokemon-tipos"
		"pokemon-informacion-general    pokemon-abilidades";
}

.contenedor .pokemon-imagen-contenedor {
    grid-area: pokemon-imagen-contenedor;
    background: #9c9c9c;
}

.contenedor .pokemon-informacion-general {
    grid-area: pokemon-informacion-general;
    background: #5d9b9b;
}

.contenedor .pokemon-estadisticas {
    grid-area: pokemon-estadisticas;
    background: #db5856;
}

.contenedor .pokemon-tipos {
    grid-area: pokemon-tipos;
    background: #77dd77;
}

.contenedor .pokemon-abilidades {
    grid-area: pokemon-abilidades;
    background: #efa94a;
}

.tarjeta {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
}

.tarjeta:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

@media screen and (max-width: 768px) {
    .contenedor .pokemon-imagen-contenedor img{
        width: 70%;
    }

    .contenedor {
        grid-template-areas:
        "pokemon-imagen-contenedor      pokemon-imagen-contenedor"
        "pokemon-informacion-general    pokemon-informacion-general"
        "pokemon-estadisticas           pokemon-estadisticas"
        "pokemon-tipos                  pokemon-tipos"
        "pokemon-abilidades             pokemon-abilidades";
    }
}
</style>