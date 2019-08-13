<template>
<div>
  <Header />
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
import Header from '~/components/Header.vue';
export default {
  data () {
    return {
      usuarioId:''
    }
  },
  components: {
    Header
  },
  methods: {
    carregaUsuario() {
      this.$router.push('/usuarios/' + this.usuarioId)
    }
  },
  layout: 'usuarios'
}
</script>
