<template>
  <div class="hello">
    {{ msg }}

    <div>
      <h1 v-if="sifeiNombre">SifeiPro</h1>
      <h1 v-else>Sifei Click</h1>
      <h2 v-show="sifeiNombre">Don sifei 70</h2>
    </div>

    <div v-if="true">
      elementos del div 1
    </div>

    <div v-else-if="false">
      elementos del div 2
    </div>

    <div v-else>
      elementos del div 2
    </div>



    <div class="container">
      <div class="row">
        <div class="col-6">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input :type="tipo" :class="formClass" id="exampleInputEmail1" aria-describedby="emailHelp" @focus="valida" v-model="inputValue">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <button class="btn btn-primary" @click="saludar">Enviar</button>
            {{inputValue}}
          </form>
        </div>
      </div>

      <div class="row">
        <table class="table">
          <tr v-for="empleado in empleados" :key="empleado.id">
          <td>{{ empleado.id }}</td>
          <td>{{ empleado.name }}</td>
          <td>{{ empleado.email }}</td>
        </tr>
        </table>
      </div>

      <div>
        el total de frutas es {{total}}
      </div>


    </div>





  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      num1: 10,
      num2: 20,
      sifeiNombre: false,
      tipo: 'number',
      formClass : 'form-control',
      inputValue : 100,
      empleados: [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 3, name: 'Mike Johnson', email: 'mike@example.com' },
        { id: 4, name: 'Emily Brown', email: 'emily@example.com' },
      ],
      frutas: ['manzana', 'naranja', 'pera', 'manzana']
    }
  },
  methods : {
    saludar(){
      alert('saludar');
    },
    valida(){
      console.log('realziar validaciones');
    }
  },
  created(){
    //alert('en el created');
    //todo el codigo que deseo hacer
  },
  mounted(){
    //alert('en el mounted');
  },
  watch: {
    inputValue(newVal, oldVal){
      alert(newVal);
      alert(oldVal);
    }
  },
  computed: {
    total: function(){
      return this.frutas.length;
    }
  }
}
</script>