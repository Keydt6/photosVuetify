import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from '@/store'
import vuetify from './plugins/vuetify';
import VueLoading from 'vuejs-loading-plugin'
import Toasted from 'vue-toasted'

Vue.config.productionTip = false
Vue.use(VueLoading)
Vue.use(Toasted, {
  iconPack: 'material', // set your iconPack, defaults to material. material|fontawesome|custom-class
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
