<template>
  <div>
    {{ msg }}
    <div class="moeda">
      {{ 1.000 | TrataValor }}
    </div>
    <app-component02 testeProps="Importanto o component02 de dentro do component Moeda"></app-component02>
  </div> 
   
</template>

<script>

import Component02 from './Component02'

export default {
  name: 'Moeda',

  components: {
    "app-component02": Component02,
  },

  props: [
    'titulos'    
    ],
  
  data () {
    return {
      msg: 'Component Moeda'
    }
  },
  filters: {
      TrataValor: function(valor) {
        return ('R$'+ (valor).toFixed(2).replace('.',','))
      }
    }
}
</script>

<style scoped>
  .moeda {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 50px;
    font-weight: bold;
  }
</style>
