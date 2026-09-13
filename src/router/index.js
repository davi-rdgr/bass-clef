import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: { layout: 'standart-layout' },
      component: () => import('../views/Home.vue')
    },
    {
      path: '/login',
      name: 'Login',
      meta: { layout: 'login-layout' },
      component: () => import('../views/Login.vue')
    }
  ],
})

export default router
