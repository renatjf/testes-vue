<template>
   <div class="gui-card" v-on:click="cliqueEfeito" v-bind:style="efeitoColor" v-on:mouseout="removeCliqueEfeito">
     <div class="gui-card__media">
       <img class="gui-card__img" v-bind:src="imagem" v-bind:alt="tituloFilme"  />
       </div>
       <div class="gui-card__details">
         <div class="gui-card__title">
           {{ tituloFilme }}
         </div>
       </div>
     </div>
 </template>

<script>
export default {
  name: "Video",
  props: ['tituloFilme', 'imagem'],
  data() {
    return {
      efeitoColor: null
    };
  },
  methods: {
    cliqueEfeito: function() {
      console.log("cliqueEfeito");
      this.efeitoColor = "color: red; transform: scale(2) !important; margin-right: 134px !important;"
    },
    removeCliqueEfeito: function() {
      console.log("removeCliqueEfeito");
      this.efeitoColor = null;
    }
  }

};
</script>

<style lang="scss">

</style>
