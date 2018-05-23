<template>
  <div class="teste">
    <h1>{{ msg }} - {{ testeProps }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Component02',
  props: ['testeProps'],
  data () {
    return {
      msg: 'Component 02 Props',
      
    }
  }
}
</script>

<style scoped>
  .teste {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
  }
</style>
