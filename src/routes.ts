import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from './stores/auth'
import { storeToRefs } from 'pinia'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./routes/Homepage.vue')
    },
    {
      path: '/registration',
      name: 'Registration',
      component: () => import('./routes/Registration.vue'),
      beforeEnter: () => {
        // If user has already logged in, redirect to home page
        const { isLoggedIn } = storeToRefs(useAuthStore())
        if (isLoggedIn) {
          return { path: '/' }
        }
      }
    }
  ]
})

export default router
