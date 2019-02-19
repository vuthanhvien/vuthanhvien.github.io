import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import VueFire from 'vuefire'
Vue.use(VueFire)


Vue.config.productionTip = false
Vue.use(BootstrapVue);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')




Vue.filter('formatDate', function(value) {
  if (value) {
    return new Date(value).getDate() + '/' + (new Date(value).getMonth() + 1);
  }
});
