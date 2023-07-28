<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Validador</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/validador" class="nav-link">Validador</router-link>
          </li>
          <li class="nav-item">
            <button class="nav-link" @click="cerrarSesion">Cerrar Sesión</button>
          </li>
        </ul>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
  name: 'App',
  methods: {
    ...mapActions(['cierraSesion']),
    cerrarSesion(){
      this.cierraSesion();
    }
  }
}
</script>