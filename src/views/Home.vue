<script setup>
import dayjs from 'dayjs'
import axios from '@/request'
import { ref, reactive, onMounted } from 'vue'
import Comment from '@/components/Comment.vue'

const start = dayjs('2020-05-19', 'YYYY-MM-DD')
const today = dayjs()
const days = today.diff(dayjs(start), 'days')

let state = reactive({
    comments: []
})

const getComments = async () => {
    const result = await axios.get('/comment')
    if (result.status === 200 && result.data) {
        state.comments = result.data
    }
}

getComments()

</script>

<template>
	<div>
		<div class="banner">
			<div class="title">
				在一起已 {{days}} 天啦
			</div>
		</div>
		<div>
			<div class="group-name">纸短情长</div>
			<div class="group">
				<router-link to="/letter">
					<i class="material-icons">favorite</i><span class="menu">情书</span>
				</router-link>
				<router-link to="/art">
					<i class="material-icons">style</i><span class="menu">画集</span>
				</router-link>
			</div>

			<div class="group-name">最好的我们</div>
			<div class="group">
				<router-link to="/album">
					<i class="material-icons">photo_camera</i><span class="menu">相册</span>
				</router-link>
				<router-link to="/footprint">
					<i class="material-icons">explore</i><span class="menu">足迹</span>
				</router-link>
			</div>

			<div class="group-name">未来可期呀</div>
			<div class="group">
				<router-link to="/todo">
					<i class="material-icons">edit_calendar</i><span class="menu">愿望</span>
				</router-link>
				<router-link to="/lottery">
					<i class="material-icons">widgets</i><span class="menu">抽奖</span>
				</router-link>
				<router-link to="/about">
					<i class="material-icons">help</i><span class="menu">关于</span>
				</router-link>
			</div>
		</div>

		<div class="group-name">留言板</div>
		<Comment v-if="state.comments.length" v-model:comments="state.comments" />

		<footer>
			一起加油呀 (ง •̀_•́)ง
		</footer>
	</div>
</template>
<style lang="scss" scoped>
	.banner {
		font-family: writing;
		height: 210px;
		padding: 15px;
		margin: 10px 0 25px;
		border-radius: 5px;
		text-align: center;
		font-size: 28px;
		background: url("@/assets/images/banner_bg.jpg") 0 0 / 100% auto no-repeat;
	}

	.title {
		margin-top: 40px;
		-webkit-text-stroke: 0.3px #323c47;
	}

	a {
		background: #f2f3f7;
		padding: 10px 20px;
		margin-bottom: 20px;
		width: 35%;
		line-height: 23px;
		font-size: 16px;
		box-shadow: 5px 5px 10px #dde2e9, -5px -5px 10px #fff;
		border-radius: 8px;

		i {
			font-size: 22px;
		}

		i, span {
			vertical-align: middle;
		}

		.menu {
			padding-left: 15px;
			letter-spacing: 10px;
		}
	}

	a:link, a:hover, a:visited, a:active {
		color: var(--color-text);
	}

	a:hover {
		box-shadow: inset 5px 5px 10px #dde2e9, inset -5px -5px 10px #fff;
	}

	.group {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.group-name {
		color: var(--hoki-400);
		margin: 10px 0;
		padding-left: 10px;
	}

	footer {
		text-align: center;
		padding: 5px 10px;
		margin-top: 60px;
		color: #ccc;
		font-size: 14px;
	}
</style>
