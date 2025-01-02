import type { DefineComponent } from "vue";
import VueTogglesComponent from "./components/VueToggles.vue";
import type { VueTogglesProps } from "./types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare const VueToggles: DefineComponent<VueTogglesProps>;

// Export the component and its types
export type { VueTogglesProps };
export default VueTogglesComponent as typeof VueToggles;
