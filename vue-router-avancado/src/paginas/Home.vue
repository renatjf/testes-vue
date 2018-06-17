<template>
  <div>
    <TesteStyled>
      <h1>
       Página {{ msg }}
      </h1>
    </TesteStyled>

    <router-link to="/contato">Pagina de contato</router-link>
  </div>
</template>

<script>
import TesteStyled from "../styled-components/styled";

export default {
  name: "Home",
  components: {
    TesteStyled
  },
  data() {
    return {
      msg: "Home"
    };
  }
};
</script>

<style lang="scss">
</style>
