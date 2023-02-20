import { createRouter, createWebHistory } from 'vue-router';
import MainGarden from '../components/pages/MainGarden.vue';
import GrowSpot from '../components/pages/GrowSpot.vue';

const routes = [
  {
    path: '/',
    name: 'MainGarden',
    component: MainGarden
  },
  {
    path: '/spot/:type',
    name: 'GrowSpot',
    component: GrowSpot
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;