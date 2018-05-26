<template>
  <div>
    <br><br>
    {{ msg }}
    <p>
      Texto: comum
      <input type="text" v-model="texto">
      {{texto}}
    </p>
    <p class="textarea">
      Textarea
      {{textarea}}
      <textarea name="" id="" cols="30" rows="10" v-model="textarea">        
      </textarea>
    </p>
    <p>
      Checkbox
      <input type="checkbox" id="teste" v-model="checkbox">
      <label for="teste">Teste de checkbox: {{checkbox}} </label>
    </p>
    <p>
      Multiplos Checkboxs
      {{notificacoes}}
      <input type="checkbox" id="receberEmail" value="Email" v-model="notificacoes">
      <label for="receberEmail">Email: </label>
      <input type="checkbox" id="receberSMS" value="sms" v-model="notificacoes">
      <label for="receberSMS">SMS: </label>
      <input type="checkbox" id="receberTel" value="tel" v-model="notificacoes">
      <label for="receberTel">Telefone: </label>
    </p>
    <p>
      Radio: {{sexo}}
      <br>
      <input type="radio" id="masculino" value="M" v-model="sexo">
      <label for="masculino">Masculino: </label>
      <input type="radio" id="feminino" value="F" v-model="sexo">
      <label for="feminino">Feminino: </label>
    </p>
    <p>
      Select: {{ano}}
      <br>
      <select name="" id="" v-model="ano">
        <option disabled value="">Escolha o ano</option>
        <option value="2017">Ano 2017</option>
        <option value="2018">Ano 2018</option>
        <option value="2019">Ano 2019</option>
      </select>
    </p>
    <p>
      Multiplos Selects: {{cores}}
      <br>
      <select multiple name="" id="" v-model="cores">
        <option disabled value="">Escolha as acores</option>
        <option>Azul</option>
        <option>Vermelho</option>
        <option>Verde</option>
      </select>
    </p>
    <p>
      Recusrso Lazy {{busca}}
      <br>
      <input type="text" v-model.lazy="busca">
    </p>
    <p>
      Number: {{idade}} - {{typeof idade}}
      <input type="number" name="" id="" v-model.number="idade">

    </p>
    <br><br>
  </div> 
  
  
</template>

<script>
export default {
  name: "Formulario",

  data() {
    return {
      msg: "Teste com Formulário",
      texto: "",
      textarea: "",
      checkbox: null, //ou true ou false
      notificacoes: [],
      sexo: null, //ou 'M' ou 'F'
      ano: null,
      cores: [],
      busca: '',
      idade: 45
    };
  }
};
</script>

<style scoped>
.textarea {
  white-space: pre-line;
}
</style>
