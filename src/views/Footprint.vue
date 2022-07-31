<script setup>
import axios from '@/request'
import dayjs from 'dayjs'
import { ref, reactive } from 'vue'

let state = reactive({
    footprints: []
})

const getFootprints = async () => {
    const result = await axios.get('/footprint')
    if (result.data) {
        result.data.forEach(footprint => {
            footprint.date = dayjs.unix(footprint.date).format('YYYY-MM-DD')
        })
        result.data.reverse()
        state.footprints = result.data
    }
}

getFootprints()
</script>
<template>
	<div>
		<n-timeline>
			<n-timeline-item
					v-for="footprint in state.footprints"
					type="info"
					line-type="dashed">
				<template #header>
					<div class="date">{{ footprint.date }}</div>
				</template>
				<template #default>
					<div class="content" v-html="footprint.content"></div>
				</template>
			</n-timeline-item>
		</n-timeline>
	</div>
</template>
<style lang="scss" scoped>
	.n-timeline-item-content {
		background-color: white;
		margin-bottom: 15px;
		padding: 10px;
		border-radius: 10px;
	}
	.date {
		font-size: 12px;
		margin-top: 2px;
		margin-bottom: 10px;
		color: rgb(118, 124, 130);
	}
	.content {
		line-height: 1.6;
		text-align: justify;
		/*background: white;*/
		/*padding: 10px 10px 15px;*/
		/*border-radius: 5px;*/
	}
</style>
