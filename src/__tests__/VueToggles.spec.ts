import { describe, it, expect } from "vitest";
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

describe("VueToggles", () => {
  it("toggles when clicked", async () => {
    const wrapper = mount(VueToggles, {
      props: {
        value: false,
      },
    });
    await wrapper.trigger("click");
  });

  it("does not toggle when disabled", async () => {
    const wrapper = mount(VueToggles, {
      props: {
        value: false,
        disabled: true,
      },
    });
    await wrapper.trigger("click");
    expect(wrapper.emitted().click).toBeUndefined();
  });

  it("handles width prop correctly", () => {
    const width = 100;
    const wrapper = mount(VueToggles, {
      props: {
        value: false,
        width,
      },
    });
    expect(wrapper.find(".vue-toggles").attributes("style")).toContain(
      `width: ${width}px;`
    );
  });

  it("handles height prop correctly", () => {
    const height = 30;
    const wrapper = mount(VueToggles, {
      props: {
        value: false,
        height,
      },
    });
    expect(wrapper.find(".vue-toggles").attributes("style")).toContain(
      `height: ${height}px;`
    );
  });

  it("displays checked text correctly", () => {
    const wrapper = mount(VueToggles, {
      props: {
        value: true,
        checkedText,
      },
    });
    expect(wrapper.text()).toBe(checkedText);
  });

  it("displays unchecked text correctly", () => {
    const wrapper = mount(VueToggles, {
      props: {
        value: false,
        uncheckedText,
      },
    });
    expect(wrapper.text()).toBe(uncheckedText);
  });

  it("applies checked background color", async () => {
    const checkedBg = "#123456";
    const wrapper = mount(VueToggles, {
      props: {
        value: true,
        checkedBg,
      },
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".vue-toggles").attributes("style")).toContain(
      `background: ${hexToRgb(checkedBg)};`
    );
  });

  it("applies unchecked background color", async () => {
    const uncheckedBg = "#654321";
    const wrapper = mount(VueToggles, {
      props: {
        value: false,
        uncheckedBg,
      },
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".vue-toggles").attributes("style")).toContain(
      `background: ${hexToRgb(uncheckedBg)};`
    );
  });

  it("applies dot color", async () => {
    const dotColor = "#789012";
    const wrapper = mount(VueToggles, {
      props: {
        value: true,
        dotColor,
      },
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".vue-toggles__dot").attributes("style")).toContain(
      `background: ${hexToRgb(dotColor)};`
    );
  });

  it("applies checkedTextColor correctly", async () => {
    const checkedTextColor = "#abcdef";
    const wrapper = mount(VueToggles, {
      props: {
        value: true,
        checkedText,
        checkedTextColor,
      },
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".vue-toggles__text").attributes("style")).toContain(
      `color: ${hexToRgb(checkedTextColor)};`
    );
  });

  it("applies uncheckedTextColor correctly", async () => {
    const uncheckedTextColor = "#fedcba";
    const wrapper = mount(VueToggles, {
      props: {
        value: false,
        uncheckedText,
        uncheckedTextColor,
      },
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".vue-toggles__text").attributes("style")).toContain(
      `color: ${hexToRgb(uncheckedTextColor)};`
    );
  });

  it("applies fontWeight correctly", () => {
    const fontWeight = "bold";
    const wrapper = mount(VueToggles, {
      props: {
        value: false,
        uncheckedText,
        fontWeight,
      },
    });
    expect(wrapper.find(".vue-toggles__text").attributes("style")).toContain(
      `font-weight: ${fontWeight};`
    );
  });

  it("applies fontSize correctly", () => {
    const fontSize = 16;
    const wrapper = mount(VueToggles, {
      props: {
        value: false,
        uncheckedText,
        fontSize,
      },
    });
    expect(wrapper.find(".vue-toggles__text").attributes("style")).toContain(
      `font-size: ${fontSize}px;`
    );
  });
});
