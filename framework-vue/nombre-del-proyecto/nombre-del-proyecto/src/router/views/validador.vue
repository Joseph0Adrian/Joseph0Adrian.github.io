<template>
    <div class="container">

        <FormValidador @data="recibirData"/>

        <TableErros :data2="data" />

    </div>
</template>

<script>

import FormValidador from '../../components/FormValidador';
import TableErros from '../../components/TableErros';

  export default {
    components: {
        FormValidador,
        TableErros
    },
    data() {
      return {
        data: {
          type: Object
        }
      };
    },
    methods: {
      recibirData(params){
        this.data = params;
      }
    }
  };
  </script>