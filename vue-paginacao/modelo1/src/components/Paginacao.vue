<template>
<div class="paginacao">
 <paginate name="items" :list="items" class="paginate-list">
    <li v-for="item in paginated('items')">
      {{ item }}
    </li>
  </paginate>
  <paginate-links for="items" :show-step-links="true"></paginate-links>
  <paginate-links for="items" :limit="2" :show-step-links="true"></paginate-links>
  <paginate-links for="items" :simple="{
        next: 'Next »',
        prev: '« Back'
      }"></paginate-links>

      <div class='x'>\
        <ul v-for='product in products'>
          <li> {{product.name}} {{product.price}}  </li>
        </ul>
      </div>

</div>
</template>

<script>
export default {
  name: "Paginação",  
  props:['products'],
  
  data() {
    return {
      items: [],
      paginate: ["items"]
    };
  },
   mounted () {
        $.getJSON('http://ilikecoding.net/membership/api/memberships', json => {
          this.products = json.data
          console.log(json.data)
        })
      },
  created(){
    this.$http.get('https://stg-lambda.estantevirtual.com.br/busca/sugestao?search_type=titulo&search_text=hary%20poter').then(res => {
      this.lista = res.body;
      console.log(res);          
    });
  },
};
</script>

<style lang="scss">
.paginacao {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 20px;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.paginate-list {
  width: 159px;
  margin: 0 auto;
  text-align: left;
  li {
    display: block;
    &:before {
      content: "⚬ ";
      font-weight: bold;
      color: slategray;
    }
  }
}

.paginate-links.items {
  user-select: none;
  a {
    cursor: pointer;
  }
  li.active a {
    font-weight: bold;
  }
  li.next:before {
    content: " | ";
    margin-right: 13px;
    color: #ddd;
  }
  li.disabled a {
    color: #ccc;
    cursor: no-drop;
  }
}

a {
  color: #42b983;
}
</style>
