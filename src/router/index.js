import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/async',
    name: 'async',
    component: () => import(/* webpackChunkName: "about" */ '../views/async.vue')
  },
  {
    path: '/arr',
    name: 'arr',
    component: () => import(/* webpackChunkName: "about" */ '../views/arr.vue')
  },
  {
    path: '/css',
    name: 'css',
    component: () => import(/* webpackChunkName: "about" */ '../views/css.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
