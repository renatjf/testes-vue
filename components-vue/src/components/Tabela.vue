<template>
  <table>
   <thead>
     <tr>
       <th v-for="titulo in titulos" :key="titulo">{{ titulo }}</th>       
     </tr>
   </thead>
   <tbody>
     <tr v-for="registro in registros" :key="registro">
       <td  v-for="item in registro" :key="item">{{ item }}</td>       
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
        {titulo: 'Renato', descricao: 'renatjf@gmail.com', link: 'Link'}
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
