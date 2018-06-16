<template>
  <div id="app">
    <div class="contain">
      <app-terror></app-terror>
      
    </div>
  </div>
</template>

<script>
//import component
import Terror from "./components/Terror";

export default {
  name: "app",

  //declara components
  components: {
    "app-terror": Terror
  },
  data() {
    return {
      msg: "Teste Netflix"
    };
  }
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
