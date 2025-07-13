<template>
	<div class="login">
		<h2>登入</h2>
		<form @submit.prevent="handleLogin">
			<input type="text" v-model="username" placeholder="帳號" required />
			<input type="password" v-model="password" placeholder="密碼" required />
			<button type="submit">登入</button>
			<p v-if="error" class="error">{{ error }}</p>
		</form>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()
const auth = useAuthStore()

const handleLogin = async () => {
	try {
		const res = await axios.post('http://127.0.0.1:8000/login', {
			username: username.value,
			password: password.value
		})
		auth.login(res.data.token)
		router.push('/map')
	} catch {
		error.value = '登入失敗：帳號或密碼錯誤'
	}
}
</script>

<style scoped>
.login {
	padding: 2rem;
	text-align: center;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	justify-content: center;
	align-items: center;

}

input {
	display: block;
	margin: 1rem auto;
	padding: 0.5rem;
	width: 200px;
}

button {
	padding: 0.5rem 1.5rem;
	background: #4a90e2;
	color: white;
	border: none;
	cursor: pointer;
}

.error {
	color: red;
	margin-top: 1rem;
}
</style>
