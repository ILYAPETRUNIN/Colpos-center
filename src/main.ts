import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/stylus/index.styl";
import "./assets/css/gridlex.css";
import "./components/globalComponents";
import "./plugins/index.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
