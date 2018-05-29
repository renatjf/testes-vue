<template>
  <table>
   <thead>
     <tr>
       <th v-for="(titulo, index) in titulos" :key="index">{{ titulo }}</th>       
     </tr>
   </thead>
   <tbody>
     <tr v-for="(registro, index) in registros" :key="index">
       <td>{{ registro.titulo }}</td>
       <td>{{ registro.descricao }}</td>
       <td v-html="registro.link">{{ registro.link }}</td>
     </tr>
   </tbody>
  </table>
</template>

<script>
export default {
  name: 'Tabela',
  
  props: [
    'titulos'
    ],
  
  data () {
    return {
      msg: 'Tabela component',      
      registros: [
        {titulo: 'Renato', descricao: 'renatjf@gmail.com', link: '<a href="http://www.google.com">Link</a>'},
        {titulo: 'Luiz', descricao: 'renatjf@gmail.com', link: '<a href="http://www.google.com">Link</a>'},
        {titulo: 'Paula', descricao: 'renatjf@gmail.com', link: '<a href="http://www.google.com">Link</a>'},
        {titulo: 'Paula', descricao: 'renatjf@gmail.com', link: '<a href="http://www.google.com">Link</a>'},
      ]
    }
  }
  
}
</script>

<style scoped>
  table {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    border-collapse: collapse;
    font-family: Arial, Helvetica, sans-serif;    
  }
  table th {
    background: black;
    color: white;
    border: 1px solid white;
    padding: 10px;
  }
  table tr, td {
  border: 1px solid black;
  padding: 10px;
}
</style>
