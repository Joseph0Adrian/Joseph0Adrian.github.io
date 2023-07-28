<template>
	<div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h4>Login</h4>
            </div>
            <div class="card-body">
              <form>
                <div class="form-group">
                  <label for="user">Usuario</label>
                  <input type="text" class="form-control" id="user" v-model="username" placeholder="Introduce tu nombre de usuario">
                </div>
                <div class="form-group">
                  <label for="contraseña">Contraseña</label>
                  <input type="password" class="form-control" id="contraseña" 
                  v-model="password" placeholder="Ingresa contraseña">
                </div>
                <button class="btn btn-primary" @click="login">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    ...mapActions(['loginStore']),
  	login() {
      const { username, password } = this;
      this.loginStore({username,password});
      console.log(this.username);
      console.log(this.password);
      // Reiniciar los campos del formulario
      this.username = '';
      this.password = '';
    }
  }
};	
</script>