import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import axios from 'axios';
import moxios from 'moxios';
import sinon from 'sinon';
import ProjectList from '../components/ProjectList.vue';
import expect from 'expect';
import Vuex from 'vuex';

const localVue = createLocalVue()
localVue.use(Vuex)

describe('ProjectList', () => {
  it('gets projects from api', () => {
    moxios.install()
    const mutations = {
      getProjects: sinon.stub()
    }
    const store = new Vuex.Store({
      state: {
        projects: []
      },
      mutations
    })

    const wrapper = mount(ProjectList, { store, localVue })

    moxios.stubRequest('/api/projects', {
      status: 200,
      response: [
        {
          id: 1,
          name: "Project Test 1"
        },
        {
          id: 2,
          name: "Project Test 2"
        },
      ]
    })

    moxios.wait(() => {
      expect(mutations.getProjects.calledOnce).toBe(true)
      done()
    });

    moxios.uninstall()
  });

  it('remove project by api', () => {
    moxios.install()
    const mutations = {
      removeProjects: sinon.stub()
    }
    const store = new Vuex.Store({
      state: {
        projects: [
          {
            id: 1,
            name: 'Test'
          }
        ]
      },
      mutations
    })

    const wrapper = mount(ProjectList, { store, localVue })

    moxios.stubRequest('/api/projects\/\d+', {
      status: 200,
      response: {
        message: 'success'
      }
    })

    wrapper.find('button.btn-danger').trigger('click')

    moxios.wait(() => {
      expect(mutations.removeProjects.calledOnce).toBe(true)
      done()
    });

    moxios.uninstall()
  });
});