import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import VueToggles from '../components/VueToggles.vue';

describe('VueToggles', () => {
  it('renders correctly', () => {
    const wrapper = mount(VueToggles, {
      props: {
        value: false
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

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
    expect(wrapper.emitted()).not.toHaveProperty('toggle-state');
  });
});
