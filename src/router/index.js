import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test1',
    name: 'Test',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/test1.vue')
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import(/* webpackChunkName: "about" */ '../views/table.vue')
  },
  {
    path: '/Bootstraptest',
    name: 'Bootstraptest',
    component: () => import(/* webpackChunkName: "about" */ '../views/Bootstraptest.vue')
  },
  {
    path: '/charts',
    name: 'charts',
    component: () => import(/* webpackChunkName: "about" */ '../views/charts.vue')
  },
  {
    path: '/Listdemo',
    name: 'Listdemo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Listdemo.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
