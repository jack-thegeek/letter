import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', {
    state: () => ({
        themeIndex: ref(0),
        jwtToken: ref(''),
        user_id: ref('')
    }),
    actions: {
        setToken(token) {
            this.jwtToken = token
        },
        clearToken() {
            this.jwtToken = ''
        },
        setUserId(id) {
            this.user_id = id
        },
        setTheme(index) {
            this.themeIndex = index
        }
    },
    persist: true
})
