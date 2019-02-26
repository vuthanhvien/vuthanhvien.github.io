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




Vue.filter('formatDate', function (value) {
  if (value) {
    return ('00' + new Date(value).getDate()).slice(-2) + '/' + ('00' + (new Date(value).getMonth() + 1)).slice(-2);
  }
});
