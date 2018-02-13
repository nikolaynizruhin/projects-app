import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import axios from 'axios';
import moxios from 'moxios';
import sinon from 'sinon';
import ProjectEdit from '../components/ProjectEdit.vue';
import expect from 'expect';
import Vuex from 'vuex';

const localVue = createLocalVue()
localVue.use(Vuex)

describe('ProjectEdit', () => {
  it('edit project with api', () => {
    moxios.install()
    const $route = {
      params: {
        id: 1
      }
    }
    const mutations = {
      editProject: sinon.stub()
    }
    const store = new Vuex.Store({
      state: {
        projects: []
      },
      mutations
    })

    const wrapper = mount(ProjectEdit, {
      store,
      localVue,
      mocks: {
        $route
      }
    });

    moxios.stubRequest('/api/projects\/\d+', {
      status: 200,
      response: {
        id: 1,
        name: "Project Test"
      }
    })

    expect(wrapper.vm.name).toEqual('');
    wrapper.find('.btn-primary').trigger('click')

    moxios.wait(() => {
      expect(mutations.editProject.calledOnce).toBe(true)
      done()
    });

    moxios.uninstall()
  });
});
