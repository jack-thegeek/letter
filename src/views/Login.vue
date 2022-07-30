<script setup>
import { reactive, ref } from 'vue'
import axios from '@/request'
import { useRouter } from 'vue-router'
import { useUserStore } from '../store/user'
import { Snackbar } from '@varlet/ui'

const router = useRouter()
const userStore = useUserStore()

const formData = reactive({
    name: 'Jack',
    password: ''
})

const form = ref(null)
const show = ref(true)

async function login () {
    // let validate = form.validate()
    // if (!validate) return
    const result = await axios.post('/user/logon', formData)
    console.log(result)
    if (result.data.token) {
        userStore.setToken(result.data.token)
        await router.push('/')
    }

}

</script>

<template>
	<div class="login-container">
		<div class="form">
			<var-form ref="form">
				<var-input :rules="[v => !!v || '用户名不能为空']"
				           placeholder="用户名"
				           v-model="formData.name"/>
				<var-input :rules="[v => !!v || '密码不能为空']"
				           placeholder="密码"
				           type="password"
				           v-model="formData.password"/>
			</var-form>
			<div class="btn">
				<var-button size="large" @click="login" block type="primary">登录</var-button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.login-container {
		height: 94vh;
		margin: -15px;
		background: url("https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a5666f6b-71b9-4a4c-81fd-aaea0ac48905/bec87f14-2ed2-4bb1-a58e-7f1489f2aed1.webp");
	}

	.login {
		height: 400px;
		padding: 25px;
	}

	.form {
		padding: 20px;
	}

	.btn {
		margin-top: 30px;
	}
</style>
