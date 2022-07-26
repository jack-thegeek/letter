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
					title=""
					:content="footprint.content"
					:time="footprint.date"
					line-type="dashed"/>
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
</style>
