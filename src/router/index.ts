import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/articles',
      name: 'articles list',
      component: () => import('../views/ListArticleView.vue')
    }
  ]
})

export default router
