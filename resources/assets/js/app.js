import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './routes';
import MyComponent from './components/MyComponent.vue';

Vue.use(VueRouter);

Vue.component('my-component', MyComponent);

const app = new Vue({
  router,
  el: '#app'
});