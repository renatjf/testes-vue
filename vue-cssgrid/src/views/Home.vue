<template>
  <div>
    <container class="container">
      <row class="row">
        <column class="coluna" grid="3">coluna</column>
        <column class="coluna" grid="3">coluna</column>
        <column class="coluna" grid="3">coluna</column>
        <column class="coluna" grid="3">coluna</column>
      </row>
    </container>
  </div>
</template>

<script>
import { Container, Row, Column} from "../_grid/_grid";

export default {
  name: "home",
  components: {
    container: Container,
    row: Row,
    column: Column,
  }
};
</script>

<style lang="scss" scoped>
.container {
  .coluna {
    background: red;
  }
}
</style>
