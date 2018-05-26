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
      <p>contaMethod: render inapropriado mais de uma vez {{ contaMethod }}</p>
      <p>contaComputed: render uma vez {{ contaComputed }}</p>
      <p>
        modelo watch
        <input type="text" v-model="nome" placeholder="Nome">
        alterações do watch: {{alteracoesWatch}}
      </p>
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
      ],
      contaMethod: 0, 
      contaComputed: 0, 
      nome: '',
      alteracoesWatch: 0
    };
  },
  filters: {
    TrataValor: function(valor) {
      return "R$ " + valor.toFixed(2).replace(".", ",");
    }
  },
  methods: {
    totalValorMethods: function(item) {
      this.contaMethod++;
      var total = 0;
      for (item of this.listaValores) { 
        total += item.valor;
      }
      return total;
    }
  },
  computed: {
    totalValorComputed: function(item) {
      this.contaComputed++;
      var total = 0;
      for (item of this.listaValores) { 
        total += item.valor;
      }
      return total;
    }
  },
  watch: {
    nome: function(valor) {
      this.alteracoesWatch++;
      this.nome = valor.toUpperCase();
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
