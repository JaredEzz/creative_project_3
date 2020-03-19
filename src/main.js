import Vue from 'vue'
import App from './App.vue'
import router from './router'
import categories from './category-data.js'

let data = {
  categories: categories,
  items: []
};

Vue.config.productionTip = false

new Vue({
  data,
  router,
  render: h => h(App)
}).$mount('#app')
