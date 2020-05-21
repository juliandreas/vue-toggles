import Vue from "vue";
import App from "./App.vue";
import SimpleToggle from "@/components/";

Vue.use(SimpleToggle);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
