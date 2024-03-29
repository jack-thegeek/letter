<script setup>
import dayjs from 'dayjs'
import axios from '@/request'
import { Snackbar } from '@varlet/ui'
import { Dialog } from '@varlet/ui'
import '@varlet/ui/es/dialog/style/index.js'
import { ref, reactive, watch } from 'vue'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { user_id } = storeToRefs(userStore)

const emits = defineEmits(['update:comments'])
// defineEmits和defineProps在<script setup>中自动可用，无需导入
const props = defineProps({
    comments: {
        type: Array,
        default: []
    },
    model: {
        type: String,
        default: ''
    },
    mid: {
        type: String,
        default: ''
    }
})

let base_url = '/comment'
const setBaseUrl = () => {
    if (props.model && props.mid) {
        base_url = '/' + props.model + '/' + props.mid + '/comment'
    }
}

setBaseUrl()

const setComments = (data) => {
    if (!Array.isArray(data)) data = data.comments
    data.forEach(value => {
        value.created_at = dayjs(value.created_at).format('YYYY-MM-DD HH:mm')
    })
    emits('update:comments', data)
}

const formData = reactive({
    content: ''
})

const send = async () => {
    if (!formData.content) {
        Snackbar.error('内容不能为空！')
        return
    }
    const result = await axios.post(base_url, formData)
    if (result.status === 201 && result.data) {
        setComments(result.data)
        formData.content = ''
    }
}
const refresh = async () => {
    let get_url = base_url
    if (props.model && props.mid) {
        get_url = '/' + props.model + '/' + props.mid
    }
    const result = await axios.get(get_url)
    if (result.status === 200 && result.data) {
        setComments(result.data)
        Snackbar.success('留言已刷新')
    }
}

const del = async (id, index) => {
    let confirm = await Dialog('确认删除？')
    if (confirm === 'confirm') {
        const result = await axios.delete(base_url + '/' + id)
        if (result.status === 204) {
            Snackbar.success('删除成功')
            props.comments.splice(index, 1)
        }
    }
}

let edit_data = reactive({
    content: '',
    edit_id: '',
    edit_index: ''
})
const isEdit = ref(false)
const editForm = ref(null)

const edit = async (id, index) => {
    edit_data.content = props.comments[index].content
    edit_data.edit_id = id
    edit_data.edit_index = index
    isEdit.value = true
    setTimeout(() => {
        editForm.value.focus()
    })
}

const save = async () => {
    if (!edit_data.content) {
        Snackbar.error('内容不能为空！')
        return
    }
    const result = await axios.put(base_url + '/' + edit_data.edit_id, { content: edit_data.content })
    if (result.status === 200 && result.data) {
        setComments(result.data)
    }
}

watch(() => props.mid, (newValue, oldValue) => {
      if (newValue) {
          setBaseUrl()
      }
  }
)
</script>

<template>
	<div>
		<div class="board">
			<div class="dash-box">
				<var-input :hint="false" :line="true" rows="5" textarea v-model="formData.content"/>
				<div class="send">
					<var-button text round type="primary" @click="refresh()">
						<span class="material-icons">refresh</span>
					</var-button>
					<var-button text round type="primary" @click="send()">
						<span class="material-icons">send</span>
					</var-button>
				</div>
			</div>
		</div>
		<div class="card" v-for="(comment, index) in props.comments">
			<div class="header">
				<span class="author">{{ comment.user.name }}</span>
				<span class="date">{{ comment.created_at }}</span>
			</div>
			<div class="body">
				<div v-html="comment.content"></div>
			</div>
			<div class="footer" v-if="comment.user._id === user_id">
				<span class="material-icons del" @click="del(comment._id, index)"
				      v-ripple="{ color: 'var(--red-400)' }">
					delete_outline
				</span>
				<span class="material-icons edit" @click="edit(comment._id, index)"
				      v-ripple="{ color: 'var(--steel-blue-400)' }">
					edit_note
				</span>
			</div>
		</div>
		<div class="no-comment" v-if="props.comments.length === 0">
			暂无留言
		</div>
		<var-dialog title="修改" v-model:show="isEdit" @confirm="save()"
		            dialog-class="edit-dialog" confirm-button-text="保存">
			<var-input ref="editForm" rows="5" textarea v-model="edit_data.content"/>
		</var-dialog>
	</div>
</template>

<style lang="scss" scoped>
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
			white-space: pre-wrap;
		}

		.footer {
			justify-content: flex-end;
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

	.no-comment {
		padding: 50px 10px;
		border: 1px dashed #ddd;
		text-align: center;
		font-size: 18px;
		color: #a2a2a2;
	}
</style>
