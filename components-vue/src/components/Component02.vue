<template>
  <div class="teste">
    <h1>{{ msg }} - {{ testeProps }}</h1>
    <div v-for="registro in registros" :key="registro">{{registro.titulo}}</div>
  </div>
</template>

<script>
export default {
  name: "Component02",
  props: ["testeProps"],

  data() {
    return {
      msg: "Component 02 Props",
      registros: [
        { titulo: "registro1" },
        { titulo: "registro2" },
        { titulo: "registro3" },
        { titulo: "registro4" },
        { titulo: "registro5" }
      ]
    };
  }
};
</script>

<style scoped>
.teste {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
}
</style>
