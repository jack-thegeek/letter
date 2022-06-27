<script setup>

</script>

<template>
    <NavBar />
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/album">Album</router-link>

    <!--<router-view/>-->
    <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
            <component :is="Component"/>
        </transition>
    </router-view>
</template>
