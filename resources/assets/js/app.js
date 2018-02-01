import Vue from 'vue';

import MyComponent from './components/MyComponent.vue';

Vue.component('my-component', MyComponent);

const app = new Vue({
  el: '#app'
});