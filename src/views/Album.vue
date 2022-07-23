<script setup>
import axios from '@/request'
import { reactive } from 'vue'
import { Lazy, Virtual } from 'swiper'
import 'swiper/css'
import 'swiper/css/lazy'

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
		<swiper :modules="modules" :slides-per-view="1" lazy virtual>
			<swiper-slide
					:key="index"
					:virtualIndex="index"
					v-for="(image, index) in state.images">
				<img alt="" class="swiper-lazy pic" v-bind:data-src="image.src">
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
