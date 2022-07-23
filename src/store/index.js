import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const store = createPinia()
store.use(createPersistedState({
    storage: window.localStorage,
    beforeRestore: context => {
    },
    afterRestore: context => {
    },
    serializer: {
        serialize: JSON.stringify,
        deserialize: JSON.parse
    }
}))

export default store
