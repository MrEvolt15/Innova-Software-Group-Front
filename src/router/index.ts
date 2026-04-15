import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Administrador from '@/views/Administrador.vue'
import NotFound from '@/views/NotFound.vue'
import Clientes from '@/views/Clientes.vue'
import Productos from '@/views/Productos.vue'
import Reportes from '@/views/Reportes.vue'
import Configuracion from '@/views/Configuracion.vue'
import Pedidos from '@/views/Pedidos.vue'
import AppShell from '@/layouts/AppShell.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/app',
      component: AppShell,
      children: [
        {
          path: '',
          redirect: '/app/home',
        },
        {
          path: 'home',
          name: 'home',
          component: Home,
          meta: { panel: 'default' },
        },
        {
          path: 'inicio',
          redirect: '/app/home',
        },
        {
          path: 'pedidos',
          name: 'pedidos',
          component: Pedidos,
          meta: { panel: 'default' },
        },
        {
          path: 'clientes',
          name: 'clientes',
          component: Clientes,
          meta: { panel: 'default' },
        },
        {
          path: 'productos',
          name: 'productos',
          component: Productos,
          meta: { panel: 'default' },
        },
        {
          path: 'reportes',
          name: 'reportes',
          component: Reportes,
          meta: { panel: 'default' },
        },
        {
          path: 'conf',
          name: 'configuracion',
          component: Configuracion,
          meta: { panel: 'default' },
        },
      ],
    },
    {
      path: '/administrador',
      name: 'administrador',
      component: Administrador,
    },
    {
      path: '/',
      redirect: '/app/home',
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    },
  ],
})

export default router
