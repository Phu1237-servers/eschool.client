<template>
  <div class="flex-grow flex flex-col justify-center bg-indigo-dark-gradient">
    <div class="container mx-auto px-2 lg:px-0 lg:mb-16">
      <h1 class="text-center text-white my-8 md:mb-16">Log in</h1>
      <div class="max-w-sm mx-auto mb-8">
        <div class="bg-white rounded-lg p-4 md:p-8 mb-2 flex flex-wrap">
          <div class="w-full">
            <div>
              <form class="form">
                <div class="form-group">
                  <div class="form-label">Your email</div>
                  <div class="w-full">
                    <input
                      type="text"
                      placeholder="elon@musk.io"
                      class="form-field form-field-lg"
                      v-model="email"
                    />
                  </div>
                  <a
                    href="#"
                    class="text-right text-sm font-medium block w-full text-green hover:text-green-dark mt-1"
                    >Forgot your password?</a
                  >
                  <a
                    href="#"
                    class="text-right text-sm font-medium block w-full text-green hover:text-green-dark mt-1"
                    style="display: none"
                    >Login with password</a
                  >
                </div>
                <div class="form-group flex-wrap">
                  <label for="" class="form-label">Your password</label>
                  <div class="w-full">
                    <input
                      type="password"
                      placeholder="Your super secret password"
                      class="form-field form-field-lg"
                      v-model="password"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <button @click.prevent="login" class="btn btn-lg btn-green-gradient btn-block">
                    <span>Login</span>
                    <span style="display: none">Recover password</span>
                    <i class="far fa-spinner fa-spin" style="display: none"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <p class="text-center text-sm font-medium text-purple-light">
          No account yet?
          <router-link
            :to="{ name: 'register' }"
            title="Click here to create an account on Vue School"
            class="text-green hover:text-green-dark underline"
          >
            Register now
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import http from '@/plugins/http'
import { ref } from 'vue'
const email = ref<String>('')
const password = ref<String>('')

function login() {
  http(import.meta.env.VITE_API_ENDPOINT + '/login', {
    method: 'POST',
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  }).then((res) => {
    res
      .json()
      .then((response) => {
        let data = response
        localStorage.setItem('token', data.token)
        http(import.meta.env.VITE_API_ENDPOINT + '/user', {
          method: 'GET'
        }).then((res) => {
          res
            .json()
            .then((response) => {
              let data = response
            })
            .catch((error) => {
              console.log(error)
              // router.push({ name: 'home' })
            })
        })
      })
      .catch((error) => {
        console.log(error)
        // router.push({ name: 'home' })
      })
  })
}
</script>
