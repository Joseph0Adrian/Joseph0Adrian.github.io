<template>
    <form class="pokemon-formulario" on:submit={handleSubmit}>
        <input
            class="pokemon-input"
            type="text"
            name="pokemon"
            v-model="nombrePokemon"
            placeholder="Ingresa número o nombre de primera generación)"
            autocomplete="off"
        />
        <br>
        <br>
        <input
            type="submit"
            class="pokemon-boton"
            value=""
            v-on:click="search"
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
        search (e) {
            e.preventDefault()
            const nombrePokemon = this.nombrePokemon
            const pokemonIdNombre = window.isNaN(parseInt(nombrePokemon)) ? 
            nombrePokemon.toLowerCase() : nombrePokemon
            this.$emit('submit', pokemonIdNombre)
        }
    }
}
</script>
