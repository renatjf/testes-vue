<template>
  <div>
    {{ msg }}
    <div class="moeda">
      {{ 1.000 | TrataValor }}
    </div>
    <br>
    <ul>
      <li v-for="(listaValor, index) in listaValores" :key="index">
        {{ listaValor.titulo }} - {{ listaValor.valor | TrataValor }}
      </li>
      <p class="total">Total: (resultado methods) {{ totalValorMethods() | TrataValor }} </p>
      <p class="total">Total: (resultado computed) {{ totalValorComputed | TrataValor }} </p>
    </ul>
    <br>
    <app-component02 testeProps="Importanto o component02 de dentro do component Moeda"></app-component02>
  </div> 
   
</template>

<script>
import Component02 from "./Component02";

export default {
  name: "Moeda",

  components: {
    "app-component02": Component02
  },

  props: ["titulos"],

  data() {
    return {
      msg: "Component Moeda",
      listaValores: [
        { titulo: "valor1", valor: 23.656589 },
        { titulo: "valor2", valor: 23.656589 },
        { titulo: "valor3", valor: 23.656589 },
        { titulo: "valor4", valor: 23.656589 },
        { titulo: "valor5", valor: 23.656589 }
      ]      
    };
  },
  filters: {
    TrataValor: function(valor) {
      return "R$ " + valor.toFixed(2).replace(".", ",");
    }
  },
  methods: {
    totalValorMethods: function(item) {
      var total = 0;
      for (item of this.listaValores) { 
        total += item.valor;
      }
      return total;
    }
  },
  computed: {
    totalValorComputed: function(item) {
      var total = 0;
      for (item of this.listaValores) { 
        total += item.valor;
      }
      return total;
    }
  }

};
</script>

<style scoped>
.moeda {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 50px;
  font-weight: bold;
}
ul {
  font-family: Arial, Helvetica, sans-serif;
  list-style: none;
}
.total {
 font-weight: bold;
}
</style>
