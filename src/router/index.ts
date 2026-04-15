import App from '@/App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Administrador from '@/views/Administrador.vue'
import NotFound from '@/views/NotFound.vue'
import Clientes from '@/views/Clientes.vue'
import Productos from '@/views/Productos.vue'
import Reportes from '@/views/Reportes.vue'
import Configuracion from '@/views/Configuracion.vue'
import Pedidos from '@/views/Pedidos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      alias: '/Inicio',

      component: Home,
    },
    {
      path: '/administrador',
      name: 'administrador',
      component: Administrador,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: Clientes,
    },
    {
      path: '/productos',
      name: 'productos',
      component: Productos,
    },
    {
      path: '/reportes',
      name: 'reportes',
      component: Reportes,
    },
    {
      path: '/conf',
      name: 'configuracion',
      component: Configuracion,
    },
    {
      path: '/pedidos',
      name: 'pedidos',
      component: Pedidos,
    },
  ],
})

export default router
