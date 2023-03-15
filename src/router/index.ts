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
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/CreateArticle',
      name: 'Create Article',
      component: () => import('../views/CreateArticleView.vue')
    },
    {
      path: '/articles',
      name: 'articles list',
      component: () => import('../views/ListArticleView.vue')
    },
    {
      path: '/factures',
      name: 'factures list',
      component: () => import('../views/ListFactureView.vue')
    },
    {
      path: '/facture/:id',
      name: 'One Facture',
      component: () => import('../views/AfficherFactureView.vue')
    },
  ]
})

export default router
