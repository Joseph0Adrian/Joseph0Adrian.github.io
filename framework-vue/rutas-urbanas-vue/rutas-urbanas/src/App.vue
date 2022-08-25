<template>
  <div id="app" class="container">
    <div class="row">
        <RutasUrbanas/>
        <MenuRutas/>
    </div>
  </div>
</template>

<script>
import RutasUrbanas from './components/RutasUrbanas.vue'
import MenuRutas from './components/MenuRutas.vue'

export default {
  name: 'App',
  components: {
    RutasUrbanas,
    MenuRutas
  }
}
</script>

<style>
#app {
  height: 400px; 
  width: 120%;
}
</style>
