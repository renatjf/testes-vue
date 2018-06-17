import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

//syled components
import styled from 'vue-styled-components';
Vue.use(styled)
//

//Vue Router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//


Vue.use(VueResource)

new Vue({
  el: '#app',
  render: h => h(App)
})
