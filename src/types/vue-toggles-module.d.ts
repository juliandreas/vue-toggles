import { DefineComponent } from "vue";
import { type VueTogglesProps } from "./";

declare module "VueToggles" {
  const component: DefineComponent<VueTogglesProps, {}, any>;
  export default component;
}
