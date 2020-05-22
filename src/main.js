import Vue from 'vue';
import App from './App.vue';

import VueToggles from '@';

Vue.use(VueToggles);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
