import type { DefineComponent } from "vue";

export interface VueTogglesProps {
  modelValue?: boolean;
  value?: boolean;
  disabled?: boolean;
  reverse?: boolean;
  width?: number;
  height?: number;
  dotColor?: string;
  uncheckedBg?: string;
  checkedBg?: string;
  uncheckedTextColor?: string;
  checkedTextColor?: string;
  uncheckedText?: string;
  checkedText?: string;
  fontSize?: number;
  fontWeight?: string;
  ariaLabel?: string;
}

export type VueTogglesComponent = DefineComponent<VueTogglesProps>;
