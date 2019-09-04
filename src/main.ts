import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Input, Icon } from "ant-design-vue";

Vue.component(Input.name, Input);
Vue.component(Icon.name, Icon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
