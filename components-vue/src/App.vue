<template>
  <div id="app">    
    <app-component01></app-component01>
    <app-component02 testeProps="Texto da props"></app-component02>    
  </div>
</template>

<script>
import Component01 from './components/Component01'
import Component02 from './components/Component02'

export default {
  name: 'App',
  components: {
    "app-component01": Component01,
    "app-component02": Component02
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
