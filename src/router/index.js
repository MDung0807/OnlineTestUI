import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/LoginProj.vue'

const routes= [
    {
        path:'/login',
        name: 'Login',
        comments: Login
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  //scroll to top after every route change
  router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    next();
  });
  
  export default router
  