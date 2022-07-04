<script setup>
import {ref, defineProps} from 'vue'
import {StyleProvider} from '@varlet/ui'
import configs from '../configs'
import {storeToRefs} from 'pinia'
import {useUserStore} from '../stores'

const userStore = useUserStore()
const { themeIndex } = storeToRefs(userStore)

// defineEmits和defineProps在<script setup>中自动可用，无需导入
const props = defineProps({
    title: {
        type: String,
        default: 'Letter'
    }
})

let pop = ref(false)
let theme = ref(false)
const themes = ref(configs.themes)

const init = () => {
    StyleProvider(themes.value[themeIndex.value].css)
}

init()

const toggleTheme = (index) => {
    StyleProvider(themes.value[index].css)
	userStore.setTheme(index)
}

</script>

<template>
	<div>
		<var-app-bar :title="title" title-position="center">
			<template #left>
				<var-button round text color="transparent" text-color="#fff" @click="pop = !pop">
					<var-icon name="menu" :size="25"/>
				</var-button>
			</template>
			<template #right>
				<var-menu :offset-y="45" :offset-x="-135" v-model:show="theme">
					<var-button round text color="transparent" text-color="#fff" @click="theme = !theme">
						<i class="material-icons">palette</i>
					</var-button>
					<template #menu>
						<div class="theme-list">
							<div @click="toggleTheme(index)" v-for="(theme, index) in themes">
								<div v-ripple class="theme" :style="{'--bgColor':theme.code}">{{theme.name}}</div>
							</div>
						</div>
					</template>
				</var-menu>
				<var-button round text color="transparent" text-color="#fff" @click="pop = !pop">
					<i class="material-icons">settings</i>
				</var-button>
			</template>
		</var-app-bar>
		<var-popup v-model:show="pop" position="left">
			<div class="popup-box">
				<var-image ripple width="100%" fit="cover" src="https://varlet-varletjs.vercel.app/cat.jpg"/>
				<div class="menu-list" @click="pop=false">
					<router-link to="/" v-ripple>
						<i class="material-icons">home</i><span class="menu">主 页</span>
					</router-link>
					<router-link to="/letter" v-ripple>
						<i class="material-icons">description</i><span class="menu">情 书</span>
					</router-link>
					<router-link to="/footprint" v-ripple>
						<i class="material-icons">explore</i><span class="menu">足 迹</span>
					</router-link>
					<router-link to="/art" v-ripple>
						<i class="material-icons">style</i><span class="menu">画 集</span>
					</router-link>
					<router-link to="/album" v-ripple>
						<i class="material-icons">photo_camera</i><span class="menu">相 册</span>
					</router-link>
					<router-link to="/chatroom" v-ripple>
						<i class="material-icons">call</i><span class="menu">聊 天</span>
					</router-link>
					<router-link to="/about" v-ripple>
						<i class="material-icons">help</i><span class="menu">关 于</span>
					</router-link>
				</div>
				<var-divider class="divider">
					<span>power by Jack</span>
				</var-divider>
			</div>
		</var-popup>
	</div>
</template>

<style lang="scss" scoped>
	.popup-box {
		width: 250px;
	}

	.menu-list {
		padding: 20px 5px 20px 0;

		a {
			display: block;
			padding: 10px 25px;
			border: 1px solid transparent;
			border-left: none;
			border-radius: 0 25px 25px 0;
		}

		a:link, a:hover, a:visited, a:active {
			color: var(--color-text);
		}

		.router-link-exact-active {
			color: var(--color-primary);
			background: var(--menu-bg);
			border-color:var(--menu-bg);
		}

		.menu {
			padding-left: 20px;
		}
	}

	.divider {
		position: absolute;
		bottom: 3vh;

		span {
			margin: 0 10px;
		}
	}

	i, span {
		vertical-align: middle;
	}

	.theme-list {
		background: var(--color-body);

		.theme {
			margin: 15px 10px;
			color: white;
			line-height: 35px;
			padding-left: 10px;
			background: var(--bgColor);
			border-radius: 5px;
			width: 35vw;
		}
	}
</style>
