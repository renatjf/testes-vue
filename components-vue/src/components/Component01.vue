<template>
  <div class="teste">
    <h1>{{ msg }}</h1>
    <div>{{ tituloComponent01 }}</div>
  </div>
</template>

<script>
export default {
  name: 'Component01',
  data () {
    return {
      msg: 'Component 01 Normal',
      tituloComponent01: 'Titulo component 01 Normal'
    }
  }
}
</script>

<style scoped>
  .teste {
    color: red;
  }
</style>
