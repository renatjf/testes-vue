import Vue from 'vue'
//import App from './App.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './paginas/Home.vue'
const Contato = { template: '<p>Página de Contato</p>' }
const pag404 = { template: '<p>Essa página não existe!</p>' }

const router = new VueRouter({
  mode: 'history', //retira a # para a nevagacao
  routes: [
    { path: '/', component: Home },
    { path: '/contato', component: Contato },
    { path: "*", component: pag404 }
  ]
})

const app = new Vue({
  router
}).$mount('#app')
