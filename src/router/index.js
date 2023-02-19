import { createRouter, createWebHistory } from 'vue-router';
import MainGarden from '../components/pages/MainGarden.vue';

const routes = [
  {
    path: '/',
    name: 'MainGarden',
    component: MainGarden
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;