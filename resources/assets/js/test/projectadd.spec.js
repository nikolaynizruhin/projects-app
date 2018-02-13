import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import axios from 'axios';
import moxios from 'moxios';
import sinon from 'sinon';
import ProjectAdd from '../components/ProjectAdd.vue';
import expect from 'expect';
import Vuex from 'vuex';

const localVue = createLocalVue()
localVue.use(Vuex)

describe('ProjectAdd', () => {
  it('add project with api', () => {
    moxios.install()
    const mutations = {
      addProjects: sinon.stub()
    }
    const store = new Vuex.Store({
      state: {
        projects: []
      },
      mutations
    })

    const wrapper = mount(ProjectAdd, { store, localVue })

    moxios.stubRequest('/api/projects', {
      status: 200,
      response: {
        id: 1,
        name: "Project Test"
      }
    })

    expect(wrapper.vm.name).toEqual('');
    wrapper.find('.btn-primary').trigger('click')

    moxios.wait(() => {
      expect(mutations.addProjects.calledOnce).toBe(true)
      done()
    });

    moxios.uninstall()
  });
});
