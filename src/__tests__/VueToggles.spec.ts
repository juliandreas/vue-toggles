import { describe, it, expect, vi } from "vitest";
import { mount, type VueWrapper } from "@vue/test-utils";
import VueToggles from "../components/VueToggles.vue";

const uncheckedText = "Off";
const checkedText = "On";

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    return `rgb(${parseInt(result[1], 16)}, ${parseInt(
      result[2],
      16,
    )}, ${parseInt(result[3], 16)})`;
  } else {
    throw new Error("Invalid 6-digit hexadecimal color code.");
  }
};

const runTestForValueProps = (
  testFunction: (wrapper: VueWrapper) => void,
  options: { initialValue?: boolean } = {},
) => {
  const { initialValue = false } = options;

  ["value", "modelValue"].forEach((prop) => {
    const wrapper = mount(VueToggles, {
      props: { [prop]: initialValue },
    });
    testFunction(wrapper);
  });
};

describe("VueToggles", () => {
  describe("Warnings", () => {
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
  });

  describe("Interactions", () => {
    it("toggles when clicked", async () => {
      runTestForValueProps(async (wrapper) => {
        await wrapper.trigger("click");
        expect(wrapper.emitted().click).toBeTruthy();
      });
    });

    it("does not toggle when disabled", async () => {
      runTestForValueProps(async (wrapper) => {
        await wrapper.setProps({ disabled: true });
        await wrapper.trigger("click");
        expect(wrapper.emitted().click).toBeUndefined();
      });
    });
  });

  describe("Size", () => {
    it("handles width prop correctly", () => {
      runTestForValueProps(async (wrapper) => {
        const width = 100;
        await wrapper.setProps({ width });
        expect(wrapper.attributes("style")).toContain(`width: ${width}px;`);
      });
    });

    it("handles height prop correctly", () => {
      runTestForValueProps(async (wrapper) => {
        const height = 30;
        await wrapper.setProps({ height });
        expect(wrapper.attributes("style")).toContain(`height: ${height}px;`);
      });
    });

    it("handles dot size prop correctly", () => {
      runTestForValueProps(async (wrapper) => {
        const dotSize = 10;
        await wrapper.setProps({ dotSize });
        expect(wrapper.find("[test-id='dot']").attributes("style")).toContain(
          `width: ${dotSize}px;`,
        );
        expect(wrapper.find("[test-id='dot']").attributes("style")).toContain(
          `height: ${dotSize}px;`,
        );
      });
    });
  });

  describe("Text", () => {
    it("displays checked text correctly", () => {
      runTestForValueProps(
        async (wrapper) => {
          await wrapper.setProps({ checkedText });
          expect(wrapper.text()).toBe(checkedText);
        },
        { initialValue: true },
      );
    });

    it("displays unchecked text correctly", () => {
      runTestForValueProps(async (wrapper) => {
        await wrapper.setProps({ uncheckedText });
        expect(wrapper.text()).toBe(uncheckedText);
      });
    });

    it("applies fontWeight correctly", () => {
      const fontWeight = "bold";
      runTestForValueProps(async (wrapper) => {
        await wrapper.setProps({ fontWeight });
        await wrapper.setProps({ uncheckedText });
        expect(wrapper.find("[test-id='text']").attributes("style")).toContain(
          `font-weight: ${fontWeight};`,
        );
      });
    });

    it("applies fontSize correctly", () => {
      const fontSize = 16;
      runTestForValueProps(async (wrapper) => {
        await wrapper.setProps({ fontSize });
        await wrapper.setProps({ uncheckedText });
        expect(wrapper.find("[test-id='text']").attributes("style")).toContain(
          `font-size: ${fontSize}px;`,
        );
      });
    });
  });

  describe("Color", () => {
    it("applies checked background color", async () => {
      const checkedBg = "#123456";
      runTestForValueProps(
        async (wrapper) => {
          await wrapper.setProps({ checkedBg });
          expect(wrapper.find("[test-id='toggle']").attributes("style")).toContain(
            `background: ${hexToRgb(checkedBg)};`,
          );
        },
        { initialValue: true },
      );
    });

    it("applies unchecked background color", async () => {
      const uncheckedBg = "#654321";
      runTestForValueProps(async (wrapper) => {
        await wrapper.setProps({ uncheckedBg });
        expect(wrapper.find("[test-id='toggle']").attributes("style")).toContain(
          `background: ${hexToRgb(uncheckedBg)};`,
        );
      });
    });

    it("applies dot color", async () => {
      const dotColor = "#789012";
      runTestForValueProps(
        async (wrapper) => {
          await wrapper.setProps({ dotColor });
          expect(wrapper.find("[test-id='dot']").attributes("style")).toContain(
            `background: ${hexToRgb(dotColor)};`,
          );
        },
        { initialValue: true },
      );
    });

    it("applies checkedTextColor correctly", async () => {
      const checkedTextColor = "#abcdef";
      runTestForValueProps(
        async (wrapper) => {
          await wrapper.setProps({ checkedText });
          await wrapper.setProps({ checkedTextColor });
          expect(wrapper.find("[test-id='text']").attributes("style")).toContain(
            `color: ${hexToRgb(checkedTextColor)};`,
          );
        },
        { initialValue: true },
      );
    });

    it("applies uncheckedTextColor correctly", async () => {
      const uncheckedTextColor = "#fedcba";
      runTestForValueProps(async (wrapper) => {
        await wrapper.setProps({ uncheckedText });
        await wrapper.setProps({ uncheckedTextColor });
        expect(wrapper.find("[test-id='text']").attributes("style")).toContain(
          `color: ${hexToRgb(uncheckedTextColor)};`,
        );
      });
    });
  });

  describe("ARIA attributes", () => {
    it("should correctly set aria-label", async () => {
      runTestForValueProps(async (wrapper) => {
        await wrapper.setProps({ ariaLabel: "Test aria-label" });
        expect(wrapper.attributes("aria-label")).toBe("Test aria-label");
      });
    });

    it("should correctly set aria-readonly when disabled", async () => {
      runTestForValueProps(async (wrapper) => {
        await wrapper.setProps({ disabled: true });
        expect(wrapper.attributes("aria-readonly")).toBe("true");
      });
    });

    it("should correctly set aria-checked when checked", async () => {
      runTestForValueProps(
        async (wrapper) => {
          expect(wrapper.attributes("aria-checked")).toBe("true");
        },
        { initialValue: true },
      );
    });
  });

  describe("Interactions and Events", () => {
    it("emits correct events when clicked", async () => {
      runTestForValueProps(async (wrapper) => {
        // Initial state should be false
        expect(wrapper.emitted("update:modelValue")).toBeUndefined();
        expect(wrapper.emitted("click")).toBeUndefined();

        // First click
        await wrapper.trigger("click");
        expect(wrapper.emitted("click")).toHaveLength(1);
        expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([true]);

        // Second click
        await wrapper.trigger("click");
        expect(wrapper.emitted("click")).toHaveLength(2);
        expect(wrapper.emitted("update:modelValue")?.[1]).toEqual([false]);
      });
    });

    it("emits events on keyboard interaction", async () => {
      runTestForValueProps(async (wrapper) => {
        // Test Enter key
        await wrapper.trigger("keyup.enter");
        expect(wrapper.emitted("click")).toHaveLength(1);
        expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([true]);

        // Test Space key
        await wrapper.trigger("keyup.space");
        expect(wrapper.emitted("click")).toHaveLength(2);
        expect(wrapper.emitted("update:modelValue")?.[1]).toEqual([false]);
      });
    });

    it("does not emit events when disabled", async () => {
      runTestForValueProps(async (wrapper) => {
        await wrapper.setProps({ disabled: true });

        // Click attempt
        await wrapper.trigger("click");
        expect(wrapper.emitted("click")).toBeUndefined();
        expect(wrapper.emitted("update:modelValue")).toBeUndefined();

        // Keyboard attempt
        await wrapper.trigger("keyup.enter");
        expect(wrapper.emitted("click")).toBeUndefined();
        expect(wrapper.emitted("update:modelValue")).toBeUndefined();
      });
    });

    it("maintains correct event state through multiple toggles", async () => {
      runTestForValueProps(async (wrapper) => {
        // Multiple clicks
        for (let i = 0; i < 3; i++) {
          await wrapper.trigger("click");
          const expectedValue = i % 2 === 0;
          expect(wrapper.emitted("update:modelValue")?.[i]).toEqual([expectedValue]);
        }
        expect(wrapper.emitted("click")).toHaveLength(3);
      });
    });
  });
});
