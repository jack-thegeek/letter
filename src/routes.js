import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from './store/user'
import { storeToRefs } from 'pinia'
import dayjs from 'dayjs'

const routes = [
    {
        path: '/',
        name: 'home',
        meta: { title: '主页', icon: 'home' },
        component: () => import('./views/Home.vue')
    },
    {
        path: '/letter',
        name: 'letter',
        meta: { title: '情书', icon: 'favorite' },
        component: () => import('./views/Letter.vue')
    },
    {
        path: '/art',
        name: 'art',
        meta: { title: '画集', icon: 'style' },
        component: () => import('./views/Art.vue')
    },
    {
        path: '/footprint',
        name: 'footprint',
        meta: { title: '足迹', icon: 'explore' },
        component: () => import('./views/Footprint.vue')
    },
    {
        path: '/album',
        name: 'album',
        meta: { title: '相册', icon: 'photo_camera' },
        component: () => import('./views/Album.vue')
    },
    {
        path: '/lottery',
        name: 'lottery',
        meta: { title: '抽奖', icon: 'widgets' },
        component: () => import('./views/Lottery.vue')
    },
    {
        path: '/todo',
        name: 'todo',
        meta: { title: '愿望', icon: 'edit_calendar' },
        component: () => import('./views/Todo.vue')
    },
    {
        path: '/chatroom',
        meta: { title: '聊天', icon: 'call' },
        component: () => import('./views/Chatroom.vue')
    },
    {
        path: '/about',
        name: 'about',
        meta: { title: '关于', icon: 'help' },
        component: () => import('./views/About.vue')
    },
    {
        path: '/login',
        meta: { title: '登录' },
        component: () => import('./views/Login.vue')
    },
    {
        path: '/:path(.*)',
        component: () => import('./views/NotFound.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const userStore = useUserStore()
    const { jwtToken } = storeToRefs(userStore)
    if (to.meta.title) {
        document.title = to.meta.title
    }
    // 检查是否过期
    if (jwtToken.value) {
        const payload = jwtToken.value.split('.')[1]
        const exp = dayjs(payload.exp)
        const expire = dayjs().isAfter(exp)
        if (expire) userStore.clearToken()
    }
    if (to.path === '/login') {
        if (!jwtToken.value) {
            return next()
        } else {
            return next({ path: '/' })
        }
    }
    if (!jwtToken.value) {
        next({ path: '/login' })
    } else {
        next()
    }
})

router.afterEach(() => {
    // console.log('done')
})
export default router
