import { ref } from 'vue'
import { defineStore } from 'pinia'
import { type User, defaultUser } from '@/models/User'
import http from '@/plugins/http'

export const useUserStore = defineStore('userStore', () => {
  const user = ref<User>(defaultUser)
  function setUser(data: User) {
    user.value = data
  }
  function getUser() {
    return user.value
  }
  function logout() {
    user.value = defaultUser
    localStorage.removeItem('token')
  }
  function fetchUser() {
    return new Promise((resolve, reject) => {
      http(import.meta.env.VITE_API_ENDPOINT + '/user', {
        method: 'GET'
      }).then((res) => {
        res
          .json()
          .then((response) => {
            let data = response
            setUser(data)
            resolve(data)
          })
          .catch((error) => {
            console.log(error)
            reject(error)
          })
      })
    })
  }
  function isLoggedIn() {
    return localStorage.getItem('token') && user.value.id !== 0
  }

  return {
    user,
    setUser,
    getUser,
    fetchUser,
    logout,
    isLoggedIn
  }
})
