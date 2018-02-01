import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import router from './routes';
import store from './store';

import NavBar from './components/NavBar.vue';

Vue.use(Vuex);
Vue.use(VueRouter);

Vue.component('nav-bar', NavBar);

const app = new Vue({
  store: new Vuex.Store(store),
  router,
  el: '#app'
});