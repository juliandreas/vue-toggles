import type { DefineComponent } from "vue";
import VueTogglesComponent from "./components/VueToggles.vue";
import type { VueTogglesProps } from "./types";

// Type declaration
declare const VueToggles: DefineComponent<VueTogglesProps>;

// Export the component and its types
export type { VueTogglesProps };
export default VueTogglesComponent as typeof VueToggles;
