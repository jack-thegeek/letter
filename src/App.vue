<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

let loading = ref(true)
const router = useRouter()
router.beforeEach(() => {
    loading.value = true
})
router.afterEach(() => {
    loading.value = false
})

</script>

<template>
	<div>
		<NavBar/>
		<var-loading :loading="loading">
			<template #description>
				努力加载中
			</template>
			<div id="container">
				<router-view v-slot="{ Component }">
					<transition mode="out-in" name="slide">
						<component :is="Component"/>
					</transition>
				</router-view>
			</div>
		</var-loading>
	</div>
</template>
