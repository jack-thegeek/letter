import { createRouter, createWebHistory } from 'vue-router'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
const routes = [
  {path: '/', meta: {title: 'Home'}, component: import('./views/Home.vue'),},
  {
    path: '/about', meta: {title: 'About'}, component: import('./views/About.vue'),
  },
  {
    path: '/album', meta: {title: 'Album'}, component: import('./views/Album.vue'),
  },
    {
    path: '/chatroom', meta: {title: 'Chatroom'}, component: import('./views/Chatroom.vue'),
  },
  { path: '/:path(.*)', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
