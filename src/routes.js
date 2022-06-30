import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        meta: {title: 'Home'},
        component: () => import('./views/Home.vue'),
    },
    {
        path: '/about',
        meta: {title: 'About'},
        component: () => import('./views/About.vue'),
    },
    {
        path: '/album',
        meta: {title: 'Album'},
        component: () => import('./views/Album.vue'),
    },
    {
        path: '/chatroom',
        meta: {title: 'Chatroom'},
        component: () => import('./views/Chatroom.vue'),
    },
    {
        path: '/:path(.*)',
        component: () => import('./views/NotFound.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title
    next()
})

export default router
