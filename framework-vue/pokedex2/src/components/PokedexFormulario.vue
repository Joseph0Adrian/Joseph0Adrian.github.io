<template>
    <form class="pokemon-formulario" on:submit={handleSubmit}>
        <input
            class="pokemon-input"
            type="text"
            name="pokemon"
            v-model="pokemonName"
            placeholder="Busca tu pokemon"
            autocomplete="off"/>
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
export default{
    name: 'PokedexFormulario',
    data (){
        return{
            pokemonName:''
        }
    },
    methods: {
        search (e) {
            e.preventDefault()
            const pokemonName = this.pokemonName
            const pokemonId = window.isNaN(parseInt(pokemonName)) ? 
            pokemonName.toLowerCase() : pokemonName
            this.$emit('submit', pokemonId)
        }
    }
}
</script>
