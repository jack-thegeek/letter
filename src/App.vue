<script setup>
    import NavBar from '@/components/NavBar.vue'
</script>

<template>
    <NavBar />
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>

    <!--<router-view/>-->
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component"/>
        </transition>
    </router-view>
</template>
