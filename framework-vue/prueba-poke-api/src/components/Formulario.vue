<template>
    <form class="pokemon-formulario" on:submit={manejadorEnvio}>
        <input
            class="pokemon-input"
            type="text"
            name="pokemon"
            v-model="nombrePokemon"
            placeholder="Enter number or name"
            autocomplete="off"
        />
        <br>
        <br>
        <input
            type="submit"
            size="30"
            class="pokemon-boton"
            value="Search"
            v-on:click="buscar"
        />
    </form>
    <br>
</template>

<script>
export default {
    name: 'Datos',
    data () {
        return {
            nombrePokemon:''
        }
    },
    methods: {
        buscar (e) {
            e.preventDefault()
            const nombrePokemon = this.nombrePokemon
            const pokemonIdNombre = window.isNaN(parseInt(nombrePokemon)) ? 
            nombrePokemon.toLowerCase() : nombrePokemon
            this.$emit('submit', pokemonIdNombre)
        },
    }
}
</script>