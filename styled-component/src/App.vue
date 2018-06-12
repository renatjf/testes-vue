<template>
  <div id="app">
    <app-testeStyled></app-testeStyled>
  </div>
</template>

<script>
import TesteStyled from './components/TesteStyled'
export default {
  name: 'app',
  components: {
    "app-testeStyled": TesteStyled
  },
  data () {
    return {      
    }
  }
}
</script>

<style lang="scss">
#app {  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;    
  }
</style>
