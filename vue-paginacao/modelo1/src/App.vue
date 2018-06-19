<template>
  <div id="app">
    <app-paginacao></app-paginacao>
  </div>
</template>

<script>
//import component
import Paginacao from "./components/Paginacao";

export default {
  name: "app",

  //declara components
  components: {
    "app-paginacao": Paginacao
  },
  data() {
    return {
      msg: "Páginação 01"
    };
  }
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
