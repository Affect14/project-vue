import Vue from 'vue'
import storage from './vuex/storage'
import App from './App.vue'
import router from './router/router'


Vue.config.productionTip = false

new Vue({
  store: storage,
  router,
  render: h => h(App),
  
}).$mount('#app')
