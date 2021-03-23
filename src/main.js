import Vue from "vue";
import App from "./App.vue";
import router from './router/index';
import store from './store/index';
import materialIcons from 'material-icons/iconfont/material-icons.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  materialIcons,
  render: h => h(App)
}).$mount("#app");