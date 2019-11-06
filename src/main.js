import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from 'router'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.use(VueSidebarMenu)
Vue.use(BootstrapVue);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
  template: '<router-view></router-view>'
}).$mount('#app')