import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import VueToggles from '../components/VueToggles.vue';

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
    : null;
};

describe('VueToggles', () => {
  it('toggles when clicked', async () => {
    const wrapper = mount(VueToggles, {
      props: {
        value: false
      }
    });
    await wrapper.trigger('click');
  });

  it('does not toggle when disabled', async () => {
    const wrapper = mount(VueToggles, {
      props: {
        value: false,
        disabled: true
      }
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted().click).toBeUndefined();
  });

  it('handles width prop correctly', () => {
    const width = 100;
    const wrapper = mount(VueToggles, {
      props: {
        value: false,
        width
      }
    });
    expect(wrapper.attributes('style')).toContain(`width: ${width}px;`);
  });

  it('handles height prop correctly', () => {
    const height = 30;
    const wrapper = mount(VueToggles, {
      props: {
        value: false,
        height
      }
    });
    expect(wrapper.attributes('style')).toContain(`height: ${height}px;`);
  });

  it('displays checked text correctly', () => {
    const checkedText = 'On';
    const wrapper = mount(VueToggles, {
      props: {
        value: true,
        checkedText
      }
    });
    expect(wrapper.text()).toBe(checkedText);
  });

  it('displays unchecked text correctly', () => {
    const uncheckedText = 'Off';
    const wrapper = mount(VueToggles, {
      props: {
        value: false,
        uncheckedText
      }
    });
    expect(wrapper.text()).toBe(uncheckedText);
  });

  it('applies checked background color', async () => {
    const checkedBg = '#123456';
    const wrapper = mount(VueToggles, {
      props: {
        value: true,
        checkedBg
      }
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.attributes('style')).toContain(`background: ${hexToRgb(checkedBg)};`);
  });
});
