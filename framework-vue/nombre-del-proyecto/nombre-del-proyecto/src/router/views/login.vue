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
                  <label for="rfc">RFC</label>
                  <input type="text" class="form-control" id="rfc" v-model="username" placeholder="Introduce tu rfc">
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" class="form-control" id="password" v-model="password" placeholder="Enter password">
                </div>
                <button class="btn btn-primary" @click="loginn">Enviar</button>
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
      
     ...mapActions(['login']),

      loginn() {
        const { username, password } = this;
        this.login({username,password});
  
        // Reiniciar los campos del formulario
        this.username = '';
        this.password = '';
      }
    }
  };
  </script>
  
  <style>
  .container {
    max-width: 600px;
  }
  </style>