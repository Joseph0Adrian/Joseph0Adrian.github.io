<template>
    <div class="home">
        <form @submit.prevent="SearchPokemon()" class="search-box">
            <input type="text" placeholder="¿Que pokemon buscas?" v-model="search" />
            <input type="submit" value="Search"/>
        </form>
        <hr>
        <div class="card">
            <div>
                <h3>{{pokemon.name}}</h3>
                <img :src="pokemon.sprites.front_default"/>
                <p>Height : {{pokemon.height}}</p>
                <p>Weight : {{pokemon.weight}}</p>
            </div>
            <hr>
            <div>
                <p>Stats:</p>
                <div v-for="(stat, i) of pokemon.stats" :key="i">
                    <p>{{stat.stat.name}} : {{stat.base_stat}}</p>
                </div>
            </div>
            <hr>
            <div>
                <p>Type:</p>
                <div v-for="(type, i) of pokemon.types" :key="i">
                    <p>{{type.type.name}}</p>
                </div>
            </div>
            <hr>
            <div>
                <p>Ability:</p>
                <div v-for="(ability, i) of pokemon.abilities" :key="i">
                    <p>{{ability.ability.name}}</p>
                </div>
            </div>
        </div>
        <hr>         
    </div>
</template>

<script>
import { ref, reactive, toRefs, onBeforeMount} from 'vue';

export default {
    setup() {

        const search = ref("1");

        const pokemon = reactive({
            pokemon: []
        });
            
        const SearchPokemon = () => {
            if (search.value != "") {
                fetch(`https://pokeapi.co/api/v2/pokemon/${search.value}`)
                .then(response => response.json())
                .then(data => {
                    pokemon.pokemon = data;
                    search.value = "";
                });
            }
        }

        onBeforeMount(() => {
            SearchPokemon()
        })

        return {
            ...toRefs(pokemon),
            SearchPokemon, 
            search
        };
    },
}
</script>

<style scoped lang="scss">
.card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.7);
    transition: 0.3s;
    border-radius: 5px;
    background: #db5856;
    color: #000;

    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.7);
    }
}
</style>