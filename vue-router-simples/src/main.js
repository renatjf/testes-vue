import Vue from 'vue'
// import App from './App.vue'
import VueResource from 'vue-resource'

import Home from './paginas/Home.vue'

const Contato = {template: '<p>Página de contato</p>'}
const pag404 = {template: '<p>Página 404</p>'}

const rotas = {
  '/': Home,
  '/contato': Contato
}

Vue.use(VueResource)

new Vue({
  el: '#app',
  data: {
    rotaAtual: window.location.pathname
  },
  computed: {
    exibeComponent() {
      return rotas[
        this.rotaAtual
      ]
      || pag404
    }
  },
  render (h) {
    return h(this.exibeComponent)
  }
})
