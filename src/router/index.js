import vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Detail from '../views/Detail.vue'
import Logout from '../views/auth/logout.vue'
import Activate from '../views/Activate.vue'

vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    name: 'Activate',
    component: Activate
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:id_book',
    name: 'Detail',
    component: Detail,
    props: true
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
export default router
