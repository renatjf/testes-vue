<template>
<div>
	<h2>teste de pagina usuarios</h2>
  <br>
  <hr>
  <br>
  <input type="text" v-model="usuarioId">
  <button @click="carregaUsuario">Carrega Usuario</button>
  <nuxt-child />
</div>
</template>

<script>
export default {
  data () {
    return {
      usuarioId:''
    }
  },
  methods: {
    carregaUsuario() {
      this.$router.push('/usuarios/' + this.usuarioId)
    }
  }
}
</script>
