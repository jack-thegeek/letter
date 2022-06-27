<template>
    <div>
        <swiper :modules="modules" :slides-per-view="1" virtual lazy>
            <swiper-slide
                    v-for="(src, index) in imgs"
                    :key="index"
                    :virtualIndex="index">
                <img v-bind:data-src="src" alt="" class="swiper-lazy pic">
                <div class="description">
                    666
                </div>
                <div class="swiper-lazy-preloader"></div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script setup>
    import {Virtual, Lazy} from 'swiper';
    import 'swiper/css';
    import 'swiper/css/lazy';
    import {Swiper, SwiperSlide} from 'swiper/vue';

    const modules = [Virtual, Lazy]
    const imgs = [
        "https://swiperjs.com/demos/images/nature-1.jpg",
        "https://swiperjs.com/demos/images/nature-2.jpg",
        "https://swiperjs.com/demos/images/nature-3.jpg",
        "https://swiperjs.com/demos/images/nature-4.jpg",
        "https://swiperjs.com/demos/images/nature-5.jpg",
        "https://swiperjs.com/demos/images/nature-6.jpg",
        "https://swiperjs.com/demos/images/nature-7.jpg",
        "https://swiperjs.com/demos/images/nature-8.jpg",
    ]
</script>
<style lang="scss">
    .pic {
        width: 100%;
        height: 150px;
        object-fit: cover;
    }
    .description {

    }
</style>