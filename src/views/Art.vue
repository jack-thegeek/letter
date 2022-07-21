<script setup>
import axios from '@/request'
import {reactive, ref} from 'vue'
import 'swiper/css'
import 'swiper/css/lazy'
import {Swiper, SwiperSlide} from 'swiper/vue'
import {Virtual, Lazy, Zoom} from 'swiper'

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
		<swiper @swiper="onSwiper" :modules="modules" :slides-per-view="1" :lazy="lazyOptions" virtual zoom>
			<swiper-slide
					v-for="(image, index) in state.images"
					:key="index"
					:virtualIndex="index">
				<div class="swiper-zoom-container">
					<img :data-src="image.url" alt="" class="swiper-lazy pic">
				</div>
				<div class="swiper-lazy-preloader"></div>
			</swiper-slide>
		</swiper>
	</div>
</template>
<style scoped lang="scss">
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
