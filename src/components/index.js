import SimpleToggle from "./SimpleToggle.vue";

// This exports the plugin object.
export default {
  // The install method will be called with the Vue constructor as
  // the first argument
  install(Vue) {
    Vue.component("SimpleToggle", SimpleToggle);
  },
};
