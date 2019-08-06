import Vue from 'vue'
import App from './App.vue'
import styled from 'vue-styled-components'

Vue.use(styled)

new Vue({
  el: '#app',
  render: h => h(App)
})
