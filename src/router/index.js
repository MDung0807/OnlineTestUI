
import { createRouter, createWebHistory } from 'vue-router'
import LoginProj from '../views/LoginProj.vue'
import HomeProj from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import Register from '../views/Register.vue'
import ImageBox from '../components/ImageBox.vue'
import FormInput from '../components/Form.vue'
import TestProj from '../views/Test.vue'
import SubjectView from "@/components/SubjectView";
import ProfileClient from '../views/ProfileClient.vue'
import SubjectAdmin from '../views/admin/SubjectAdmin.vue'
import HomeAdmin from '../views/admin/HomeAdmin.vue'
import TopicAdmin from '../views/admin/TopicAdmin.vue'
import chatApp from '../views/Chat.vue'

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
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/image',
      component: ImageBox
    },
    {
      path:'/form',
      component: FormInput 
    },
    {
      path:'/test',
      component: TestProj
    },
    {
        name: 'Subject',
        path: '/subject',
        component: SubjectView
    },
    {
        name: 'ProfileClient',
        path: '/profile',
        component: ProfileClient
    },
    {
      name: 'HomeAdmin',
      path: '/admin',
      component: HomeAdmin
    },
    {
      path: '/admin/addSubject',
      name: 'AddSubject',
      component: SubjectAdmin
    },
    {
      path: '/admin/topics',
      name: 'topicAdmin',
      component: TopicAdmin
    },
    {
      path: '/chat',
      name: 'ChatApp',
      component: chatApp
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
  