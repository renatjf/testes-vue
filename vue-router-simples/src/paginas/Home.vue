<template>
  <div>
    <h1>
     {{ msg }}
    </h1>
    <p>coloque no path /contato</p>
    <p>coloque no path /teste 'para paginas 404'</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "Home"
    };
  }
};
</script>

<style lang="scss">
</style>
