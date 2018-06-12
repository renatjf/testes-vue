<template>
  <div>
    <h1>{{ msg }}</h1>
    <StyledTitle>
      <h1>Teste</h1>
    </StyledTitle>
  </div>
</template>

<script>
import styled from "vue-styled-components";

const StyledTitle = styled.h1`
  font-size: 50px;
  text-align: center;
  color: red;
`;

export default {
  name: "TesteStyled",
  components: {
    StyledTitle
  },
  
  data() {
    return {
      msg: "Teste Styled components"
    };
  }
};
</script>

<style scoped>
</style>
