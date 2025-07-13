import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Map from '../views/Map.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/map', component: Map },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
