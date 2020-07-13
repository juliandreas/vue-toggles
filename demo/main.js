import Vue from 'vue';
import App from '@/App.vue';
import VueToggles from '../src/VueToggles.vue';

Vue.component('VueToggles', VueToggles);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
