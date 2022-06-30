<script setup>
    import NavBar from './components/NavBar.vue'
    import {useRoute} from 'vue-router'
    import {ref, watch} from 'vue'

    const route = useRoute()

    let title = ref(route.meta.title)
    watch(() => route.meta.title,
        async newTitle => {
            title.value = newTitle
        }
    )
</script>

<template>
    <div>
        <NavBar :title="title"/>
        <div id="container">
            <!--<router-view/>-->
            <router-view v-slot="{ Component }">
                <transition name="slide" mode="out-in">
                    <component :is="Component"/>
                </transition>
            </router-view>
        </div>
    </div>
</template>

<style lang="scss">
    #container {
        padding: 15px;
    }
</style>