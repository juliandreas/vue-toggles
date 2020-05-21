import SimpleToggle from "./SimpleToggle.vue";

let installed = false;

export default {
  install(Vue) {
    if (installed) {
      return;
    }

    Vue.component("SimpleToggle", SimpleToggle);
    installed = true;
  },
};

export { SimpleToggle };
