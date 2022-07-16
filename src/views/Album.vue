<script setup>
import axios from '@/request'
import {reactive, ref} from 'vue'
import {Virtual, Lazy} from 'swiper'
import 'swiper/css'
import 'swiper/css/lazy'
import {Swiper, SwiperSlide} from 'swiper/vue'

const modules = [Virtual, Lazy]
let state = reactive({
	images: []
})

const getImages = async () => {
    const result = await axios.get('/album')
    if (result.data) {
        state.images = result.data
    }
}

getImages()
</script>
<template>
	<div>
		<swiper :modules="modules" :slides-per-view="1" virtual lazy>
			<swiper-slide
					v-for="(image, index) in state.images"
					:key="index"
					:virtualIndex="index">
				<img v-bind:data-src="image.src" alt="" class="swiper-lazy pic">
				<div class="description">
					{{image.title}}
				</div>
				<div class="description">
					{{image.date}}
				</div>
				<div class="description">
					{{image.content}}
				</div>
				<div class="swiper-lazy-preloader"></div>
			</swiper-slide>
		</swiper>
	</div>
</template>
<style lang="scss">
	.pic {
		width: 100%;
		height: 150px;
		object-fit: cover;
	}

	.description {

	}
</style>
