<script setup>

</script>

<template>
    <NavBar/>
    <div id="container">
        <!--<router-view/>-->
        <router-view v-slot="{ Component }">
            <transition name="slide" mode="out-in">
                <component :is="Component"/>
            </transition>
        </router-view>
    </div>
</template>

<style lang="scss">
    #container {
        padding: 15px;
    }
</style>