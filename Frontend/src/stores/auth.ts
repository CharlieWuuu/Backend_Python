import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    loggedIn: localStorage.getItem('loggedIn') === 'true',
    token: localStorage.getItem('token') || '',
  }),
  actions: {
    login(token: string) {
      this.loggedIn = true
      this.token = token
      localStorage.setItem('loggedIn', 'true')
      localStorage.setItem('token', token)
    },
    logout() {
      this.loggedIn = false
      this.token = ''
      localStorage.removeItem('loggedIn')
      localStorage.removeItem('token')
    },
  },
})
