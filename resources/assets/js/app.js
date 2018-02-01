import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './routes';
import NavBar from './components/NavBar.vue';

Vue.use(VueRouter);

Vue.component('nav-bar', NavBar);

const app = new Vue({
  router,
  el: '#app'
});