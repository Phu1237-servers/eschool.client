<template>
  <div class="flex-grow flex flex-col justify-center bg-indigo-dark-gradient">
    <div class="container mx-auto px-2 lg:px-0 lg:mb-16">
      <h1 class="text-center text-white my-8 md:mb-16">Log in</h1>
      <div class="max-w-sm mx-auto mb-8">
        <div class="bg-white rounded-lg p-4 md:p-8 mb-2 flex flex-wrap">
          <div class="w-full">
            <div data-v-07f2427d="">
              <form data-v-07f2427d="" class="form" data-bitwarden-watching="1">
                <div data-v-07f2427d="" class="form-group">
                  <div data-v-07f2427d="" class="form-label">Your email</div>
                  <div data-v-07f2427d="" class="w-full">
                    <input
                      data-v-07f2427d=""
                      type="text"
                      placeholder="elon@musk.io"
                      tabindex="1"
                      class="form-field form-field-lg"
                    />
                    <!---->
                    <!---->
                  </div>
                  <a
                    data-v-07f2427d=""
                    href="#"
                    class="text-right text-sm font-medium block w-full text-green hover:text-green-dark mt-1"
                    >Forgot your password?</a
                  >
                  <a
                    data-v-07f2427d=""
                    href="#"
                    class="text-right text-sm font-medium block w-full text-green hover:text-green-dark mt-1"
                    style="display: none"
                    >Login with password</a
                  >
                </div>
                <div data-v-07f2427d="" class="form-group flex-wrap">
                  <label data-v-07f2427d="" for="" class="form-label">Your password</label>
                  <div data-v-07f2427d="" class="w-full">
                    <input
                      data-v-07f2427d=""
                      type="password"
                      placeholder="Your super secret password"
                      tabindex="2"
                      class="form-field form-field-lg"
                    />
                    <!---->
                  </div>
                </div>
                <!---->
                <div data-v-07f2427d="" class="form-group">
                  <button
                    data-v-07f2427d=""
                    tabindex="3"
                    class="btn btn-lg btn-green-gradient btn-block"
                  >
                    <span data-v-07f2427d="">Login</span>
                    <span data-v-07f2427d="" style="display: none">Recover password</span>
                    <i data-v-07f2427d="" class="far fa-spinner fa-spin" style="display: none"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <p class="text-center text-sm font-medium text-purple-light">
          No account yet?
          <a
            href="https://vueschool.io/register"
            title="Click here to create an account on Vue School"
            class="text-green hover:text-green-dark underline"
            >Register now</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
