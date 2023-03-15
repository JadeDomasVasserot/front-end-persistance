import { createRouter, createWebHistory } from 'vue-router'
import store from "@/store";

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
      path: '/articles/edit/:idArticle',
      name: 'articles modify',
      component: () => import('../views/ModifyArticleView.vue')
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
    {
      path: '/facture/edit/:id',
      name: 'Edit Facture',
      component: () => import('../views/ModifyFactureView.vue')
    },
    {
      path: '/addFacture',
      name: 'Create a Facture', 
      component: () => import('../views/AddFactureView.vue')
    },
    {
      path: '/addArticleToFacture',
      name: 'Put Article in Facture', 
      component: () => import('../views/AddArticleToFactureView.vue')
    },
  ]
})
router.beforeEach(async (to, from) => {
  const authenticated = store.getters.getUser
  const token = store.getters.getToken
  // redirect the user to login page if he is not authenticated
  if (authenticated === '' && token === ''
      && to.name !== 'login'
      && to.name !== 'register') {
    return { name: 'login' }
  }
})
export default router
