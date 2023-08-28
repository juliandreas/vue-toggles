import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import VueToggles from "../components/VueToggles.vue";

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16
      )})`
    : null;
};

const uncheckedText = "Off";
const checkedText = "On";
const valueProps = ["value", "modelValue"];

describe("VueToggles", () => {
  it("should emit a warning if both value and modelValue are provided", () => {
    const consoleMock = vi.spyOn(console, "warn");

    mount(VueToggles, {
      props: {
        value: false,
        modelValue: false,
      },
    });
    expect(consoleMock).toHaveBeenCalled();
    consoleMock.mockRestore();
  });

  it("should not emit a warning if only one of value or modelValue are provided", () => {
    const consoleMock = vi.spyOn(console, "warn");

    mount(VueToggles, {
      props: {
        value: false,
        modelValue: undefined,
      },
    });
    expect(consoleMock).not.toHaveBeenCalled();
    consoleMock.mockRestore();
  });

  it("toggles when clicked", async () => {
    valueProps.forEach(async (prop) => {
      const wrapper = mount(VueToggles, {
        props: {
          [prop]: false,
        },
      });
      await wrapper.trigger("click");
      expect(wrapper.emitted().click).toBeTruthy();
    });
  });

  it("does not toggle when disabled", async () => {
    valueProps.forEach(async (prop) => {
      const wrapper = mount(VueToggles, {
        props: {
          [prop]: false,
          disabled: true,
        },
      });
      await wrapper.trigger("click");
      expect(wrapper.emitted().click).toBeUndefined();
    });
  });

  it("handles width prop correctly", () => {
    valueProps.forEach(async (prop) => {
      const width = 100;
      const wrapper = mount(VueToggles, {
        props: {
          [prop]: false,
          width,
        },
      });
      await wrapper.trigger("click");
      expect(wrapper.emitted().click).toBeTruthy();
    });
  });

  it("handles height prop correctly", () => {
    const height = 30;
    valueProps.forEach(async (prop) => {
      const wrapper = mount(VueToggles, {
        props: {
          [prop]: false,
          height,
        },
      });
      await wrapper.trigger("click");
      expect(wrapper.emitted().click).toBeTruthy();
    });
  });

  it("displays checked text correctly", () => {
    valueProps.forEach((prop) => {
      const wrapper = mount(VueToggles, {
        props: {
          [prop]: true,
          checkedText,
        },
      });
      expect(wrapper.text()).toBe(checkedText);
    });
  });

  it("displays unchecked text correctly", () => {
    valueProps.forEach((prop) => {
      const wrapper = mount(VueToggles, {
        props: {
          [prop]: false,
          uncheckedText,
        },
      });
      expect(wrapper.text()).toBe(uncheckedText);
    });
  });

  it("applies checked background color", async () => {
    const checkedBg = "#123456";
    valueProps.forEach((prop) => {
      const wrapper = mount(VueToggles, {
        props: {
          [prop]: true,
          checkedBg,
        },
      });
      expect(wrapper.find(".vue-toggles").attributes("style")).toContain(
        `background: ${hexToRgb(checkedBg)};`
      );
    });
  });

  it("applies unchecked background color", async () => {
    const uncheckedBg = "#654321";
    valueProps.forEach((prop) => {
      const wrapper = mount(VueToggles, {
        props: {
          [prop]: false,
          uncheckedBg,
        },
      });
      expect(wrapper.find(".vue-toggles").attributes("style")).toContain(
        `background: ${hexToRgb(uncheckedBg)};`
      );
    });
  });

  it("applies dot color", async () => {
    const dotColor = "#789012";
    valueProps.forEach((prop) => {
      const wrapper = mount(VueToggles, {
        props: {
          [prop]: true,
          dotColor,
        },
      });
      expect(wrapper.find(".vue-toggles__dot").attributes("style")).toContain(
        `background: ${hexToRgb(dotColor)};`
      );
    });
  });

  it("applies checkedTextColor correctly", async () => {
    const checkedTextColor = "#abcdef";
    valueProps.forEach((prop) => {
      const wrapper = mount(VueToggles, {
        props: {
          [prop]: true,
          checkedText,
          checkedTextColor,
        },
      });
      expect(wrapper.find(".vue-toggles__text").attributes("style")).toContain(
        `color: ${hexToRgb(checkedTextColor)};`
      );
    });
  });

  it("applies uncheckedTextColor correctly", async () => {
    const uncheckedTextColor = "#fedcba";
    valueProps.forEach((prop) => {
      const wrapper = mount(VueToggles, {
        props: {
          [prop]: false,
          uncheckedText,
          uncheckedTextColor,
        },
      });
      expect(wrapper.find(".vue-toggles__text").attributes("style")).toContain(
        `color: ${hexToRgb(uncheckedTextColor)};`
      );
    });
  });

  it("applies fontWeight correctly", () => {
    const fontWeight = "bold";
    valueProps.forEach((prop) => {
      const wrapper = mount(VueToggles, {
        props: {
          [prop]: false,
          uncheckedText,
          fontWeight,
        },
      });
      expect(wrapper.find(".vue-toggles__text").attributes("style")).toContain(
        `font-weight: ${fontWeight};`
      );
    });
  });

  it("applies fontSize correctly", () => {
    const fontSize = 16;
    valueProps.forEach((prop) => {
      const wrapper = mount(VueToggles, {
        props: {
          [prop]: false,
          uncheckedText,
          fontSize,
        },
      });
      expect(wrapper.find(".vue-toggles__text").attributes("style")).toContain(
        `font-size: ${fontSize}px;`
      );
    });
  });

  it("should correctly set aria-readonly when disabled", async () => {
    valueProps.forEach((prop) => {
      const wrapper = mount(VueToggles, {
        props: {
          [prop]: false,
          disabled: true,
        },
      });
      expect(wrapper.attributes("aria-readonly")).toBe("true");
    });
  });

  it("should correctly set aria-checked when checked", async () => {
    valueProps.forEach((prop) => {
      const wrapper = mount(VueToggles, {
        props: {
          [prop]: true,
        },
      });
      expect(wrapper.attributes("aria-checked")).toBe("true");
    });
  });
});
