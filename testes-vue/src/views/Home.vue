<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Testes" />
    <div id="container">
      <div>teste</div>
      <div>teste</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">
#container {
  display: grid;
  grid: repeat(2, 60px) / auto-flow 80px;
}
#container > div {
  background-color: #8ca0ff;
  width: 50px;
  height: 50px;
}
</style>
