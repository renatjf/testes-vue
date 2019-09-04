import Vue from 'vue'
import 'document-register-element/build/document-register-element'
import 'document-register-element'
import vueCustomElement from 'vue-custom-element'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'


Vue.config.productionTip = false

new Vue({
  vueCustomElement,
  router,
  store,
  template: '<App/>',  
  render: h => h(App)
}).$mount('#app')
