import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Jobs from '../views/Jobs/Jobs.vue'
import Jobdetails from '../views/Jobs/Jobdetails.vue'
import Pagenotfound from '../views/Pagenotfound'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component : About
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component : Jobs
  },
  {
    path: '/jobs/:id',
    name: 'Jobdetails',
    component : Jobdetails,
    props:true
  },
  //404
  {
    path:'/:catchAll(.*)',
    name:'PageNotFound',
    component : Pagenotfound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
