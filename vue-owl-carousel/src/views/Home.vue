<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Teste Owl Carousel" />
    <carousel>
      <img src="https://placeimg.com/200/200/any?1" />
      <img src="https://placeimg.com/200/200/any?2" />
      <img src="https://placeimg.com/200/200/any?3" />
      <img src="https://placeimg.com/200/200/any?4" />
    </carousel>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    carousel
  }
};
</script>
