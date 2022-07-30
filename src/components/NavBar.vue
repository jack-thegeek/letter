<script setup>
import { defineProps, ref } from 'vue'
import { StyleProvider } from '@varlet/ui'
import configs from '../configs'
import { storeToRefs } from 'pinia'
import { useUserStore } from '../store/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const { themeIndex } = storeToRefs(userStore)
const router = useRouter()
const routes = router.getRoutes()
let menu = ref([])
routes.forEach((route) => {
    if (route.name) {
        menu.value.push({ title: route.meta.title, icon: route.meta.icon, path: route.path })
    }
})

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
    const style = themes.value[themeIndex.value] ? themes.value[themeIndex.value].css : themes.value[0].css
    const css = Object.assign({}, style, configs.base_theme);
    StyleProvider(css)
}

init()

const toggleTheme = (index) => {
    StyleProvider(themes.value[index].css)
    userStore.setTheme(index)
}

const logout = () => {
    userStore.clearToken()
    router.push('/login')
}

</script>

<template>
	<div>
		<var-app-bar>
			<template #left>
				<var-button @click="pop = !pop" color="transparent" round text text-color="#fff">
					<var-icon :size="25" name="menu"/>
				</var-button>
			</template>
			<template #right>
				<var-menu :offset-x="-135" :offset-y="45" v-model:show="theme">
					<var-button @click="theme = !theme" color="transparent" round text text-color="#fff">
						<i class="material-icons">palette</i>
					</var-button>
					<template #menu>
						<div class="theme-list">
							<div @click="toggleTheme(index)" v-for="(theme, index) in themes">
								<div :style="{'--bgColor':theme.code}" class="theme" v-ripple>{{theme.name}}</div>
							</div>
						</div>
					</template>
				</var-menu>
				<var-button @click="pop = !pop" color="transparent" round text text-color="#fff">
					<i class="material-icons">settings</i>
				</var-button>
			</template>
		</var-app-bar>
		<var-popup position="left" v-model:show="pop">
			<div class="sidebar">
				<div class="img">
					<img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/5117caad-75a1-4f9d-870e-14407c77f5bf.webp"
					     alt="">
				</div>
				<div @click="pop=false" class="menu-list">
					<router-link :to="route.path" v-for="route in menu" v-ripple>
						<i class="material-icons">{{route.icon}}</i><span class="menu">{{route.title}}</span>
					</router-link>
					<a @click="logout()" href="javascript:void(0);" v-ripple>
						<i class="material-icons">logout</i><span class="menu">登出</span>
					</a>
				</div>
				<var-divider class="divider">
					<span>Power By Jack</span>
				</var-divider>
			</div>
		</var-popup>
	</div>
</template>

<style lang="scss" scoped>
	.sidebar {
		width: 250px;

		.img {
			height: 150px;

			img {
				object-fit: cover;
				width: 100%;
				height: 100%;
			}
		}
	}

	.menu-list {
		padding: 15px 5px 20px 0;

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
			border-color: var(--menu-bg);
		}

		.menu {
			padding-left: 20px;
			letter-spacing: 5px;
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
