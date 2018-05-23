<template>
  <div id="app">    
    <app-component01></app-component01>
  </div>
</template>

<script>
import Component01 from './components/Component01'

export default {
  name: 'App',
  components: {
    "app-component01": Component01    
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
