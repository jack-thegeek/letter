<script setup>
	import {ref, defineProps} from 'vue'

	// defineEmits和defineProps在<script setup>中自动可用，无需导入
	const props = defineProps({
		title: {
			type: String,
			default: 'default title'
		},
	})

	let pop = ref(false)

</script>

<template>
	<div>
		<var-app-bar :title="title" title-position="center">
			<template #left>
				<var-button
						round
						text
						color="transparent"
						text-color="#fff"
						@click="pop=true">
					<var-icon name="menu" :size="24"/>
				</var-button>
			</template>
		</var-app-bar>
		<var-popup v-model:show="pop" position="left">
			<div class="menu" @click="pop=false">
				<router-link to="/" v-ripple>Home</router-link>
				<router-link to="/about" v-ripple>About</router-link>
				<router-link to="/album" v-ripple>Album</router-link>
				<router-link to="/chatroom" v-ripple>Chat</router-link>
			</div>
		</var-popup>
	</div>
</template>

<style lang="scss" scoped>
	.menu {
		padding: 20px 0;
		width: 250px;

		a {
			display: block;
			padding: 10px 25px;
		}

		a:link, a:hover {
			color: var(--color-text);
			background-color: whitesmoke;
		}

		a:visited, a:active {
			color: var(--color-text);
			background-color: whitesmoke;
		}
	}
</style>
