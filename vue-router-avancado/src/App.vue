<template>
  <div id="app">
    <app-home></app-home>
  </div>
</template>

<script>
//import component
import Home from "./paginas/Home";

//import styled components
import Styled from "./styled-components/styled";

export default {
  name: "app",

  //declara components
  components: {
    "app-home": Home,
    "app-styled": Styled
  },
  data() {
    return {
      msg: "Home"
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
