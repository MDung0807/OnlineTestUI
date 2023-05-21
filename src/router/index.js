
import { createRouter, createWebHistory } from 'vue-router'
import LoginProj from '../views/LoginProj.vue'
import HomeProj from '../views/Home.vue'

const routes= [
    {
        path:'/login',
        name: 'Login',
        component: LoginProj
    },
    {
        path:'',
        name: 'Home',
        component: HomeProj
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
//   scroll to top after every route change
  router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    next();
  });
  export default router
  