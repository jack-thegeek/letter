<script setup>
import dayjs from 'dayjs'
import axios from '@/request'
import { Snackbar } from '@varlet/ui'
import { Dialog } from '@varlet/ui'
import '@varlet/ui/es/dialog/style/index.js'
import { ref, reactive } from 'vue'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'

const start = dayjs('2020-05-19', 'YYYY-MM-DD')
const today = dayjs()
const days = today.diff(dayjs(start), 'days')

const userStore = useUserStore()
const { user_id } = storeToRefs(userStore)

const form = ref(null)

let state = reactive({
    comments: []
})

const formData = reactive({
    content: ''
})

const setComments = (data) => {
    data.forEach(value => {
        value.updated_at = dayjs(value.updated_at).format('YYYY-MM-DD HH:mm')
    })
    data.reverse()
    state.comments = data
}

const getComments = async () => {
    const result = await axios.get('/comment')
    if (result.status === 200 && result.data) {
        setComments(result.data)
    }
}

const send = async () => {
    if (!formData.content) {
        Snackbar.error('内容不能为空！')
        return
    }
    const result = await axios.post('/comment', formData)
    if (result.status === 201 && result.data) {
        setComments(result.data)
        formData.content = ''
    }
}

const del = async (id, index) => {
    let confirm = await Dialog('确认删除？')
    if (confirm === 'confirm') {
        const result = await axios.delete('/comment/' + id)
        if (result.status === 204) {
            Snackbar.success('删除成功')
            state.comments.splice(index, 1)
        }
    }
}

const edit = async (id, index) => {
    form.focus()
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
		<div class="board">
			<div class="dash-box">
				<var-input ref="form" :hint="false" :line="true" rows="5" textarea v-model="formData.content"/>
				<div class="send">
					<var-button text round type="primary" @click="send()">
						<span class="material-icons">send</span>
					</var-button>
				</div>
			</div>
		</div>
		<div class="card" v-for="(comment, index) in state.comments">
			<div class="header">
				<span class="author">{{ comment.user.name }}</span>
				<span class="date">{{ comment.updated_at }}</span>
			</div>
			<div class="body">
				<div>{{ comment.content }}</div>
			</div>
			<div class="footer" v-if="comment.user._id === user_id">
				<span class="material-icons del" @click="del(comment._id, index)"
				      v-ripple="{ color: 'var(--red-400)' }">
					delete_outline
				</span>
				<span class="material-icons edit" @click=""
				      v-ripple="{ color: 'var(--steel-blue-400)' }">
					edit_note
				</span>
			</div>
		</div>

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

	.board {
		background-color: white;
		padding: 10px;
		margin-bottom: 15px;
		border: 1px dot-dash #6b798e;

		.dash-box {
			border: 1px dashed;
			padding: 8px;
		}

		.send {
			margin-top: 10px;
			margin-right: 5px;
			text-align: right;
		}
	}

	.card {
		background: white;
		padding: 10px;
		margin-bottom: 15px;

		.header, .footer {
			display: flex;
			font-size: 14px;
		}

		.header {
			justify-content: space-between;
			align-items: end;
			color: #a5a5a5;
			margin-bottom: 15px;

			.date {
				font-size: 12px;
			}
		}

		.body {
			margin-bottom: 20px;
		}

		.footer {
			justify-content: end;
			padding: 5px 0;

			.del, .edit {
				border-radius: 50%;
				padding: 8px;
			}

			.del {
				color: var(--red-500);
			}

			.edit {
				color: var(--steel-blue-600);
			}
		}
	}

	.var-button--round {
		height: auto;
	}

	footer {
		text-align: center;
		padding: 5px 10px;
		margin-top: 60px;
		color: #ccc;
		font-size: 14px;
	}
</style>
