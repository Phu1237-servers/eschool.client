<template>
  <div class="flex-grow flex flex-col justify-center bg-indigo-dark-gradient">
    <div class="container mx-auto px-2 lg:px-0 lg:mb-16">
      <h1 class="text-center text-white my-8 md:mb-16">Create Account</h1>
      <div class="max-w-md mx-auto mb-8">
        <div class="registration-modal bg-white rounded-lg p-4 md:p-8 mb-2 flex flex-wrap">
          <div class="w-full">
            <div data-v-1d35a8b4="">
              <div data-v-1d35a8b4="">
                <div
                  class="grecaptcha-badge"
                  data-style="bottomright"
                  style="
                    width: 256px;
                    height: 60px;
                    display: block;
                    transition: right 0.3s ease 0s;
                    position: fixed;
                    bottom: 14px;
                    right: -186px;
                    box-shadow: gray 0px 0px 5px;
                    border-radius: 2px;
                    overflow: hidden;
                  "
                >
                  <div class="grecaptcha-logo">
                    <iframe
                      title="reCAPTCHA"
                      width="256"
                      height="60"
                      role="presentation"
                      name="a-fz2qjdmbs4ut"
                      frameborder="0"
                      scrolling="no"
                      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                      src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LftxMoeAAAAABgjv2KoBuC2-EKDaHwmFAa1vkdw&amp;co=aHR0cHM6Ly92dWVzY2hvb2wuaW86NDQz&amp;hl=vi&amp;v=u-xcq3POCWFlCr3x8_IPxgPu&amp;size=invisible&amp;cb=9m8ne5nrbbcz"
                    ></iframe>
                  </div>
                  <div class="grecaptcha-error"></div>
                  <textarea
                    id="g-recaptcha-response"
                    name="g-recaptcha-response"
                    class="g-recaptcha-response"
                    style="
                      width: 250px;
                      height: 40px;
                      border: 1px solid rgb(193, 193, 193);
                      margin: 10px 25px;
                      padding: 0px;
                      resize: none;
                      display: none;
                    "
                  ></textarea>
                </div>
                <iframe style="display: none"></iframe>
              </div>
              <form
                data-v-1d35a8b4=""
                class="form h-full flex flex-col justify-between"
                data-bitwarden-watching="1"
              >
                <div data-v-1d35a8b4=""><h2 data-v-1d35a8b4="">Create Account</h2></div>
                <div data-v-1d35a8b4="">
                  <div data-v-1d35a8b4="" class="mb-4 md:flex">
                    <label data-v-1d35a8b4="" class="flex flex-wrap mb-4 md:mb-0 md:w-1/2 md:mr-3"
                      ><div data-v-1d35a8b4="" class="flex justify-between w-full mb-1">
                        <span data-v-1d35a8b4="" class="text-nepal text-xs"> Name </span>
                        <!---->
                      </div>
                      <input
                        data-v-1d35a8b4=""
                        id="firstname"
                        type="text"
                        placeholder="Enter your name..."
                        required="required"
                        class="field"
                    /></label>
                    <label data-v-1d35a8b4="" class="md:w-1/2 md:ml-3"
                      ><div data-v-1d35a8b4="" class="flex justify-between w-full mb-1">
                        <span data-v-1d35a8b4="" class="text-nepal text-xs"> Email </span>
                        <span data-v-1d35a8b4="" class="text-magenta text-xs"
                          ><!---->
                          <!---->
                          Email taken.
                          <a data-v-1d35a8b4="" href="/login" class="text-pale-blue"
                            >Login?</a
                          ></span
                        >
                      </div>
                      <input
                        data-v-1d35a8b4=""
                        id="email"
                        type="email"
                        placeholder="Enter your email..."
                        required="required"
                        class="field error"
                    /></label>
                  </div>
                  <div data-v-1d35a8b4="" class="mb-6">
                    <label data-v-1d35a8b4=""
                      ><div data-v-1d35a8b4="" class="flex justify-between w-full mb-1">
                        <span data-v-1d35a8b4="" class="text-nepal text-xs"> Password </span>
                        <!---->
                      </div>
                      <input
                        data-v-1d35a8b4=""
                        id="password"
                        type="password"
                        placeholder="Enter your password..."
                        required="required"
                        class="field"
                    /></label>
                  </div>
                  <div data-v-1d35a8b4="">
                    <div data-v-1d35a8b4="" class="text-center mb-8 text-sm mt-1">
                      By creating an account you accept our
                      <a
                        data-v-1d35a8b4=""
                        href="/terms"
                        target="_blank"
                        class="text-pale-blue hover:text-pale-blue"
                        >terms</a
                      >
                      and
                      <a
                        data-v-1d35a8b4=""
                        href="/privacy"
                        target="_blank"
                        class="text-pale-blue hover:text-pale-blue"
                        >privacy policy</a
                      >
                    </div>
                  </div>
                  <!---->
                </div>
                <div
                  data-v-1d35a8b4=""
                  class="flex-col-reverse flex md:items-center md:justify-between md:flex-row"
                >
                  <a
                    data-v-1d35a8b4=""
                    href="/login?email=phu1237@gmail.com"
                    class="block text-pale-blue font-medium uppercase text-sm cursor-pointer text-center hover:text-pale-blue mb-4 md:mb-0 md:text-left"
                  >
                    I already have an account
                  </a>
                  <button
                    data-v-1d35a8b4=""
                    class="bg-pale-blue text-white font-medium uppercase p-button text-sm rounded-full mb-4 md:mb-0"
                  >
                    <i
                      data-v-1d35a8b4=""
                      class="far fa-spinner fa-spin mr-2"
                      style="display: none"
                    ></i>
                    Create account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
