import {defineStore} from 'pinia'
import {ref, reactive} from 'vue'

export const useUserStore = defineStore('user', {
    // state: () => ({
    //     themeIndex: ref(0),
    //     jwtToken: ref('')
    // }),
    state: () => {
        return {
            themeIndex: ref(0),
            jwtToken: ref('')
        }
    },
    actions: {
        setToken(token) {
            this.jwtToken = token
        },
        setTheme(index){
            console.log(index);
            this.themeIndex = index
        }
    },
    persist: true
})