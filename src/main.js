/*
 * @Descripttion: 
 * @version: 
 * @Author: rkz
 * @Date: 2020-09-28 21:56:13
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-09-29 21:39:43
 */
import Vue from "vue";
import App from "./App.vue";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./route.js";
import store from "./store/store.js";

Vue.use(Element, { size: "small", zIndex: 3000 });
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
