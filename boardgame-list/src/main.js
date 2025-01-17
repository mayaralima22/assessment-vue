import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from "./store";

Vue.config.productionTip = false

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

// import './styles/theme.scss'

Vue.use(VueMaterial)

new Vue({
  store,
  render: h => h(App),
  router: router,
}).$mount("#app");
