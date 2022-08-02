<script setup>
import axios from '@/request'
import { ref, reactive } from 'vue'
import 'swiper/css'
import 'swiper/css/lazy'
import 'swiper/css/pagination'
import { Lazy, Pagination, Virtual } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import dayjs from 'dayjs'

const lazyOpts = {
    loadPrevNext: true,
    loadOnTransitionStart: true
}

const paginationOpts = {
    type: 'fraction'
}

const modules = [Virtual, Lazy, Pagination]

let swiperRef = null
const onSwiper = (swiper) => {
    swiperRef = swiper
}
const page = ref('')
const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0)
}

let state = reactive({
    images: []
})

const getImages = async () => {
    const result = await axios.get('/album')
    if (result.data) {
        result.data.forEach(value => {
            value.date = dayjs(value.date).format('YYYY-MM-DD')
        })
        state.images = result.data
    }
}

getImages()
</script>
<template>
	<div class="full-width">
		<div class="jump">
			<var-input placeholder="跳转到" v-model="page"/>
			<var-button type="primary" round @click="slideTo(page)">
				<span class="material-icons">
					navigate_next
				</span>
			</var-button>
		</div>
		<swiper :pagination="paginationOpts" :lazy="lazyOpts" :modules="modules" :slides-per-view="1"
		        @swiper="onSwiper" virtual>
			<swiper-slide :key="index" :virtualIndex="index" v-for="(image, index) in state.images">
				<div class="img-box">
					<img :data-src="image.url" alt="" class="swiper-lazy pic">
				</div>
				<div class="info">
					<div>{{ image.title }}</div>
					<div class="content">{{ image.content }}</div>
					<div class="date">{{ image.date }}</div>
				</div>
				<div class="swiper-lazy-preloader"></div>
			</swiper-slide>
		</swiper>


	</div>
</template>
<style lang="scss" scoped>
	.img-box {
		width: 100vw;
		min-height: 0.75vw;
	}
	.pic {
		width: 100%;
		height: auto;
		object-fit: fill;
	}

	.jump {
		padding: 5px 20px;
		margin-bottom: 20px;
		display: flex;
		justify-content: start;
		align-items: flex-end;

		.page-label {
			padding: 5px 20px 5px 5px;
		}
	}

	.var-button--round {
		height: var(--button-normal-height);
		margin-left: 10px;
	}

	.var-input {
		width: 80%;
	}

	.info {
		background: white;
		padding: 16px;

		.content {
			line-height: 1.8;
		}

		.date {
			color: #ddd;
			text-align: right;
			margin-top: 15px;
		}

	}
</style>
