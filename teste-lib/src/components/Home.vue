<template>
  <div>
    <h1>Home</h1>
    <ev-lib-grid
      :full="false"
      :gutter="[5,6,20]"
      :grid="[4,8,12]"
      :areas="[
      {'idArea':'banner','vazio':[0,0,.5],'colunas':[4,8,11.5],'ordem':[1,1,1]},
      ]"
    >
      <div slot="banner" class="banner">Banner</div>
    </ev-lib-grid>
  </div>
</template>

<script>

export default {
  components: {
  }
};
</script>

<style scoped>
.banner {
  background: red;
  color: white;
}
</style>