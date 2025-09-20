import { useAuthStore } from './../stores/auth/index';
import { createRouter, createWebHistory } from 'vue-router'
import {routes} from './routes/index.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
router.beforeEach((to, from) => {
const authStore = useAuthStore()
  if (to.meta.requireAuth && !authStore.IsLoggedIn) {
    return { name: 'signin' }
  }
if (to.meta.guestOnly  && authStore.IsLoggedIn) {
    return { path: '/' }
  }

})
export default router
