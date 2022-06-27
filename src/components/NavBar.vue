<script setup>
import {ref} from 'vue'

let pop = ref(false)
</script>

<template>
	<div>
		<var-app-bar title="title" title-position="center">
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
				<router-link to="/" v-ripple="{ color: '#ccc' }">Home</router-link>
				<router-link to="/about" v-ripple="{ color: '#ccc' }">About</router-link>
				<router-link to="/album" v-ripple="{ color: '#ccc' }">Album</router-link>
			</div>
		</var-popup>
	</div>
</template>

<style lang="scss">
	.menu {
		padding: 20px 0;
		width: 250px;

		a {
			display: block;
			padding: 10px 25px;
		}

		a:link, a:visited, a:hover {
			color: black;
			background-color: whitesmoke;
		}

		a:active {
			color: #2c3e50;
			background-color: whitesmoke;
		}
	}
</style>
