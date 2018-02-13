import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import axios from 'axios';
import moxios from 'moxios';
import ProjectView from '../components/ProjectView.vue';
import expect from 'expect';

describe('ProjectView', () => {
  it('gets project from api', () => {
    moxios.install()

    const $route = {
      params: {
        id: 1
      }
    }

    const wrapper = mount(ProjectView, {
      mocks: {
        $route
      }
    })

    moxios.stubRequest('/api/projects/1', {
      status: 200,
      response: {
        name: "Project Test"
      }
    })

    expect(wrapper.vm.project).toEqual({});

    moxios.uninstall()
  });
});