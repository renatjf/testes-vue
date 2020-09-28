import Vue from 'vue'
import App from './App.vue'
import EvLibGrid from "ev-lib-grid"

Vue.component('ev-lib-grid', EvLibGrid)

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
