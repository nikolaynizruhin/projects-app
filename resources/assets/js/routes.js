import VueRouter from 'vue-router';

import ProjectList from './components/ProjectList.vue';
import ProjectAdd from './components/ProjectAdd.vue';
import ProjectView from './components/ProjectView.vue';
import ProjectEdit from './components/ProjectEdit.vue';

const routes = [
  { path: '/projects', component: ProjectList },
  { path: '/projects/add', component: ProjectAdd },
  { path: '/projects/:id', component: ProjectView },
  { path: '/projects/:id/edit', component: ProjectEdit }
];

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: ''
});

export default router;