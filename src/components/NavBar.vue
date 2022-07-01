<script setup>
    import {ref, defineProps} from 'vue'
    import {StyleProvider} from '@varlet/ui'

    // defineEmits和defineProps在<script setup>中自动可用，无需导入
    const props = defineProps({
        title: {
            type: String,
            default: 'Letter'
        },
    })

    let pop = ref(false)
    let theme = ref(false)
    let styleVars = null

    const themes = ref([
        {
            name: 'gray',
            css: {
                '--color-primary': '#6374ae'
            }
        },
        {
            name: 'brown',
            css: {
                '--color-primary': '#c4544a'
            }
        }
    ])

    const toggleTheme = (index) => {
        StyleProvider(themes.value[index].css)
    }

</script>

<template>
    <div>
        <var-app-bar :title="title" title-position="center">
            <template #left>
                <var-button round text color="transparent" text-color="#fff" @click="pop = !pop">
                    <var-icon name="menu" :size="25"/>
                </var-button>
            </template>
            <template #right>
                <var-menu :offset-y="43" :offset-x="-35" v-model:show="theme">
                    <var-button round text color="transparent" text-color="#fff" @click="theme = !theme">
                        <i class="material-icons">palette</i>
                    </var-button>
                    <template #menu>
                        <div class="menu-list">
                            <var-cell v-ripple @click="toggleTheme(index)" v-for="(theme, index) in themes">
                                {{theme.name}}
                            </var-cell>
                        </div>
                    </template>
                </var-menu>

            </template>
        </var-app-bar>
        <var-popup v-model:show="pop" position="left">
            <div class="menu" @click="pop=false">
                <router-link to="/" v-ripple>Home</router-link>
                <router-link to="/about" v-ripple>About</router-link>
                <router-link to="/album" v-ripple>Album</router-link>
                <router-link to="/chatroom" v-ripple>Chat</router-link>
            </div>
        </var-popup>
    </div>
</template>

<style lang="scss" scoped>
    .menu {
        padding: 20px 0;
        width: 250px;

        a {
            display: block;
            padding: 10px 25px;
        }

        a:link, a:hover {
            color: var(--color-text);
            background-color: whitesmoke;
        }

        a:visited, a:active {
            color: var(--color-text);
            background-color: whitesmoke;
        }
    }

    .menu-list {
        background: var(--color-body);
    }
</style>
