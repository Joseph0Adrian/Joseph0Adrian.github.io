<template>
    <div class="pokedex-screen">
        <img
            v-if="error"
            src='../assets/error.gif'
            alt="Hubo un error buscando tu pokemon"
            class="pokedex-no-screen"
        />
        <img
            v-else-if="loading"
            src='../assets/loading.gif'
            alt="Estamos buscando tu pokemon"
            class="pokedex-no-screen"
        />
        <div class="pokemon-info" v-else>
            <h2 class="pokemon-name">{{pokemon.name}}</h2>
            <img
                class="pokemon-img"
                v-bind:src="pokemon.sprites.front_default"
                v-bind:alt="pokemon.name" />
            <ul class="pokemon-stats">
                <Stat
                    v-bind:item="item"
                    v-for="item in pokemon.stats"
                    v-bind:key="item.stat.name"
                />
            </ul>
        </div>
    </div>
</template>

<script>
import Stat from './Stat.vue'
export default {
    name: 'PokedexScreen',
    components: {
        Stat
    },
    props: {
    // PropTypes on Vue
        pokemon: {
            type: Object,
            default: () => {}
        },
        error: {
            type: Boolean,
            default: () => false
        },
        loading: {
            type: Boolean,
            default: () => false
        }
    }
}
</script>

<style scoped>
/* Pokedex Screen */
.pokedex-screen-container {
  background: #b0b0b0;
  border-radius: 10px 10px 0 0;
  border: 1px solid black;
  margin: 20px 0;
  height: 50%;
  padding: .8rem;
}
.pokedex-screen {
  background: white;
  border: 2px solid black;
  border-radius: 10px;
  height: 100%;
  display: flex;
  align-items: center;
}
.pokemon-info{
  padding: 0.8rem;
  flex-grow: 1;
  display: grid;
  grid-template-columns: 40% calc(60% - 0.8rem);
  grid-template-rows: 35px 1fr;
  grid-column-gap: 0.8rem;
  grid-row-gap: 0.8rem;
  grid-template-areas:
    "title title"
    "img   stats";
}
.pokemon-name{
  text-align: center;
  text-transform: capitalize;
  grid-area: title;
  font-weight: 700;
}
.pokemon-img{
  width: 100%;
  transform: scale(1.2);
  align-self: center;
  grid-area: img;
}
.pokemon-stats{
  grid-area: stats;
}
.pokemon-stat{
  font-size: 0.9rem;
}
.stat-name{
  text-transform: capitalize;
}
</style>