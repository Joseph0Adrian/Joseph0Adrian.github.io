<template>
  <Prologo/>
  <I/>
  <II/>
</template>

<script>
import Prologo from '@/components/Prologo.vue'
import I from '@/components/I.vue'
import II from '@/components/II.vue'

export default {
  name: 'App',
  components: {
    Prologo,
    I,
    II
  }
} 
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
