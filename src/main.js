import Vue from 'vue'
import App from './App.vue'
import router from './router'
import categories from './category-data.js'
import typeData from './type-data.js'
import itemData from './item-data.js'


let data = {
  categories: categories,
  items: [],
  selectedCategory: "",
  selectedCategoryIndex: undefined,
  typeData: typeData,
  itemData: itemData
};

Vue.config.productionTip = false

new Vue({
  data,
  router,
  render: h => h(App)
}).$mount('#app')
