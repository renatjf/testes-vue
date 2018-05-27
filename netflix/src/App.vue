<template>
  <div id="app">
    <div class="contain">
      <app-video titulo="Videos"></app-video>
      <app-video titulo="Comedia"></app-video>
    </div>
  </div>
</template>

<script>
//import component
import Video from "./components/Video";

export default {
  name: "app",

  //declara components
  components: {
    "app-video": Video
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
