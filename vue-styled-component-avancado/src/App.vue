<template>
  <div id="app">
    <app-home></app-home>
  </div>
</template>

<script>
//import components
import Home from "./components/Home";

export default {
  name: "app",
  components: {
    //components
    "app-home": Home
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
