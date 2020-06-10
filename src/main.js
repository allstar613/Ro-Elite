import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)

import 'bootstrap'; // Import js file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import css file

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
