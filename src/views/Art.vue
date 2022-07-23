<script setup>
import axios from '@/request'
import { reactive } from 'vue'
import 'swiper/css'
import 'swiper/css/lazy'
import { Lazy, Virtual, Zoom } from 'swiper'

const lazyOptions = {
    loadPrevNext: true,
    loadOnTransitionStart: true
}

const modules = [Virtual, Lazy, Zoom]

let swiperRef = null
const onSwiper = (swiper) => {
    swiperRef = swiper
    // swiper.slideNext()
    // swiper.slideTo(80)
}

const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0)
}

let state = reactive({
    images: []
})

const getImages = async () => {
    const result = await axios.get('/art')
    if (result.data) {
        state.images = result.data
    }
}

getImages()
</script>
<template>
	<div class="full-width">
		<swiper :lazy="lazyOptions" :modules="modules" :slides-per-view="1" @swiper="onSwiper" virtual zoom>
			<swiper-slide
					:key="index"
					:virtualIndex="index"
					v-for="(image, index) in state.images">
				<div class="swiper-zoom-container">
					<img :data-src="image.url" alt="" class="swiper-lazy pic">
				</div>
				<div class="swiper-lazy-preloader"></div>
			</swiper-slide>
		</swiper>
	</div>
</template>
<style lang="scss" scoped>
	.pic {
		width: 100%;
		height: auto;
		object-fit: fill;
	}

	.description {

	}

	.full-width {
		margin: 25% -15px;
	}
</style>
