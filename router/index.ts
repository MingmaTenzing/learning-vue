import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import JobsView from '../views/JobsView.vue'
import NotFound from '../views/NotFound.vue'
import SingleJobView from '../views/SingleJobView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },

    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
    },

    {
      path: '/jobs/:id',
      name: 'Job View',
      component: SingleJobView,
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'Not Found',
      component: NotFound,
    },
  ],
})

export default router
