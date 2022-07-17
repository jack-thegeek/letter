<script setup>
import {reactive, ref} from 'vue'
import axios from '@/request'
import {useRouter} from 'vue-router'
import {useUserStore} from '../store/user'

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
			<var-input placeholder="请输入用户名"
			           :rules="[v => !!v || '用户名不能为空']"
			           v-model="formData.name"/>
			<var-input type="password"
			           placeholder="请输入密码"
			           :rules="[v => !!v || '密码不能为空']"
			           v-model="formData.password"/>
		</var-form>
		<div class="btn">
			<var-button block type="primary" @click="login">登录</var-button>
		</div>

	</div>
</template>

<style scoped lang="scss">
	.btn {
		margin-top: 30px;
	}
</style>
