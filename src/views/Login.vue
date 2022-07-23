<script setup>
import { reactive, ref } from 'vue'
import axios from '@/request'
import { useRouter } from 'vue-router'
import { useUserStore } from '../store/user'

const router = useRouter()
const userStore = useUserStore()

// https://v1.hitokoto.cn
const formData = reactive({
    name: 'jack',
    password: ''
})

const form = ref(null)

async function login() {
    // let validate = form.validate()
    // if (!validate) return
    const result = await axios.post('/user/logon', formData)
    if (result.data.token) {
        userStore.setToken(result.data.token)
        await router.push('/')
    }
}

</script>

<template>
	<div>
		<var-form ref="form">
			<var-input :rules="[v => !!v || '用户名不能为空']"
			           placeholder="请输入用户名"
			           v-model="formData.name"/>
			<var-input :rules="[v => !!v || '密码不能为空']"
			           placeholder="请输入密码"
			           type="password"
			           v-model="formData.password"/>
		</var-form>
		<div class="btn">
			<var-button @click="login" block type="primary">登录</var-button>
		</div>

	</div>
</template>

<style lang="scss" scoped>
	.btn {
		margin-top: 30px;
	}
</style>
