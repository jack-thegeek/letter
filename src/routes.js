import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        meta: {title: '主页'},
        component: () => import('./views/Home.vue'),
    },
    {
        path: '/letter',
        meta: {title: '情书'},
        component: () => import('./views/Letter.vue'),
    },
    {
        path: '/footprint',
        meta: {title: '足迹'},
        component: () => import('./views/Footprint.vue'),
    },
    {
        path: '/art',
        meta: {title: '画集'},
        component: () => import('./views/Art.vue'),
    },
    {
        path: '/album',
        meta: {title: '相册'},
        component: () => import('./views/Album.vue'),
    },
    {
        path: '/chatroom',
        meta: {title: '聊天'},
        component: () => import('./views/Chatroom.vue'),
    },
    {
        path: '/about',
        meta: {title: '关于'},
        component: () => import('./views/About.vue'),
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
