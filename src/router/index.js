import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Gerentes from '../views/Gerentes.vue'
import NovoUsuario from '../views/NovoUsuario.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: '/gerentes',
    name: 'gerentes',
    component: Gerentes
  },
  {
    path: '/cadastre-se',
    name: 'novo.usuario',
    component: NovoUsuario
  }
]

const router = new VueRouter({
  routes
})

export default router
