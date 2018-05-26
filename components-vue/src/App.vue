<template>
  <div id="app">    
    <app-component01></app-component01>
    <app-component02 testeProps="Texto da props"></app-component02>
    <app-tabela v-bind:titulos="['Nome', 'E-mail', 'Link']" registros="registros"></app-tabela>
    <app-moeda></app-moeda>
    <app-formulario></app-formulario>
  </div>
</template>

<script>
import Component01 from './components/Component01'
import Component02 from './components/Component02'
import Tabela from './components/Tabela'
import Moeda from './components/Moeda'
import Formulario from './components/Formulario'


export default {
  name: 'App',
  components: {
    "app-component01": Component01,
    "app-component02": Component02,
    "app-tabela": Tabela,
    "app-moeda": Moeda,
    "app-formulario": Formulario
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;    
}
</style>
