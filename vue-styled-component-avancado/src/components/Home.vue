<template>
<teste-styled>
    <div>
        <h1>{{ msg }}</h1>
        <div class="teste">
          teste
        </div>
    </div>
</teste-styled>
</template>

<script>
import Teste from "../styled/Teste"
export default {
  name: "Home",
  components: {
    'teste-styled': Teste
  },
  data() {
    return {
      msg: "Component Home"
    }
  }
}
</script>

<style scoped>
</style>
