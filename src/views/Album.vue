<template>
    <div>
        <swiper :modules="[Virtual,Lazy]" :slides-per-view="1" :space-between="50" virtual>
            <swiper-slide
                    v-for="(slideContent, index) in slides"
                    :key="index"
                    :virtualIndex="index"
            >{{slideContent}}
            </swiper-slide>
        </swiper>
    </div>
</template>
<script setup>
    import {Virtual, Lazy} from 'swiper';
    import 'swiper/css';
    import 'swiper/css/lazy';
    import {Swiper, SwiperSlide} from 'swiper/vue';

    const slides = Array.from({length: 10}).map(
        (el, index) => `Slide ${index + 1}`
    );
</script>