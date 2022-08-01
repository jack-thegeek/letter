<script setup>
import dayjs from 'dayjs'
import axios from '@/request'
import { ref, reactive, onMounted } from 'vue'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import Comment from '@/components/Comment.vue'

const userStore = useUserStore()
const { user_id } = storeToRefs(userStore)

let state = reactive({
    letters: [],
    current: null,
    current_index: '',
    total: ''
})

const getLetters = async () => {
    const result = await axios.get('/letter')
    if (result.status === 200 && result.data) {
        result.data.forEach(value => {
            value.comments.forEach(v => {
                v.created_at = dayjs(value.created_at).format('YYYY-MM-DD HH:mm')
            })
        })
        state.letters = result.data
        state.current = state.letters[0]
        state.current_index = 1
        state.total = result.data.length
    }
}

getLetters()

</script>
<template>
	<div>
		<div class="letter">
			<div class="body" v-if="state.current">{{ state.current.content }}</div>
		</div>
		<div class="pagination">
			<var-pagination @change="(current)=>{state.current = state.letters[current-1]}"
			                :current="state.current_index" :size="1" :total="state.total"
			                :simple="false" :show-size-changer="false"/>
		</div>
		<div class="comment">留言</div>
		<Comment v-if="state.current" v-model:comments="state.current.comments" :model="'letter'"
		         :mid="state.current._id"/>
	</div>
</template>
<style lang="scss" scoped>
	.letter {
		padding: 16px;
		line-height: 1.6;
		margin-bottom: 20px;
		border-radius: 5px;
		background: url("@/assets/images/letter_bg.jpg") 0 0 / 100% auto;

		.body {
			font-size: 14px;
			min-height: 150px;
		}
	}

	.pagination {
		padding: 8px;
		margin: 20px 0;

		.var-pagination {
			justify-content: flex-end;
		}
	}

	.comment {
		color: var(--hoki-400);
		margin: 30px 0 10px;
		padding-left: 10px;
	}

</style>
