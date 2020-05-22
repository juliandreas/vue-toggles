import VueToggles from './components/VueToggles.vue';

let installed = false;

export default {
  install(Vue) {
    if (installed) {
      return;
    }

    Vue.component('VueToggles', VueToggles);
    installed = true;
  },
};

export { VueToggles };
