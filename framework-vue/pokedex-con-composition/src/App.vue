<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Pokemon/>
</template>

<script>
import Pokemon from './components/Pokemon.vue'

export default {
  name: 'App',
  components: {
    Pokemon
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
