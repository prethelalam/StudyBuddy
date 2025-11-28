import { createRouter, createWebHistory } from 'vue-router'


// creating routes to the various tabs for nav bar
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/Home.vue'), // dynamic routing
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../views/Dashboard.vue'), //this links to the actual page (dynamic path)
    },
    {
      path: '/quiz',
      name: 'Quiz',
      component: () => import('../views/Quiz.vue'),
    },
    {
      path: '/profile-auth',
      name: 'ProfileAuth',
      component: () => import('../views/ProfileAuth.vue'),
    },
    {
      path: '/profile-setup',
      name: 'ProfileSetup',
      component: () => import('../views/ProfileSetup.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
    }
  ],
})

export default router
