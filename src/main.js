import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { makeServer } from "./server"

Vue.config.productionTip = false

if (process.env.NODE_ENV === "development") {
  makeServer()
}

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
