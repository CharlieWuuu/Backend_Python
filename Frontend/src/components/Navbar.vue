<template>
	<nav class="navbar">
		<h1 class="logo" @click="$router.push('/')">簡易圖台</h1>
		<div class="nav-buttons">
			<button v-if="loggedIn && currentRoute.path !== '/map'" @click="$router.push('/map')">
				圖台
			</button>
			<button v-if="loggedIn" @click="handleLogout">登出</button>
			<button v-else @click="$router.push('/login')">登入</button>
		</div>
	</nav>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'

const router = useRouter()
const currentRoute = useRoute()

const auth = useAuthStore()
const { loggedIn } = storeToRefs(auth)

const handleLogout = () => {
	auth.logout()
	router.push('/')
}
</script>

<style scoped>
.navbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	background-color: #4a90e2;
	color: white;
	width: calc(100% - 2rem);
}

.logo {
	cursor: pointer;
	margin: 0;
}

.nav-buttons button {

	background: white;
	color: #4a90e2;
	border: none;
	padding: 0.5rem 1rem;
	cursor: pointer;
	margin: 0 0 0 1rem;
}
</style>
