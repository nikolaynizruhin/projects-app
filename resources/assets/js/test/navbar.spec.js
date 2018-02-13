import { mount } from '@vue/test-utils';
import NavBar from '../components/NavBar.vue';
import expect from 'expect';

describe('NavBar', () => {
  it('contains a links', () => {
    const wrapper = mount(NavBar)
    expect(wrapper.find('router-link.navbar-brand').text()).toMatch('Projects App')
  });
});