import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
import VueOnsen from 'vue-onsenui'

Vue.use(VueOnsen)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
